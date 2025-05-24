import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import allContests from '../data/allContests.json';
import {
  FiArrowLeft,
  FiCalendar,
  FiAward,
  FiUsers,
  FiTag,
  FiClock,
} from 'react-icons/fi';
import './ContestDetails.css'; // 👈 Add CSS file

const ContestDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);
  const contest = allContests.find((c) => c.title === decodedTitle);

  if (!contest) {
    return (
      <div className="contestDetail__notFoundContainer">
        <div className="contestDetail__notFoundBox">
          <h2 className="contestDetail__notFoundTitle">Contest not found</h2>
          <button
            className="contestDetail__backBtn"
            onClick={() => navigate(-1)}
          >
            <FiArrowLeft /> Go Back
          </button>
        </div>
      </div>
    );
  }

  const formatDateTime = (dateStr) =>
    new Date(dateStr).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'contestDetail__status--active';
      case 'upcoming':
        return 'contestDetail__status--upcoming';
      case 'completed':
        return 'contestDetail__status--completed';
      default:
        return 'contestDetail__status--default';
    }
  };

  return (
    <div className="contestDetail__container">
      <div className="contestDetail__wrapper">
        <button
          onClick={() => navigate(-1)}
          className="contestDetail__backLink"
        >
          <FiArrowLeft className="icon" /> Back to Contests
        </button>

        <div className="contestDetail__card">
          {contest.bannerUrl && (
            <div className="contestDetail__banner">
              <img
                src={contest.bannerUrl}
                alt={`${contest.title} banner`}
                className="contestDetail__bannerImg"
              />
            </div>
          )}

          <div className="contestDetail__content">
            <div className="contestDetail__header">
              <h1 className="contestDetail__title">{contest.title}</h1>
              <span className={`contestDetail__status ${getStatusBadge(contest.status)}`}>
                {contest.status}
              </span>
            </div>

            <div className="contestDetail__grid">
              <div className="contestDetail__detailItem">
                <FiTag className="icon" />
                <div>
                  <p className="label">Category</p>
                  <p>{contest.category}</p>
                </div>
              </div>

              <div className="contestDetail__detailItem">
                <FiUsers className="icon" />
                <div>
                  <p className="label">Total Registrations</p>
                  <p>{contest.totalRegistrations}</p>
                </div>
              </div>

              {contest.registrationStart && (
                <div className="contestDetail__detailItem">
                  <FiCalendar className="icon" />
                  <div>
                    <p className="label">Registration Start</p>
                    <p>{formatDateTime(contest.registrationStart)}</p>
                  </div>
                </div>
              )}

              {contest.registrationEnd && (
                <div className="contestDetail__detailItem">
                  <FiClock className="icon" />
                  <div>
                    <p className="label">Registration End</p>
                    <p>{formatDateTime(contest.registrationEnd)}</p>
                  </div>
                </div>
              )}

              {contest.deadline && (
                <div className="contestDetail__detailItem">
                  <FiClock className="icon" />
                  <div>
                    <p className="label">Submission Deadline</p>
                    <p>{formatDateTime(contest.deadline)}</p>
                  </div>
                </div>
              )}
            </div>

            {contest.description && (
              <div className="contestDetail__section">
                <h3>Description</h3>
                <p>{contest.description}</p>
              </div>
            )}

            {contest.prizes && (
              <div className="contestDetail__section">
                <h3 className="contestDetail__prizeTitle">
                  <FiAward className="icon yellow" /> Prizes
                </h3>
                <div className="contestDetail__prizeBox">
                  <p>{contest.prizes}</p>
                </div>
              </div>
            )}

            {contest.rules && contest.rules.length > 0 && (
              <div className="contestDetail__section">
                <h3>Rules & Guidelines</h3>
                <ul className="contestDetail__rulesList">
                  {contest.rules.map((rule, idx) => (
                    <li key={idx}>
                      <span className="contestDetail__ruleIndex">{idx + 1}</span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="contestDetail__actions">
              <button
                className="contestDetail__registerBtn"
                onClick={() => alert('Registration coming soon!')}
              >
                Register Now
              </button>
              <button
                className="contestDetail__backSecondaryBtn"
                onClick={() => navigate(-1)}
              >
                Back to Contests
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContestDetail;
