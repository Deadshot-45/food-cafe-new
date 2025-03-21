import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#6e6876] overflow-x-hidden">
      {/* Top Content Section */}
      <section className="relative  h-[60dvh] max-[450px]:h-[45dvh]  overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.healthshots.com/healthshots/en/uploads/2021/09/23105555/green-tea-and-chai-1-1600x900.jpg"
            alt="background"
            className="w-1/2 h-full ml-[50%] object-cover relative z-10"
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
          <h1 className="text-5xl max-[450px]:text-4xl font-bold text-white mb-4">About US</h1>
          <div className="w-20 h-1 bg-[#facdb2]"></div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative w-full py-20">
        <div className="">
          {/* Container 01 */}
          <div className="w-full mx-auto h-[60dvh] max-md:h-[40dvh] flex max-sm:flex-col justify-evenly items-center gap-9 max-sm:px-6">
            {/* Left Container */}
            <div className="w-[30%] max-sm:w-full flex flex-col gap-5">
              <h2 className="text-3xl text-white">Our Story</h2>
              <p className="text-sm text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="w-[15%] h-0.5 bg-white"></div>
            </div>

            {/* Right Container */}
            <div className="w-[42%] max-sm:w-full h-[60dvh] max-md:h-[40dvh] relative">
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-01-free-img.jpg"
                alt="About Us"
                className="absolute -top-[5dvh] w-full h-full object-cover shadow-[10px_10px_25px_rgba(0,0,0,0.2),0_0_25px_rgba(0,0,0,0.1),0_0_25px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>

          {/* Container 02 */}
          <div className="relative flex flex-col items-center gap-8 mt-20 h-[100dvh] max-sm:h-[50dvh]">
            {/* Container 02 Head */}
            <div className="max-sm:w-full flex flex-col items-center text-center gap-4 relative z-100 px-3">
              <h2 className="text-4xl text-white">Our Features</h2>
              <p className="text-sm text-white text-center">
                Discover what makes our cafe special and unique.
              </p>
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-07-free-img.png"
                alt="Icon"
                className="top-[140%] max-sm:top-[110%] max-md:top-[100%] left-[90%] max-sm:left-[65%] w-[20dvw]  max-sm:w-[30dvw] max-sm:h-[8dvh] h-[10dvh] absolute"
              />
            </div>

            {/* Container 02 Body */}
            <div className="relative w-full">
              {/* Background Image */}
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-06-free-img.png"
                alt="Background"
                className="absolute w-full h-[50dvh] max-sm:hidden object-cover"
              />

              {/* Top Images */}
              <div className="w-3/5 max-sm:w-[90%] max-md:w-[70%] mx-auto flex gap-6 max-sm:gap-2 relative z-10">
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-003-free-img.jpg"
                  alt="Feature 1"
                  className="w-[35%] h-[55dvh] max-sm:h-[20dvh] max-sm:w-[32%] object-cover"
                />
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-004-free-img.jpg"
                  alt="Feature 2"
                  className="w-[35%] h-[45dvh] max-sm:h-[13dvh] max-sm:w-[32%] pt-[5%] object-cover"
                />
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-005-free-img.jpg"
                  alt="Feature 3"
                  className="w-[35%] h-[calc(45dvh+5%)] max-sm:h-[calc(30dvh+5%)] max-sm:w-[32%] pt-[5%] object-cover"
                />
              </div>

              {/* Bottom Images */}
              <div className="absolute top-[52dvh] max-sm:top-45 w-[60%] max-md:w-[100%] max-md:left-10 max-sm:w-[90%] max-sm:left-6 left-1/6 mx-auto flex justify-center gap-8 max-sm:gap-2 z-0">
                <div className="w-[26%] max-sm:w-[32%] h-[60dvh] flex flex-col">
                  <img
                    src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-008-free-img.jpg"
                    alt="Feature 4"
                    className="w-full h-[33dvh] max-sm:h-[18dvh] object-cover"
                  />
                  <div className="w-full h-[20%]"></div>
                </div>
                <div className="w-[24%] max-sm:w-[32%] h-[60dvh] relative top-[-40px] flex flex-col">
                  <img
                    src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-006-free-img.jpg"
                    alt="Feature 5"
                    className="w-full h-[40dvh] max-sm:h-[20dvh] object-cover"
                  />
                </div>
                <div className="w-[20%] max-sm:w-[32%] h-[60dvh] relative top-10 flex flex-col">
                  <img
                    src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-007-free-img.jpg"
                    alt="Feature 6"
                    className="w-[90%] h-[15dvh] max-sm:h-[10dvh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* App Download Section */}
          <div className="w-3/5 max-sm:w-[90%] max-sm:h-[30dvh] h-[50dvh] mx-auto mt-44 relative rounded-2xl bg-gray-900/70">
            <img 
              src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-03-free-img.png"
              alt="App Download Background"
              className="absolute left-0 top-[30%] w-[30%] h-[70%] opacity-20"
            />
            <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2">
              <div className="w-1/2 flex flex-col items-center gap-2">
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/app-icon-free-img.png"
                  alt="App Icon"
                  className="absolute -top-14"
                />
                <div className="w-[10%] h-1 bg-white"></div>
              </div>
              <div className="w-3/5 flex flex-col items-center gap-5 max-sm:mt-4">
                <h2 className="text-white font-bold text-center leading-relaxed">
                  Download Our App
                </h2>
                <p className="text-white font-bold text-center leading-relaxed">
                  Get the best experience with our mobile app.
                </p>
              </div>
              <div className="flex gap-6 mt-10 max-sm:mt-0">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                  alt="app store"
                  className="w-[10dvw] h-[12dvh] max-sm:w-[30dvw] max-sm:h-[15dvw] max-md:w-[20dvw] max-sm:p-3 p-4"
                />
                <img
                  src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png?hl=hi"
                  alt="google store"
                  className="w-[10dvw] h-[12dvh] max-sm:w-[30dvw] max-sm:h-[15dvw] max-md:w-[20dvw]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
