import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        {/* Opening Hours */}
        <div>
          <div className="flex items-center text-[#facdb2] mb-4">
            <i className="far fa-clock mr-2"></i>
            <span>Opening Hours</span>
          </div>
          <div className="h-px bg-gray-700 mb-6"></div>

          <div className="space-y-4">
            <p className="text-white">Monday — Friday: 08:00-22:00</p>
            <p className="text-white">Saturday: 10:00-20:00</p>
            <p className="text-white">Sunday: 10:00-18:00</p>
          </div>
        </div>

        {/* Contact & Social */}
        <div>
          <div className="flex items-center text-[#facdb2] mb-4">
            <i className="fas fa-location-dot mr-2"></i>
            <span>Location</span>
          </div>
          <div className="h-px bg-gray-700 mb-6"></div>

          <div className="space-y-4">
            <div className="flex items-center text-white">
              <i className="fas fa-location-dot text-[#facdb2] mr-2"></i>
              <p>123 Fifth Avenue, New York, NY 10160</p>
            </div>
            <div className="flex items-center text-white">
              <i className="fas fa-phone text-[#facdb2] mr-2"></i>
              <p>1234567890</p>
            </div>
          </div>

          <div className="h-px bg-gray-700 my-6"></div>

          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white hover:text-[#facdb2] transition-colors"
            >
              <i className="fab fa-facebook text-xl"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#facdb2] transition-colors"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="text-white hover:text-[#facdb2] transition-colors"
            >
              <i className="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer