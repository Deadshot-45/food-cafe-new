import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-gray-500/50">
        <div className="absolute inset-0">
          <img
            src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-002-free-img.png"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-6xl font-bold text-white mb-6">
              Welcome to Our Cafe
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Experience the perfect blend of flavors in a cozy atmosphere. Our
              cafe offers a wide range of delicious food and beverages.
            </p>
            <a
              href="/menu"
              className="inline-block bg-[#facdb2] text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-[#f8c4a3] transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#facdb2] rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1352167849/photo/coffee-cup-of-art-latte-with-froth-heart-shaped-isolated-on-white-background-with-clipping.jpg?s=612x612&w=0&k=20&c=BG6yxyf8sRrBzuRnRz_AKpvH5AEqvTgBjb0FGccj5XA="
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Fresh Coffee
              </h3>
              <p className="text-gray-300">
                Start your day with our freshly brewed coffee made from premium
                beans.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#facdb2] rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1631486055/photo/healthy-breakfast.jpg?s=612x612&w=0&k=20&c=PiFhuNzh0TSJSEw1imNO2Xof6uja7Et6UQPRJ8T8zas="
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Delicious Food
              </h3>
              <p className="text-gray-300">
                Enjoy our wide selection of freshly prepared meals and snacks.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-[#facdb2] rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden">
                <img
                  src="https://media.istockphoto.com/id/1267946997/photo/cozy-atmosphere-indoors.jpg?s=612x612&w=0&k=20&c=gZ0O9JXP8M5DH2XqJgft_QDEKZtZRi5NoiQzlIb6ksI="
                  alt=""
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Cozy Atmosphere
              </h3>
              <p className="text-gray-300">
                Relax in our comfortable and welcoming environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Story Section */}
          <div className="bg-gray-800 rounded-lg p-8 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-01-free-img.jpg"
                  alt="Our Story"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#facdb2] rounded-full flex items-center justify-center">
                  <span className="text-4xl font-bold text-gray-900 overflow-hidden rounded-full">
                    <img
                      src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-cartoon-cute-little-girl-drinking-tea-with-commercial-elements-versionmengcartoonlovelygirlchilddrinking-tea-png-image_4056876.jpg"
                      alt="child drinking tea"
                    />
                  </span>
                </div>
              </div>
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">
                  Our Story
                </h2>
                <div className="w-20 h-1 bg-[#facdb2] mb-6"></div>
                <p className="text-gray-300 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo. Proin gravida nibh vel velit auctor aliquet. Aenean
                  sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                  ipsum.
                </p>
                <p className="text-gray-300">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Us</h2>
              <p className="text-gray-300 mb-6">
                We are passionate about providing the best cafe experience to
                our customers. Our cafe is a place where people can gather,
                enjoy great food and drinks, and create lasting memories.
              </p>
              <a
                href="/about"
                className="inline-block bg-[#facdb2] text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-[#f8c4a3] transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="relative">
              <img
                src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/about-01-free-img.jpg"
                alt="About Us"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Menu
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Menu Item 1 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/505168330/photo/cup-of-cafe-latte-with-coffee-beans-and-cinnamon-sticks.jpg?s=612x612&w=0&k=20&c=h7v8kAfWOpRapv6hrDwmmB54DqrGQWxlhP_mTeqTQPA="
                alt="Menu Item 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Special Coffee
                </h3>
                <p className="text-gray-300 mb-4">
                  Our signature coffee blend with a unique flavor profile.
                </p>
                <span className="text-[#facdb2] font-semibold">$4.99</span>
              </div>
            </div>

            {/* Menu Item 2 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/637214478/photo/pasta-plate.jpg?s=612x612&w=0&k=20&c=oebCQG_Zfv2zJpobSzpF6JFNdsBQUjG6MdQh-En5l3c="
                alt="Menu Item 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Fresh Pastries
                </h3>
                <p className="text-gray-300 mb-4">
                  Freshly baked pastries made with premium ingredients.
                </p>
                <span className="text-[#facdb2] font-semibold">$3.99</span>
              </div>
            </div>

            {/* Menu Item 3 */}
            <div className="bg-gray-900 rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1402281575/photo/bowls-of-oatmeal-with-mixed-fruits-topping.jpg?s=612x612&w=0&k=20&c=nVI9J1KzBjT9kkihbobE6Gd3LqIHauFApOrdUCNj-rY="
                alt="Menu Item 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Healthy Breakfast
                </h3>
                <p className="text-gray-300 mb-4">
                  Start your day with our nutritious breakfast options.
                </p>
                <span className="text-[#facdb2] font-semibold">$8.99</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
