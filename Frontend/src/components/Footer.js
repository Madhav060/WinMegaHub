import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-3" style={{ fontFamily: 'Roboto Serif, serif', fontSize: '0.75rem' }}>
      <div className="container">
        <div className="row">

          {/* About Us */}
          <div className="col-md-3 mb-3">
            <h6 className="text-warning fw-bold">About WinMegaHub</h6>
            <p className="mb-1">WinMegaHub is your ultimate destination for exciting contests and competitions where talent meets opportunity.</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-3">
            <h6 className="text-warning fw-bold">Quick Links</h6>
            <ul className="list-unstyled mb-1">
              <li><a href="#" className="text-white text-decoration-none">🏠 Home</a></li>
              <li><a href="#" className="text-white text-decoration-none">ℹ️ About Us</a></li>
              <li><a href="#" className="text-white text-decoration-none">📩 Contact Us</a></li>
              <li><a href="https://winmegahub.com/terms-conditions" className="text-white text-decoration-none">📜 Terms & Conditions</a></li>
              <li><a href="https://winmegahub.com/privacy-policy" className="text-white text-decoration-none">🔒 Privacy Policy</a></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="col-md-3 mb-3">
            <h6 className="text-warning fw-bold">Follow Us</h6>
            <p className="mb-1">Stay connected with us:</p>
            <a href="#" className="text-warning me-2"><i className="fab fa-facebook fa-sm"></i></a>
            <a href="#" className="text-warning me-2"><i className="fab fa-instagram fa-sm"></i></a>
            <a href="#" className="text-warning me-2"><i className="fab fa-twitter fa-sm"></i></a>
            <a href="#" className="text-warning"><i className="fab fa-youtube fa-sm"></i></a>
          </div>

          {/* Newsletter */}
          <div className="col-md-3 mb-3">
            <h6 className="text-warning fw-bold">Newsletter</h6>
            <p className="mb-1">Subscribe for contest updates:</p>
            <div className="input-group input-group-sm">
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button className="btn btn-warning">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-2 border-top border-secondary mt-3" style={{ fontSize: '0.7rem' }}>
          <p className="mb-0">© 2025 WinMegaHub. All Rights Reserved. | 
            <a href="https://winmegahub.com/privacy-policy" className="text-warning text-decoration-none mx-1">Privacy Policy</a> | 
            <a href="https://winmegahub.com/terms-conditions" className="text-warning text-decoration-none mx-1">Terms of Use</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
