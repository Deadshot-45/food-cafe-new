import React, { useState } from "react";
import menuItems from "../assests/assests";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "starters", name: "Starters" },
    { id: "main", name: "Main Course" },
    { id: "desserts", name: "Desserts" },
    { id: "drinks", name: "Drinks" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}

      <section className="relative h-[60dvh] max-[450px]:h-[45dvh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://websitedemos.net/cafe-library-02/wp-content/uploads/sites/729/2020/12/bg-img-05-free-img.png"
            alt="background"
            className="w-full h-full object-cover relative z-10"
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
          <h1 className="text-5xl max-[450px]:text-4xl font-bold text-white mb-4">Menu</h1>
          <div className="w-20 h-1 bg-[#facdb2]"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Menu Categories */}
          <div className="flex justify-center space-x-8 max-[450px]:space-x-3 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category.id)}
                className={`hover:text-[#facdb2] transition-colors ${
                  activeCategory === category.id
                    ? "border-b text-[#facdb2]"
                    : "text-white"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-64 max-[450px]:h-52 overflow-hidden">
                  <div className="absolute hover:scale-105 duration-300 ease-in-out">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>

                  <div className="absolute top-4 right-4 bg-[#facdb2] text-gray-900 px-4 py-2 rounded-full">
                    ${item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {item.name}
                  </h3>
                  <p className="text-gray-300 mb-4 h-6 overflow-hidden">
                    {item.description}
                  </p>
                  <button className="w-full bg-[#facdb2] text-gray-900 py-2 rounded font-semibold hover:bg-[#f8c4a3] transition-colors cursor-pointer">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
