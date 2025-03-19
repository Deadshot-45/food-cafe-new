import React from "react";

const Review = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <section className="relative h-[400px] overflow-hidden">
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
          <h1 className="text-5xl font-bold text-white mb-4">REVIEWS</h1>
          <div className="w-20 h-1 bg-[#facdb2]"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review 1 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg"
                    alt="Reviewer 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">John Doe</h3>
                  <p className="text-[#facdb2]">Food Critic</p>
                </div>
              </div>
              <div className="flex text-[#facdb2] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                leo."
              </p>
            </div>

            {/* Review 2 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                    alt="Reviewer 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Jane Smith</h3>
                  <p className="text-[#facdb2]">Food Blogger</p>
                </div>
              </div>
              <div className="flex text-[#facdb2] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300">
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat."
              </p>
            </div>

            {/* Review 3 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://www.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg"
                    alt="Reviewer 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mike Johnson</h3>
                  <p className="text-[#facdb2]">Food Enthusiast</p>
                </div>
              </div>
              <div className="flex text-[#facdb2] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300">
                "Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur."
              </p>
            </div>

            {/* Review 4 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://raajratna.com/wp-content/uploads/2019/01/person4.jpg"
                    alt="Reviewer 4"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Sarah Wilson</h3>
                  <p className="text-[#facdb2]">Food Photographer</p>
                </div>
              </div>
              <div className="flex text-[#facdb2] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300">
                "Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum."
              </p>
            </div>

            {/* Review 5 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM="
                    alt="Reviewer 5"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">David Brown</h3>
                  <p className="text-[#facdb2]">Food Writer</p>
                </div>
              </div>
              <div className="flex text-[#facdb2] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300">
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium."
              </p>
            </div>

            {/* Review 6 */}
            <div className="bg-gray-800 p-8 rounded-lg">
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://raajratna.com/wp-content/uploads/2019/01/person2.jpg"
                    alt="Reviewer 6"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Emma Davis</h3>
                  <p className="text-[#facdb2]">Food Vlogger</p>
                </div>
              </div>
              <div className="flex text-[#facdb2] mb-4">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <p className="text-gray-300">
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
                odit aut fugit, sed quia consequuntur."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Review;
