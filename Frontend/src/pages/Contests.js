import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Contests.css";

const allContests = {
  ongoing: [
    {
      title: "Photography Contest",
      deadline: "2025-04-15T23:59:59",
      category: "Photography",
    },
    {
      title: "Poetry Slam",
      deadline: "2025-04-16T23:59:59",
      category: "Literature",
    },
    {
      title: "Code Challenge",
      deadline: "2025-04-20T23:59:59",
      category: "Coding",
    },
    {
      title: "Drawing Contest",
      deadline: "2025-04-22T23:59:59",
      category: "Art",
    },
  ],
  upcoming: [
    { title: "Short Story Contest", category: "Literature" },
    { title: "UI Design Battle", category: "Design" },
    { title: "Eco Poster Making", category: "Art" },
    { title: "Startup Idea Pitch", category: "Entrepreneurship" },
    { title: "Gaming Tournament", category: "Gaming" },
  ],
  past: [
    { title: "Winter Hackathon", category: "Coding" },
    { title: "Logo Redesign", category: "Design" },
    { title: "Music Composition", category: "Music" },
    { title: "Monsoon Photography", category: "Photography" },
    { title: "Blog-a-thon", category: "Literature" },
    { title: "Mini App Contest", category: "Coding" },
    { title: "Creative Caption", category: "Social Media" },
    { title: "Tech Trivia", category: "Quiz" },
  ],
};

const Contests = () => {
  const [filter, setFilter] = useState("ongoing");
  const [category, setCategory] = useState("All");
  const [timers, setTimers] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimers = {};
      allContests.ongoing.forEach((contest) => {
        const timeLeft = new Date(contest.deadline) - new Date();
        updatedTimers[contest.title] =
          timeLeft > 0 ? formatTime(timeLeft) : "Expired";
      });
      setTimers(updatedTimers);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const categories = [
    "All",
    ...new Set(
      [
        ...allContests.ongoing,
        ...allContests.upcoming,
        ...allContests.past,
      ].map((c) => c.category)
    ),
  ];

  const getFilteredContests = () => {
    let contests = allContests[filter];
    if (category !== "All") {
      contests = contests.filter((c) => c.category === category);
    }
    return contests;
  };

  return (
    <div className="contests-bg py-5">
      <div className="container" style={{ fontFamily: "Poppins, sans-serif" }}>
        <h1 className="text-center text-light mb-5 fw-bold display-4">
          Contests
        </h1>

        {/* Filters */}
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-2">
          <div className="btn-group shadow-sm">
            {["ongoing", "upcoming", "past"].map((type) => (
              <button
                key={type}
                className={`btn custom-btn ${filter === type ? "active" : ""}`}
                onClick={() => setFilter(type)}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>
          <select
            className="form-select w-auto custom-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Cards */}
        <div className="row">
          {getFilteredContests().map((contest, idx) => (
            <div className="col-md-4 mb-4" key={idx}>
              <div className="contest-card glassmorph p-4 rounded-4 shadow-sm h-100 position-relative">
                <h5 className="fw-bold text-light">{contest.title}</h5>
                <p className="text-light small">
                  Category: <strong>{contest.category}</strong>
                </p>

                {filter === "ongoing" && (
                  <>
                    <span className="badge bg-success mb-2">
                      {timers[contest.title]}
                    </span>
                    <Link
                      to={`/contest/${encodeURIComponent(contest.title)}`}
                      className="btn btn-outline-warning mt-2 w-100"
                    >
                      Join Now
                    </Link>
                  </>
                )}

                {filter === "upcoming" && (
                  <span className="badge bg-info">Coming Soon</span>
                )}

                {filter === "past" && (
                  <span className="badge bg-danger">Past</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contests;
