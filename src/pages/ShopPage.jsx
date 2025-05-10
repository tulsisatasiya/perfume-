import React, { useState } from 'react';

// Sample product data
const productList = [
  {
    title: "Jean Paul Gaultier",
    price: 5000,
    category: "new",
    imgUrl: "https://images.pexels.com/photos/9124101/pexels-photo-9124101.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Nautica Voyage",
    price: 1900,
    oldPrice: 2100,
    onSale: true,
    category: "popular",
    imgUrl: "https://images.pexels.com/photos/13800861/pexels-photo-13800861.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Mont Blanc Explorer",
    price: 7000,
    oldPrice: 8000,
    onSale: true,
    category: "trending",
    imgUrl: "https://images.pexels.com/photos/13800877/pexels-photo-13800877.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Ck One odur women",
    price: 6000,
    category: "new",
    imgUrl: "https://images.pexels.com/photos/30238399/pexels-photo-30238399/free-photo-of-luxury-jasmin-noir-perfume-in-forest-setting.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Dior Sauvage",
    price: 8500,
    oldPrice: 9500,
    onSale: true,
    category: "popular",
    imgUrl: "https://images.pexels.com/photos/19378922/pexels-photo-19378922/free-photo-of-vial-of-perfume.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Tom Ford Black Orchid",
    price: 9500,
    category: "trending",
    imgUrl: "https://images.pexels.com/photos/2121252/pexels-photo-2121252.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Gucci Bloom",
    price: 6300,
    category: "new",
    imgUrl: "https://images.pexels.com/photos/11482468/pexels-photo-11482468.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Versace Eros",
    price: 7200,
    category: "popular",
    imgUrl: "https://images.pexels.com/photos/18875439/pexels-photo-18875439/free-photo-of-flask-of-perfume.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "YSL Libre",
    price: 6700,
    category: "trending",
    imgUrl: "https://images.pexels.com/photos/8985566/pexels-photo-8985566.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Chanel No. 5",
    price: 8800,
    oldPrice: 9500,
    onSale: true,
    category: "popular",
    imgUrl: "https://images.pexels.com/photos/11770971/pexels-photo-11770971.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    title: "Armani Code",
    price: 6100,
    category: "new",
    imgUrl: "https://images.pexels.com/photos/28471438/pexels-photo-28471438/free-photo-of-luxurious-black-opium-perfume-bottles-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Calvin Klein Eternity",
    price: 5300,
    category: "trending",
    imgUrl: "https://images.pexels.com/photos/12614292/pexels-photo-12614292.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];

const ShopPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productList);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleTitleChange = (e) => {
    setSelectedTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    const updatedRange = [...priceRange];
    updatedRange[e.target.name === 'min' ? 0 : 1] = parseInt(e.target.value);
    setPriceRange(updatedRange);
  };

  const applyFilters = () => {
    let updatedProducts = [...productList];

    if (selectedTitle) {
      updatedProducts = updatedProducts.filter((product) =>
        product.title.toLowerCase().includes(selectedTitle.toLowerCase())
      );
    }

    updatedProducts = updatedProducts.filter(
      (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    setFilteredProducts(updatedProducts);
  };

  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">All Products</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filter Section */}
        <div className="w-full md:w-1/4 border border-gray-200 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Filter</h3>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Product Name:</label>
            <input
              type="text"
              value={selectedTitle}
              onChange={handleTitleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded"
              placeholder="Enter product name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-5">
              Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
            </label>
            <div className="relative pb-2">
              <div className="slider-track absolute h-1 w-full bg-gray-300 rounded"></div>
              <div 
                className="slider-range absolute h-1 bg-pink-500 rounded"
                style={{
                  left: `${(priceRange[0] / 10000) * 100}%`,
                  width: `${((priceRange[1] - priceRange[0]) / 10000) * 100}%`
                }}
              ></div>
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[0]}
                onChange={(e) => {
                  const newMin = parseInt(e.target.value);
                  if (newMin <= priceRange[1]) {
                    setPriceRange([newMin, priceRange[1]]);
                  }
                }}
                className="absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:appearance-none"
              />
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={priceRange[1]}
                onChange={(e) => {
                  const newMax = parseInt(e.target.value);
                  if (newMax >= priceRange[0]) {
                    setPriceRange([priceRange[0], newMax]);
                  }
                }}
                className="absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-pink-500 [&::-webkit-slider-thumb]:appearance-none"
              />
            </div>
          </div>

          <button
            onClick={applyFilters}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded mt-4 transition"
          >
            Apply Filter
          </button>
        </div>

        {/* Products Section */}
        <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(({ title, price, oldPrice, imgUrl, onSale }, index) => (
            <div key={index} className="bg-white border rounded-lg overflow-hidden shadow group">
              <div className="relative">
                <img src={imgUrl} alt={title} className="w-full object-cover aspect-square" />
                {onSale && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{title}</h4>
                <div className="text-gray-900 text-base">
                  ₹{price.toLocaleString()}
                  {oldPrice && (
                    <span className="line-through text-sm text-gray-500 ml-2">
                      ₹{oldPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
