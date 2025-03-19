import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <section className="relative  h-[60dvh] max-[450px]:h-[45dvh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-05-free-img.png"
            alt="background"
            className="border h-full object-cover relative z-10"
          />
          <div className="absolute inset-0 bg-black/50">
            <img
              src="https://img.pikbest.com/wp/202343/swirl-abstract-fluidic-swirls-mesmerizing-marble-gradient-in-black-oil-ink_9969357.jpg!w700wp"
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 z-30"></div>
        </div>

        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center z-50">
          <h1 className="text-5xl max-[450px]:text-4xl font-bold text-white mb-4">CONTACT US</h1>
          <div className="w-20 h-1 bg-[#facdb2]"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Location Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Map */}
            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.356742067297!2d75.88986725!3d22.7149781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd30219ef1c7%3A0xfd4205f10573ae62!2sGeeta%20Bhavan%2C%20Indore%2C%20Madhya%20Pradesh%20452001!5e0!3m2!1sen!2sin!4v1730554019768!5m2!1sen!2sin"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </div>

            {/* Contact Info */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-4">Location</h2>
              <div className="w-20 h-1 bg-[#facdb2] mb-6"></div>

              <p className="text-gray-300 mb-8">
                You can find us at the intersection of uis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat.
              </p>

              <div className="space-y-6">
                <div className="flex items-center text-white">
                  <i className="fas fa-location-dot text-[#facdb2] mr-4"></i>
                  <p>Geeta Bhawan, Indore (M.P), 452001</p>
                </div>

                <div className="h-px bg-gray-700"></div>

                <div className="flex items-center text-white">
                  <i className="fas fa-phone text-[#facdb2] mr-4"></i>
                  <p>123-4567-890</p>
                </div>

                <div className="h-px bg-gray-700"></div>

                <div className="flex items-center text-white">
                  <i className="fas fa-envelope text-[#facdb2] mr-4"></i>
                  <p>abcd@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="h-1 bg-[#facdb2]"></div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Send us a message
                  </h2>
                  <div className="w-20 h-1 bg-[#facdb2] mb-6"></div>
                  <p className="text-gray-300">
                    Ut enim ad minim veniam, quis nostrud exercitation.
                  </p>
                </div>

                <form className="space-y-6">
                  <div>
                    <label className="block text-white mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="First name"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#facdb2]"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#facdb2]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#facdb2]"
                    />
                  </div>

                  <div>
                    <label className="block text-white mb-2">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows="4"
                      className="w-full px-4 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-[#facdb2]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#facdb2] text-gray-900 py-3 rounded font-semibold hover:bg-[#f8c4a3] transition-colors"
                  >
                    SEND
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contact;
