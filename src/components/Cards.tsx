import React, { useState } from "react";
import celular from "../assets/celular.jpg";

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("Mobile & Phone");

  const cards = [
    {
      title: "Xiphone 14 Pro Maxe",
      price: "$175.00",
      reviews: 121,
      category: "Mobile & Phone",
    },
    {
      title: "Xiphone 13",
      price: "$100.00",
      reviews: 89,
      category: "Mobile & Phone",
    },
    {
      title: "Samsonge Galaxy S20",
      price: "$150.00",
      reviews: 110,
      category: "Mobile & Phone",
    },
    {
      title: "Samsung Galaxy Note 20",
      price: "$200.00",
      reviews: 95,
      category: "Mobile & Phone",
    },
    {
      title: "Google Pixel 6",
      price: "$250.00",
      reviews: 130,
      category: "Mobile & Phone",
    },
  ];

  const categories = [
    { name: "Computer & Laptop", count: 15 },
    { name: "Mobile & Phone", count: 35 },
    { name: "Camera Imaging", count: 10 },
    { name: "TV & Smart Box", count: 8 },
    { name: "Home Appliance", count: 2 },
  ];

  const filteredCards = cards.filter(
    (card) => card.category === selectedCategory
  );

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : filteredCards.length - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < filteredCards.length - 3 ? prevIndex + 1 : 0
    );
  };

  return (
    <>
      <h2 className="text-[47px] font-bold font-prompt pl-8 text-center lg:text-left">
        New <span className="text-purple-500">arrival</span> for you
      </h2>
      <div className="p-8 flex flex-col lg:flex-row">
        {/* Sidebar de categorías */}
        <aside className="w-full lg:w-1/4 pr-4">
          <ul className="mt-6 space-y-2">
            {categories.map((category) => (
              <li
                key={category.name}
                className={`cursor-pointer font-monserrat flex justify-between p-2 rounded-md ${
                  selectedCategory === category.name
                    ? "bg-purple-100 text-purple-700 font-semibold"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
                onClick={() => {
                  setSelectedCategory(category.name);
                  setCurrentIndex(0);
                }}
              >
                <span>{category.name}</span>
                <span
                  className={`px-2 rounded-full ${
                    selectedCategory === category.name
                      ? "bg-purple-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {category.count}
                </span>
              </li>
            ))}
          </ul>
        </aside>

        {/* Sección de las tarjetas con navegación */}
        <div className="flex-grow">
          <div className="flex items-center mt-8">
            <button
              onClick={handlePrev}
              className="p-2 bg-gray-200 rounded-full hover:bg-green-500"
            >
              ←
            </button>
            <div className="flex overflow-x-auto w-full mx-4 justify-center">
              {filteredCards
                .slice(currentIndex, currentIndex + 3)
                .map((card, index) => (
                  <div
                    key={index}
                    className="flex-col min-w-[250px] md:min-w-[300px] lg:min-w-[250px] bg-white shadow-md rounded-lg mx-2 px-4 pb-4"
                  >
                    <img
                      src={celular}
                      alt="celular"
                      className="w-full h-48 object-contain"
                    />
                    <h3 className="text-lg font-semibold">{card.title}</h3>
                    <p className="text-gray-600 mt-2">{card.price}</p>
                    <p className="text-green-600 mt-4">
                      ⭐️ {card.reviews} reviews
                    </p>
                    <button className="mt-4 text-black py-2 px-8 rounded-full text-[16px] border-solid border-black border-[1px]">
                      Add to Cart
                    </button>
                  </div>
                ))}
            </div>
            <button
              onClick={handleNext}
              className="p-2 bg-gray-200 rounded-full hover:bg-green-500"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
