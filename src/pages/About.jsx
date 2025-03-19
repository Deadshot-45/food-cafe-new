import React from "react";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#6e6876] ">
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
          <div className="w-full mx-auto h-[60dvh] flex justify-evenly items-center gap-9">
            {/* Left Container */}
            <div className="w-[30%] flex flex-col gap-5">
              <h2 className="text-3xl text-white">Our Story</h2>
              <p className="text-sm text-white leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className="w-[15%] h-0.5 bg-white"></div>
            </div>

            {/* Right Container */}
            <div className="w-[42%] h-[60dvh] relative">
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-01-free-img.jpg"
                alt="About Us"
                className="absolute -top-[5dvh] w-full h-full object-cover shadow-[10px_10px_25px_rgba(0,0,0,0.2),0_0_25px_rgba(0,0,0,0.1),0_0_25px_rgba(0,0,0,0.05)]"
              />
            </div>
          </div>

          {/* Container 02 */}
          <div className="relative flex flex-col items-center gap-8 mt-20 h-[100dvh]">
            {/* Container 02 Head */}
            <div className="w-1/4 flex flex-col items-center gap-4 relative z-10">
              <h2 className="text-4xl text-white">Our Features</h2>
              <p className="text-sm text-white text-center">
                Discover what makes our cafe special and unique.
              </p>
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-07-free-img.png"
                alt="Icon"
                className="absolute top-full left-[85%] w-[25dvw] h-[15dvh] z-50"
              />
            </div>

            {/* Container 02 Body */}
            <div className="relative w-full">
              {/* Background Image */}
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-06-free-img.png"
                alt="Background"
                className="absolute w-full h-[50dvh] object-cover"
              />

              {/* Top Images */}
              <div className="w-3/5 mx-auto flex gap-6 relative z-10">
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-003-free-img.jpg"
                  alt="Feature 1"
                  className="w-[35%] h-[55dvh] object-cover"
                />
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-004-free-img.jpg"
                  alt="Feature 2"
                  className="w-[35%] h-[45dvh] pt-[5%] object-cover"
                />
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-005-free-img.jpg"
                  alt="Feature 3"
                  className="w-[35%] h-[calc(45dvh+5%)] pt-[5%] object-cover"
                />
              </div>

              {/* Bottom Images */}
              <div className="absolute top-[52dvh] w-[60%] left-1/6 flex justify-center gap-8 z-0">
                <div className="w-[26%] h-[60dvh] flex flex-col">
                  <img
                    src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-008-free-img.jpg"
                    alt="Feature 4"
                    className="w-full h-[33dvh] object-cover"
                  />
                  <div className="w-full h-[20%]"></div>
                </div>
                <div className="w-[24%] h-[60dvh] relative top-[-40px] flex flex-col">
                  <img
                    src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-006-free-img.jpg"
                    alt="Feature 5"
                    className="w-full h-[40dvh] object-cover"
                  />
                </div>
                <div className="w-[20%] h-[60dvh] relative top-10 flex flex-col">
                  <img
                    src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-007-free-img.jpg"
                    alt="Feature 6"
                    className="w-[90%] h-[15dvh] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* App Download Section */}
          <div className="w-3/5 h-[50dvh] mx-auto mt-44 relative rounded-2xl bg-gray-900/70">
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
              <div className="w-3/5 flex flex-col items-center gap-5">
                <h2 className="text-white font-bold text-center leading-relaxed">
                  Download Our App
                </h2>
                <p className="text-white font-bold text-center leading-relaxed">
                  Get the best experience with our mobile app.
                </p>
              </div>
              <div className="flex gap-6 mt-10">
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/022/101/128/small_2x/appstore-logo-transparent-free-png.png"
                  alt="app store"
                  className="w-[20dvw] h-[10dvh] object-cover"
                />
                <img
                  src="https://th.bing.com/th/id/R.a5c4a0ae0a1684828655ea8f51d7d190?rik=fO8ghz3gzTM4ow&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fgoogle-play-icon-transparent%2fgoogle-play-icon-transparent-5.png&ehk=X6UOUpA%2bOVni4FAfy4Byq57nRBDLCnPCJ%2bi%2fYUt0OWc%3d&risl=&pid=ImgRaw&r=0"
                  alt="google store"
                  className="w-[20dvw] h-[10dvh] object-cover"
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
