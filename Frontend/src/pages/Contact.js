import React from 'react';
import { 
  Mail,
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Facebook,
  Send,
  User,
  MessageSquare,
  HelpCircle,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions or want to partner with us? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <MessageSquare className="w-6 h-6 text-orange-500 mr-2" />
              Contact Information
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start bg-orange-50/50 p-5 rounded-xl hover:bg-orange-100/50 transition-colors">
                <div className="bg-orange-100 p-3 rounded-lg">
                 <Mail className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                  <p className="mt-1 text-gray-600 hover:text-orange-600 transition-colors">
                    <a href="mailto:info@winmegahub.com">info@winmegahub.com</a>
                  </p>
                  <p className="mt-1 text-gray-600 hover:text-orange-600 transition-colors">
                    <a href="mailto:support@winmegahub.com">support@winmegahub.com</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start bg-orange-50/50 p-5 rounded-xl hover:bg-orange-100/50 transition-colors">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Phone className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                  <p className="mt-1 text-gray-600 hover:text-orange-600 transition-colors">
                    <a href="tel:+15551234567">+1 (555) 123-4567</a>
                  </p>
                  <p className="mt-1 text-sm text-gray-500">Mon-Fri: 9am-5pm EST</p>
                </div>
              </div>

              <div className="flex items-start bg-orange-50/50 p-5 rounded-xl hover:bg-orange-100/50 transition-colors">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
                  <p className="mt-1 text-gray-600">123 Tech Park Drive</p>
                  <p className="mt-1 text-gray-600">Silicon Valley, CA 94025</p>
                  <p className="mt-1 text-gray-600">United States</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <User className="w-5 h-5 text-orange-500 mr-2" />
                Follow Us
              </h3>
              <div className="flex space-x-3">
                <a href="#" className="bg-orange-50 p-3 rounded-lg hover:bg-orange-100 transition-colors">
                  <Linkedin className="h-5 w-5 text-orange-700" />
                </a>
                <a href="#" className="bg-orange-50 p-3 rounded-lg hover:bg-orange-100 transition-colors">
                  <Twitter className="h-5 w-5 text-orange-400" />
                </a>
                <a href="#" className="bg-orange-50 p-3 rounded-lg hover:bg-orange-100 transition-colors">
                  <Facebook className="h-5 w-5 text-orange-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
              <Send className="w-6 h-6 text-orange-500 mr-2" />
              Send a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="first-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="last-name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <select
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none bg-white"
                  >
                    <option>General Inquiry</option>
                    <option>Partnership Opportunities</option>
                    <option>Technical Support</option>
                    <option>Sales</option>
                    <option>Other</option>
                  </select>
                  <HelpCircle className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-700 transition-all shadow-md"
                >
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden border border-orange-100">
          <div className="p-6 bg-gradient-to-r from-orange-50 to-red-50">
            <h3 className="text-xl font-semibold text-gray-800 flex items-center">
              <MapPin className="w-5 h-5 text-orange-500 mr-2" />
              Find Us on Map
            </h3>
          </div>
          <iframe
            title="WinMegaHub Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148469422!3d37.3346472798418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sApple%20Park!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;