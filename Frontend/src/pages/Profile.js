import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  Wallet, 
  Trophy, 
  Shield, 
  Users, 
  HeadphonesIcon,
  LogOut,
  TrendingUp,
  Award,
  CreditCard,
  Bell,
  Search,
  Download,
  Plus,
  Eye,
  Copy,
  Share2,
  FileText,
  CheckCircle,
  Clock,
  XCircle
} from 'lucide-react';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

  // Sample data
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

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'account', label: 'Account Settings', icon: Settings },
    { id: 'wallet', label: 'Wallet Summary', icon: Wallet },
    { id: 'contest', label: 'Contest Participation', icon: Trophy },
    { id: 'kyc', label: 'KYC Verification', icon: Shield },
    { id: 'referral', label: 'Referral Program', icon: Users },
    { id: 'support', label: 'Support & Help', icon: HeadphonesIcon },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl border-r border-slate-200/60 z-50">
        {/* Header */}
        <div className="p-8 border-b border-slate-100">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">WMH</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
              WinMehaHub
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="p-8 text-center border-b border-slate-100">
          <div className="relative inline-block">
            <div className="w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-semibold shadow-lg">
              RT
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white"></div>
          </div>
          <div className="mt-4">
            <p className="text-sm text-slate-500">Welcome back,</p>
            <p className="text-lg font-semibold text-slate-900">Ram Thakur</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-6">
          <nav className="space-y-2">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-violet-500 to-purple-600 text-white shadow-lg shadow-violet-500/25'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Logout */}
        <div className="absolute bottom-6 left-6 right-6">
          <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-80 min-h-screen">
        {/* Top Bar */}
        <div className="bg-white/80 backdrop-blur-sm border-b border-slate-200/60 sticky top-0 z-40">
          <div className="px-8 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">
                {sidebarItems.find(item => item.id === activeSection)?.label}
              </h1>
              <p className="text-slate-500 mt-1">Manage your account and preferences</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                <Search size={20} className="text-slate-600" />
              </button>
              <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors relative">
                <Bell size={20} className="text-slate-600" />
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white font-semibold">3</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {activeSection === 'dashboard' && <DashboardHome userData={userData} />}
          {activeSection === 'account' && <AccountSettings />}
          {activeSection === 'wallet' && <WalletSummary userData={userData} />}
          {activeSection === 'contest' && <ContestParticipation userData={userData} />}
          {activeSection === 'kyc' && <KYCVerification userData={userData} />}
          {activeSection === 'referral' && <ReferralProgram userData={userData} />}
          {activeSection === 'support' && <SupportHelp />}
        </div>
      </div>
    </div>
  );
};

const DashboardHome = ({ userData }) => (
  <div className="space-y-8">
    {/* Stats Overview */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Wallet Balance</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">₹{userData.walletBalance.toLocaleString()}</p>
            <div className="flex items-center mt-2 text-sm text-green-600">
              <TrendingUp size={14} />
              <span className="ml-1">+12.5% from last month</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
            <Wallet size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Contest Wins</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">{userData.contests.wins}</p>
            <div className="flex items-center mt-2 text-sm text-blue-600">
              <Award size={14} />
              <span className="ml-1">Top 10% performer</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <Trophy size={24} className="text-white" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Referral Earnings</p>
            <p className="text-3xl font-bold text-slate-900 mt-2">₹{userData.referralEarnings.toLocaleString()}</p>
            <div className="flex items-center mt-2 text-sm text-purple-600">
              <Users size={14} />
              <span className="ml-1">5 active referrals</span>
            </div>
          </div>
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
            <Users size={24} className="text-white" />
          </div>
        </div>
      </div>
    </div>

    {/* Recent Activity */}
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Recent Activity</h3>
      </div>
      <div className="p-6 space-y-4">
        {[
          { action: 'Won Weekly Championship', amount: '+₹5,000', time: '2 hours ago', type: 'win' },
          { action: 'Contest Entry Fee', amount: '-₹1,000', time: '1 day ago', type: 'entry' },
          { action: 'Referral Bonus', amount: '+₹500', time: '3 days ago', type: 'referral' }
        ].map((activity, index) => (
          <div key={index} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-xl transition-colors">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                activity.type === 'win' ? 'bg-green-100 text-green-600' :
                activity.type === 'entry' ? 'bg-red-100 text-red-600' :
                'bg-purple-100 text-purple-600'
              }`}>
                {activity.type === 'win' ? <Trophy size={16} /> :
                 activity.type === 'entry' ? <CreditCard size={16} /> :
                 <Users size={16} />}
              </div>
              <div>
                <p className="font-medium text-slate-900">{activity.action}</p>
                <p className="text-sm text-slate-500">{activity.time}</p>
              </div>
            </div>
            <span className={`font-semibold ${
              activity.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'
            }`}>
              {activity.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AccountSettings = () => (
  <div className="space-y-8">
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Security Settings</h3>
        <p className="text-slate-500 mt-1">Manage your password and security preferences</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
            <input type="password" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Enter current password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
            <input type="password" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Enter new password" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
            <input type="password" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Confirm new password" />
          </div>
          <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
            Update Password
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Contact Information</h3>
        <p className="text-slate-500 mt-1">Keep your contact details up to date</p>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
            <div className="flex space-x-3">
              <input type="tel" className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="+91 9876543210" />
              <button className="px-4 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
                Verify OTP
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <div className="flex space-x-3">
              <input type="email" className="flex-1 px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="ram@example.com" />
              <button className="px-4 py-3 border border-slate-200 text-slate-600 rounded-xl hover:bg-slate-50 transition-colors">
                Verify OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WalletSummary = ({ userData }) => (
  <div className="space-y-8">
    <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-violet-100 mb-2">Total Balance</p>
          <p className="text-4xl font-bold">₹{userData.walletBalance.toLocaleString()}</p>
          <p className="text-violet-100 mt-2">Available for withdrawal</p>
        </div>
        <div className="text-right space-y-3">
          <button className="bg-white text-violet-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
            <Download size={16} className="inline mr-2" />
            Withdraw
          </button>
          <button className="bg-violet-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-400 transition-colors block">
            <Plus size={16} className="inline mr-2" />
            Add Money
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Transaction History</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Date</th>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Description</th>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Amount</th>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { date: '2023-06-15', desc: 'Contest Win - Weekly Championship', amount: '+₹5,000', status: 'completed' },
              { date: '2023-06-10', desc: 'Contest Entry Fee', amount: '-₹1,000', status: 'completed' },
              { date: '2023-06-08', desc: 'Referral Bonus', amount: '+₹500', status: 'completed' }
            ].map((transaction, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="py-4 px-6 text-slate-600">{transaction.date}</td>
                <td className="py-4 px-6 text-slate-900 font-medium">{transaction.desc}</td>
                <td className={`py-4 px-6 font-semibold ${transaction.amount.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {transaction.amount}
                </td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                    <CheckCircle size={12} className="mr-1" />
                    Completed
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const ContestParticipation = ({ userData }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {[
        { label: 'Total Participated', value: userData.contests.participated, color: 'blue' },
        { label: 'Total Wins', value: userData.contests.wins, color: 'green' },
        { label: 'Best Score', value: userData.contests.bestScore, color: 'purple' },
        { label: 'Upcoming Contests', value: userData.contests.upcoming, color: 'orange' }
      ].map((stat, index) => (
        <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
          <p className="text-sm font-medium text-slate-500">{stat.label}</p>
          <p className="text-3xl font-bold text-slate-900 mt-2">{stat.value}</p>
        </div>
      ))}
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Upcoming Contests</h3>
      </div>
      <div className="p-6 space-y-4">
        {[
          { name: 'Weekly Championship', date: 'June 20, 2023', prize: '₹50,000', participants: '1,250' },
          { name: 'Daily Challenge', date: 'June 18, 2023', prize: '₹10,000', participants: '800' }
        ].map((contest, index) => (
          <div key={index} className="flex items-center justify-between p-6 border border-slate-200 rounded-xl hover:shadow-md transition-shadow">
            <div>
              <h4 className="font-semibold text-slate-900">{contest.name}</h4>
              <p className="text-slate-500 mt-1">Starts: {contest.date}</p>
              <div className="flex items-center space-x-4 mt-2 text-sm text-slate-600">
                <span>Prize Pool: {contest.prize}</span>
                <span>Participants: {contest.participants}</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
              <Eye size={16} className="inline mr-2" />
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const KYCVerification = ({ userData }) => (
  <div className="space-y-8">
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">KYC Status</h3>
            <p className="text-slate-500 mt-1">Complete your verification to unlock all features</p>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={20} className="text-yellow-500" />
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              {userData.kycStatus}
            </span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">PAN Card Number</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="ABCDE1234F" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Bank Account Number</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Enter account number" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">IFSC Code</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Enter IFSC code" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">UPI ID</label>
              <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="yourname@upi" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-slate-900">Upload Documents</h4>
            {['PAN Card', 'ID Proof (Aadhaar/Passport)', 'Photograph'].map((doc, index) => (
              <div key={index} className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-violet-300 transition-colors">
                <FileText size={24} className="text-slate-400 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-600">{doc}</p>
                <p className="text-xs text-slate-400 mt-1">Click to upload or drag and drop</p>
                <input type="file" className="hidden" />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-slate-100">
          <button className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
            Submit for Verification
          </button>
        </div>
      </div>
    </div>
  </div>
);

const ReferralProgram = ({ userData }) => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <h3 className="text-lg font-semibold mb-4">Your Referral Code</h3>
        <div className="bg-white/20 rounded-xl p-4">
          <p className="text-2xl font-bold tracking-wider">ZARSS{userData.walletBalance.toString().slice(0,4)}</p>
          <button className="mt-3 bg-white text-purple-600 px-4 py-2 rounded-lg font-medium hover:shadow-lg transition-all">
            <Copy size={16} className="inline mr-2" />
            Copy Code
          </button>
        </div>
      </div>
      
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60">
        <h3 className="text-lg font-semibold text-slate-900 mb-4">Total Earnings</h3>
        <p className="text-3xl font-bold text-slate-900">₹{userData.referralEarnings.toLocaleString()}</p>
        <p className="text-slate-500 mt-2">From 5 successful referrals</p>
        <div className="mt-4 space-y-2">
          <button className="w-full bg-green-500 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors">
            <Share2 size={16} className="inline mr-2" />
            Share via WhatsApp
          </button>
          <button className="w-full border border-slate-200 text-slate-600 py-3 rounded-xl font-medium hover:bg-slate-50 transition-colors">
            <Copy size={16} className="inline mr-2" />
            Copy Referral Link
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Your Referrals</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Name</th>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Joined On</th>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Status</th>
              <th className="text-left py-4 px-6 font-medium text-slate-600">Earnings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {[
              { name: 'Rahul Sharma', date: '2023-05-15', status: 'Active', earnings: '₹500' },
              { name: 'Priya Singh', date: '2023-05-20', status: 'Active', earnings: '₹750' },
              { name: 'Amit Kumar', date: '2023-06-01', status: 'Pending', earnings: '₹0' }
            ].map((referral, index) => (
              <tr key={index} className="hover:bg-slate-50">
                <td className="py-4 px-6 font-medium text-slate-900">{referral.name}</td>
                <td className="py-4 px-6 text-slate-600">{referral.date}</td>
                <td className="py-4 px-6">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                    referral.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {referral.status === 'Active' ? <CheckCircle size={12} className="mr-1" /> : <Clock size={12} className="mr-1" />}
                    {referral.status}
                  </span>
                </td>
                <td className="py-4 px-6 font-semibold text-green-600">{referral.earnings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const SupportHelp = () => (
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Create Support Ticket</h3>
          <p className="text-slate-500 mt-1">Get help from our support team</p>
        </div>
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
            <input type="text" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Brief description of your issue" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Category</label>
            <select className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors">
              <option>Select a category</option>
              <option>Account Issues</option>
              <option>Payment Problems</option>
              <option>Contest Related</option>
              <option>Technical Support</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Description</label>
            <textarea rows="4" className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-colors" placeholder="Describe your issue in detail..."></textarea>
          </div>
          <button className="w-full bg-gradient-to-r from-violet-500 to-purple-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all">
            Submit Ticket
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
        <div className="p-6 border-b border-slate-100">
          <h3 className="text-lg font-semibold text-slate-900">Your Support Tickets</h3>
          <p className="text-slate-500 mt-1">Track your support requests</p>
        </div>
        <div className="p-6 space-y-4">
          {[
            { id: '#12345', subject: 'Withdrawal issue', status: 'pending', date: '2023-06-15' },
            { id: '#12344', subject: 'Account verification', status: 'resolved', date: '2023-06-10' },
            { id: '#12343', subject: 'Contest entry problem', status: 'in-progress', date: '2023-06-08' }
          ].map((ticket, index) => (
            <div key={index} className="border border-slate-200 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium text-slate-900">{ticket.id}</span>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  ticket.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                  ticket.status === 'resolved' ? 'bg-green-100 text-green-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {ticket.status === 'pending' ? <Clock size={10} className="mr-1" /> :
                   ticket.status === 'resolved' ? <CheckCircle size={10} className="mr-1" /> :
                   <FileText size={10} className="mr-1" />}
                  {ticket.status}
                </span>
              </div>
              <p className="text-slate-600 text-sm">{ticket.subject}</p>
              <p className="text-xs text-slate-400 mt-1">{ticket.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-sm border border-slate-200/60">
      <div className="p-6 border-b border-slate-100">
        <h3 className="text-lg font-semibold text-slate-900">Frequently Asked Questions</h3>
        <p className="text-slate-500 mt-1">Find quick answers to common questions</p>
      </div>
      <div className="p-6 space-y-4">
        {[
          {
            question: 'How do I withdraw money from my wallet?',
            answer: 'Go to the Wallet section, click on "Withdraw Funds", enter the amount, select your payment method, and confirm the transaction. Withdrawals are processed within 24-48 hours.'
          },
          {
            question: 'What documents are required for KYC verification?',
            answer: 'You need to provide a PAN card, government-issued ID proof (Aadhaar/Passport), and a recent photograph. All documents should be clear and readable.'
          },
          {
            question: 'How does the referral program work?',
            answer: 'Share your unique referral code with friends. When they join and participate in contests, you earn 10% of their entry fees as referral bonus.'
          },
          {
            question: 'Can I participate in multiple contests simultaneously?',
            answer: 'Yes, you can participate in multiple contests as long as you have sufficient wallet balance and meet the eligibility criteria for each contest.'
          }
        ].map((faq, index) => (
          <div key={index} className="border border-slate-200 rounded-xl p-6">
            <h4 className="font-medium text-slate-900 mb-2">{faq.question}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center">
      <h3 className="text-xl font-semibold mb-2">Need More Help?</h3>
      <p className="text-violet-100 mb-6">Our support team is available 24/7 to assist you</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-violet-600 px-6 py-3 rounded-xl font-medium hover:shadow-lg transition-all">
          <HeadphonesIcon size={16} className="inline mr-2" />
          Live Chat
        </button>
        <button className="bg-violet-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-400 transition-colors">
          📧 Email Support
        </button>
        <button className="bg-violet-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-violet-400 transition-colors">
          📞 Call Support
        </button>
      </div>
    </div>
  </div>
);

export default Dashboard;