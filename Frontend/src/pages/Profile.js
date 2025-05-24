import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import './profile.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [activeSection, setActiveSection] = useState('dashboard');

  const handleLogout = () => {
    setUser(null);
    navigate('/login');
  };

  // Sample data - replace with your actual data
  const userData = {
    walletBalance: 12500,
    contests: {
      participated: 24,
      wins: 8,
      bestScore: 95,
      upcoming: 3
    },
    kycStatus: 'Pending',
    referralEarnings: 3200
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <span className="sidebar-logo">Zarss</span>
          <div className="sidebar-header-line"></div>
        </div>
        
        <div className="profile-picture-container">
          <img 
            src="https://example.com/path-to-profile-image.jpg"
            alt="Profile" 
            className="profile-picture"
          />
        </div>
        
        <div className="sidebar-welcome">
          Welcome Back,<br/>
          <span className="welcome-name">{user?.fullName || 'Ram Thakur'}</span>
        </div>
        
        <div className="sidebar-nav">
          <div 
            className={`sidebar-item ${activeSection === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveSection('dashboard')}
          >
            Dashboard
          </div>
          <div 
            className={`sidebar-item ${activeSection === 'account' ? 'active' : ''}`}
            onClick={() => setActiveSection('account')}
          >
            Account Settings
          </div>
          <div 
            className={`sidebar-item ${activeSection === 'wallet' ? 'active' : ''}`}
            onClick={() => setActiveSection('wallet')}
          >
            Wallet Summary
          </div>
          <div 
            className={`sidebar-item ${activeSection === 'contest' ? 'active' : ''}`}
            onClick={() => setActiveSection('contest')}
          >
            Contest Participation
          </div>
          <div 
            className={`sidebar-item ${activeSection === 'kyc' ? 'active' : ''}`}
            onClick={() => setActiveSection('kyc')}
          >
            KYC Verification
          </div>
          <div 
            className={`sidebar-item ${activeSection === 'referral' ? 'active' : ''}`}
            onClick={() => setActiveSection('referral')}
          >
            Referral Program
          </div>
          <div 
            className={`sidebar-item ${activeSection === 'support' ? 'active' : ''}`}
            onClick={() => setActiveSection('support')}
          >
            Support & Help
          </div>
        </div>
        
        <div className="sidebar-footer">
          <div className="sidebar-logout-btn" onClick={handleLogout}>
            Log Out
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {activeSection === 'dashboard' && (
          <DashboardHome userData={userData} />
        )}

        {activeSection === 'account' && (
          <AccountSettings />
        )}

        {activeSection === 'wallet' && (
          <WalletSummary userData={userData} />
        )}

        {activeSection === 'contest' && (
          <ContestParticipation userData={userData} />
        )}

        {activeSection === 'kyc' && (
          <KYCVerification userData={userData} />
        )}

        {activeSection === 'referral' && (
          <ReferralProgram userData={userData} />
        )}

        {activeSection === 'support' && (
          <SupportHelp />
        )}
      </div>
    </div>
  );
};

// Component for each section
const DashboardHome = ({ userData }) => (
  <div className="section-container">
    <h2 className="section-title">Dashboard Overview</h2>
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Wallet Balance</h3>
        <p>₹{userData.walletBalance.toLocaleString()}</p>
      </div>
      <div className="stat-card">
        <h3>Contest Wins</h3>
        <p>{userData.contests.wins}</p>
      </div>
      <div className="stat-card">
        <h3>Referral Earnings</h3>
        <p>₹{userData.referralEarnings.toLocaleString()}</p>
      </div>
    </div>
  </div>
);

const AccountSettings = () => (
  <div className="section-container">
    <h2 className="section-title">Account Settings</h2>
    <div className="settings-card">
      <h3>Change Password</h3>
      <div className="form-group">
        <label>Current Password</label>
        <input type="password" />
      </div>
      <div className="form-group">
        <label>New Password</label>
        <input type="password" />
      </div>
      <div className="form-group">
        <label>Confirm New Password</label>
        <input type="password" />
      </div>
      <button className="primary-btn">Update Password</button>
    </div>

    <div className="settings-card">
      <h3>Update Contact Information</h3>
      <div className="form-group">
        <label>Mobile Number</label>
        <input type="tel" />
        <button className="secondary-btn">Verify via OTP</button>
      </div>
      <div className="form-group">
        <label>Email Address</label>
        <input type="email" />
        <button className="secondary-btn">Verify via OTP</button>
      </div>
    </div>

    <div className="settings-card">
      <h3>Notification Preferences</h3>
      <div className="toggle-group">
        <label>Email Notifications</label>
        <label className="switch">
          <input type="checkbox" defaultChecked />
          <span className="slider"></span>
        </label>
      </div>
      <div className="toggle-group">
        <label>SMS Notifications</label>
        <label className="switch">
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  </div>
);

const WalletSummary = ({ userData }) => (
  <div className="section-container">
    <h2 className="section-title">Wallet Summary</h2>
    
    <div className="wallet-balance-card">
      <h3>Current Balance</h3>
      <p className="balance-amount">₹{userData.walletBalance.toLocaleString()}</p>
    </div>

    <div className="action-buttons">
      <button className="primary-btn">Withdraw Funds</button>
      <button className="primary-btn">Add Money via Razorpay</button>
    </div>

    <div className="transactions-card">
      <h3>Transaction History</h3>
      <div className="transaction-table">
        <div className="transaction-header">
          <span>Date</span>
          <span>Description</span>
          <span>Amount</span>
          <span>Status</span>
        </div>
        <div className="transaction-row">
          <span>2023-06-15</span>
          <span>Contest Win</span>
          <span className="credit">+₹5,000</span>
          <span className="status completed">Completed</span>
        </div>
        <div className="transaction-row">
          <span>2023-06-10</span>
          <span>Contest Entry</span>
          <span className="debit">-₹1,000</span>
          <span className="status completed">Completed</span>
        </div>
      </div>
    </div>
  </div>
);

const ContestParticipation = ({ userData }) => (
  <div className="section-container">
    <h2 className="section-title">Contest Participation</h2>
    
    <div className="stats-grid">
      <div className="stat-card">
        <h3>Total Participated</h3>
        <p>{userData.contests.participated}</p>
      </div>
      <div className="stat-card">
        <h3>Total Wins</h3>
        <p>{userData.contests.wins}</p>
      </div>
      <div className="stat-card">
        <h3>Best Score</h3>
        <p>{userData.contests.bestScore}</p>
      </div>
      <div className="stat-card">
        <h3>Upcoming Contests</h3>
        <p>{userData.contests.upcoming}</p>
      </div>
    </div>

    <div className="contests-list">
      <h3>Upcoming Contests</h3>
      <div className="contest-card">
        <div className="contest-info">
          <h4>Weekly Championship</h4>
          <p>Starts: June 20, 2023</p>
        </div>
        <button className="primary-btn">View Details</button>
      </div>
    </div>
  </div>
);

const KYCVerification = ({ userData }) => (
  <div className="section-container">
    <h2 className="section-title">KYC Verification</h2>
    <div className="kyc-status">
      <p>Status: <span className={`status ${userData.kycStatus.toLowerCase()}`}>{userData.kycStatus}</span></p>
      {userData.kycStatus === 'Pending' && (
        <p className="info-note">KYC verification is required for prize redemption</p>
      )}
    </div>

    <div className="kyc-form">
      <div className="form-group">
        <label>PAN Card Number</label>
        <input type="text" placeholder="ABCDE1234F" />
      </div>

      <div className="form-group">
        <label>Bank Account Details</label>
        <input type="text" placeholder="Account Number" />
        <input type="text" placeholder="IFSC Code" />
      </div>

      <div className="form-group">
        <label>UPI ID</label>
        <input type="text" placeholder="yourname@upi" />
      </div>

      <div className="document-upload">
        <h3>Upload Documents</h3>
        <div className="upload-group">
          <label>PAN Card</label>
          <input type="file" />
        </div>
        <div className="upload-group">
          <label>ID Proof (Aadhaar/Passport)</label>
          <input type="file" />
        </div>
        <div className="upload-group">
          <label>Photograph</label>
          <input type="file" />
        </div>
      </div>

      <button className="primary-btn">Submit for Verification</button>
    </div>
  </div>
);

const ReferralProgram = ({ userData }) => (
  <div className="section-container">
    <h2 className="section-title">Referral Program</h2>
    
    <div className="referral-stats">
      <div className="stat-card">
        <h3>Your Referral Code</h3>
        <p className="referral-code">ZARSS{userData.walletBalance.toString().slice(0,4)}</p>
        <button className="secondary-btn">Copy Code</button>
      </div>
      <div className="stat-card">
        <h3>Total Earnings</h3>
        <p>₹{userData.referralEarnings.toLocaleString()}</p>
      </div>
    </div>

    <div className="referral-share">
      <h3>Invite Friends</h3>
      <p>Earn 10% of their contest entries!</p>
      <div className="share-buttons">
        <button className="share-btn whatsapp">Share via WhatsApp</button>
        <button className="share-btn link">Copy Referral Link</button>
      </div>
    </div>

    <div className="referral-list">
      <h3>Your Referrals</h3>
      <div className="referral-table">
        <div className="referral-header">
          <span>Name</span>
          <span>Joined On</span>
          <span>Earnings</span>
        </div>
        <div className="referral-row">
          <span>Rahul Sharma</span>
          <span>2023-05-15</span>
          <span>₹500</span>
        </div>
      </div>
    </div>
  </div>
);

const SupportHelp = () => (
  <div className="section-container">
    <h2 className="section-title">Support & Help</h2>
    
    <div className="support-options">
      <div className="support-card">
        <h3>Raise a Ticket</h3>
        <div className="form-group">
          <label>Subject</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea rows="4"></textarea>
        </div>
        <button className="primary-btn">Submit Ticket</button>
      </div>

      <div className="support-card">
        <h3>Your Tickets</h3>
        <div className="ticket">
          <p><strong>#12345</strong> - Withdrawal issue</p>
          <p className="status pending">Pending</p>
        </div>
      </div>

      <div className="support-card faq">
        <h3>FAQs</h3>
        <div className="faq-item">
          <p className="faq-question">How to withdraw money?</p>
          <p className="faq-answer">Go to Wallet section and click Withdraw button...</p>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;