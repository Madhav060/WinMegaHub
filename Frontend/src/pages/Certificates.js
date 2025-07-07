import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Download, Award, Calendar, Trophy, Hash, AlertCircle, Eye } from 'lucide-react';
import Modal from 'react-modal';

// Set app element for accessibility (should be set to your app's root element)
Modal.setAppElement('#root');

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [downloadingIds, setDownloadingIds] = useState(new Set());
  const [previewCertificate, setPreviewCertificate] = useState(null);
  const { user } = useContext(UserContext);

  // Modal styles
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      maxWidth: '90%',
      width: '800px',
      padding: '0',
      border: 'none',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 1000
    }
  };

  useEffect(() => {
    if (user) {
      fetchCertificates();
    }
  }, [user]);

  const fetchCertificates = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/certificates/${user.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        if (response.status === 404) {
          setCertificates([]);
          setLoading(false);
          return;
        }
        throw new Error('Failed to fetch certificates');
      }

      const data = await response.json();
      let certificatesArray = [];
      
      if (data.certificates) {
        certificatesArray = data.certificates;
      } else if (Array.isArray(data)) {
        certificatesArray = data;
      } else if (data.message && data.message.includes('No certificates')) {
        certificatesArray = [];
      } else {
        certificatesArray = [];
      }
      
      setCertificates(Array.isArray(certificatesArray) ? certificatesArray : []);
    } catch (err) {
      console.error('Error fetching certificates:', err);
      setError('Failed to load certificates. Please try again later.');
      setCertificates([]);
    } finally {
      setLoading(false);
    }
  };

  const generateCertificatePDF = (certificate) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    canvas.width = 1122;
    canvas.height = 794;
    
    // Professional certificate design
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#f8f9fa');
    gradient.addColorStop(1, '#e9ecef');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Border with subtle shadow effect
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 8;
    ctx.strokeRect(20, 20, canvas.width - 40, canvas.height - 40);
    
    // Inner border
    ctx.strokeStyle = '#e5e7eb';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, canvas.width - 80, canvas.height - 80);
    
    // Header with decorative elements
    ctx.fillStyle = '#1e40af';
    ctx.font = 'bold 48px "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('CERTIFICATE OF ACHIEVEMENT', canvas.width / 2, 150);
    
    // Decorative elements
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 150, 180);
    ctx.lineTo(canvas.width / 2 + 150, 180);
    ctx.stroke();
    
    // "This is to certify that"
    ctx.fillStyle = '#4b5563';
    ctx.font = 'italic 24px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('This is to certify that', canvas.width / 2, 250);
    
    // User name with subtle shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
    ctx.shadowBlur = 4;
    ctx.shadowOffsetY = 2;
    ctx.fillStyle = '#1e40af';
    ctx.font = 'bold 42px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(certificate.user_name, canvas.width / 2, 320);
    ctx.shadowColor = 'transparent';
    
    // Underline for name
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    const nameWidth = ctx.measureText(certificate.user_name).width;
    ctx.beginPath();
    ctx.moveTo((canvas.width - nameWidth) / 2, 335);
    ctx.lineTo((canvas.width + nameWidth) / 2, 335);
    ctx.stroke();
    
    // "has successfully participated in"
    ctx.fillStyle = '#4b5563';
    ctx.font = 'italic 24px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText('has successfully completed', canvas.width / 2, 380);
    
    // Contest name
    ctx.fillStyle = '#047857';
    ctx.font = 'bold 36px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(certificate.contest_name, canvas.width / 2, 440);
    
    // Contest details
    ctx.fillStyle = '#4b5563';
    ctx.font = '20px "Helvetica Neue", Arial, sans-serif';
    const contestDate = new Date(certificate.contest_date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    ctx.fillText(`held on ${contestDate}`, canvas.width / 2, 480);
    
    // Performance details
    ctx.fillStyle = '#6b7280';
    ctx.font = '18px "Helvetica Neue", Arial, sans-serif';
    ctx.fillText(`Score: ${certificate.raw_marks} | Rank: ${certificate.rank}`, canvas.width / 2, 520);
    
    // Decorative seal
    ctx.beginPath();
    ctx.arc(canvas.width - 120, canvas.height - 120, 50, 0, Math.PI * 2);
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#1e40af';
    ctx.font = 'bold 12px "Helvetica Neue", Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('OFFICIAL', canvas.width - 120, canvas.height - 125);
    ctx.fillText('SEAL', canvas.width - 120, canvas.height - 110);
    
    // Date of issue
    ctx.fillStyle = '#4b5563';
    ctx.font = '16px "Helvetica Neue", Arial, sans-serif';
    const issueDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    ctx.textAlign = 'left';
    ctx.fillText(`Issued on: ${issueDate}`, 100, canvas.height - 80);
    
    // Certificate ID
    ctx.textAlign = 'right';
    ctx.fillText(`Certificate ID: CERT-${certificate.id}`, canvas.width - 100, canvas.height - 80);
    
    return canvas;
  };

  const previewCertificateHandler = (certificate) => {
    const canvas = generateCertificatePDF(certificate);
    setPreviewCertificate(canvas.toDataURL('image/png'));
  };

  const closePreview = () => {
    setPreviewCertificate(null);
  };

  const downloadCertificate = async (certificate) => {
    setDownloadingIds(prev => new Set(prev).add(certificate.id));
    
    try {
      const canvas = generateCertificatePDF(certificate);
      
      canvas.toBlob((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `Certificate_${certificate.user_name.replace(/\s+/g, '_')}_${certificate.contest_name.replace(/\s+/g, '_')}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        
        setDownloadingIds(prev => {
          const newSet = new Set(prev);
          newSet.delete(certificate.id);
          return newSet;
        });
      }, 'image/png', 1.0);
      
    } catch (err) {
      console.error('Error generating certificate:', err);
      setError('Failed to generate certificate. Please try again.');
      setDownloadingIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(certificate.id);
        return newSet;
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto mt-12 p-6">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 flex items-start">
          <AlertCircle className="text-yellow-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
          <div>
            <h3 className="text-lg font-medium text-yellow-800">Authentication Required</h3>
            <p className="text-yellow-700">Please log in to view your certificates.</p>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto mt-12 p-6 text-center">
        <div className="inline-flex flex-col items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600 mb-3"></div>
          <p className="text-gray-600 font-medium">Loading your certificates...</p>
          <p className="text-sm text-gray-500 mt-1">This may take a moment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center bg-blue-50 rounded-full p-3 mb-4">
          <Award className="text-blue-600" size={32} />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Certificates</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Your digital credentials earned through participation and achievement in our contests
        </p>
        
        {error && (
          <div className="mt-6 bg-red-50 border-l-4 border-red-400 rounded-lg p-4 max-w-md mx-auto flex items-start">
            <AlertCircle className="text-red-600 mr-3 mt-0.5 flex-shrink-0" size={20} />
            <div>
              <h3 className="text-sm font-medium text-red-800">Error loading certificates</h3>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}
      </div>

      {certificates.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-8 text-center max-w-2xl mx-auto">
          <div className="mx-auto h-24 w-24 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <Award size={40} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Certificates Yet</h3>
          <p className="text-gray-600 mb-6">
            You haven't earned any certificates yet. Participate in our contests to showcase your skills and earn recognition.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
            Explore Contests
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-200 group">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <Award size={18} className="mr-2" />
                  <span className="font-medium text-sm tracking-wide">ACHIEVEMENT</span>
                </div>
                <span className="bg-white/20 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-tight">
                  RANK #{certificate.rank}
                </span>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 pr-2">
                    {certificate.contest_name}
                  </h3>
                  <span className="bg-blue-50 text-blue-700 text-xs font-medium px-2 py-1 rounded whitespace-nowrap">
                    CERT-{certificate.id}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-start text-gray-600">
                    <Calendar size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
                    <span className="text-sm">{formatDate(certificate.contest_date)}</span>
                  </div>
                  
                  <div className="flex items-start text-gray-600">
                    <Trophy size={16} className="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
                    <span className="text-sm">Score: <span className="font-medium">{certificate.raw_marks}</span></span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-5 py-3 border-t border-gray-100 flex space-x-3">
                <button
                  onClick={() => previewCertificateHandler(certificate)}
                  className="flex-1 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center text-sm"
                >
                  <Eye size={16} className="mr-2" />
                  Preview
                </button>
                <button
                  onClick={() => downloadCertificate(certificate)}
                  disabled={downloadingIds.has(certificate.id)}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:opacity-70 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center justify-center text-sm"
                >
                  {downloadingIds.has(certificate.id) ? (
                    <>
                      <div className="animate-spin rounded-full h-3.5 w-3.5 border-b-2 border-white mr-2"></div>
                      Preparing...
                    </>
                  ) : (
                    <>
                      <Download size={16} className="mr-2" />
                      Download
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Certificate Preview Modal */}
      <Modal
        isOpen={!!previewCertificate}
        onRequestClose={closePreview}
        style={customStyles}
        contentLabel="Certificate Preview"
      >
        {previewCertificate && (
          <div className="relative">
            <button 
              onClick={closePreview}
              className="absolute top-4 right-4 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 z-10 shadow-md transition-all"
              aria-label="Close preview"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <img 
              src={previewCertificate} 
              alt="Certificate Preview" 
              className="w-full h-auto max-h-[90vh] object-contain"
            />
            <div className="bg-gray-50 px-4 py-3 flex justify-end border-t">
              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = previewCertificate;
                  link.download = `Certificate_Preview.png`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all flex items-center text-sm"
              >
                <Download size={16} className="mr-2" />
                Download
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Certificates;