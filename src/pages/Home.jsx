import React, { useRef ,useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { FaSearch, FaHeart, FaSync, FaShoppingBag } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const Home = () => {
  const swiperRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("new");

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
  

  const filteredProducts = productList.filter(
    (product) => product.category === activeCategory
  );

  const icons = [FaSearch, FaHeart, FaSync, FaShoppingBag];

  // Image data with size type
  const imageData = [
    {
      src: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Small Left',
      size: 'small',
    },
    {
      src: 'https://images.pexels.com/photos/3989394/pexels-photo-3989394.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Large Center',
      size: 'large',
    },
    {
      src: 'https://images.pexels.com/photos/932577/pexels-photo-932577.jpeg?auto=compress&cs=tinysrgb&w=600',
      alt: 'Small Right',
      size: 'small',
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4">
   
     

      {/* Swiper Section */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {/* ...SwiperSlides (your existing ones)... */}
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gray-50">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Fragrance that defines You</h2>
              <p className="text-gray-600 mb-6">
                Discover our luxurious perfumes made with love and crafted for elegance.
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Banner 1"
                className="w-full h-[400px] object-cover rounded"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gray-50">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Elegance in Every Drop</h2>
              <p className="text-gray-600 mb-6">
                Hand-picked ingredients with a touch of royalty in every bottle.
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
                Explore Collection
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/724635/pexels-photo-724635.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Banner 2"
                className="w-full h-[400px] object-cover rounded"
              />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex flex-col md:flex-row items-center justify-between px-8 py-12 bg-gray-50">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Luxury Redefined</h2>
              <p className="text-gray-600 mb-6">
                Embrace the art of fine fragrance with our exclusive perfume line.
              </p>
              <button className="bg-pink-600 text-white px-6 py-2 rounded hover:bg-pink-700 transition">
                Browse Products
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.pexels.com/photos/1653085/pexels-photo-1653085.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Banner 3"
                className="w-full h-[400px] object-cover rounded"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>


      {/*3-Image Section Using Map */}
      <div className="flex flex-wrap justify-center items-center gap-4 px-4 py-24 bg-white">
        {imageData.map((img, index) => (
          <div
            key={index}
            className={`${img.size === 'large' ? 'w-full sm:w-2/6' : 'w-1/2 sm:w-1/4'} overflow-hidden`}

          >
            <img
              src={img.src}
              alt={img.alt}
              className="rounded shadow-lg object-cover h-[300px] w-full transform transition-transform duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div>



     {/* produvt */}
      {/* Product Section Title */}
       <div>
       <div className="text-center px-4 py-10 bg-white">
         <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">All Products</h2>
         <p className="text-gray-600 max-w-xl mx-auto mb-8">
           Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.
         </p>
         
         <div className="flex justify-center gap-4">

        <button
          onClick={() => setActiveCategory("new")}
          className={`px-6 py-2 rounded shadow transition ${
            activeCategory === "new"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          NEW PRODUCTS
        </button>

        <button
          onClick={() => setActiveCategory("popular")}
          className={`px-6 py-2 rounded shadow transition ${
            activeCategory === "popular"
              ? "bg-gray-900 text-white"
              : "bg-gray-100 text-gray-900 hover:bg-gray-200"
          }`}
        >
          POPULAR ITEMS
        </button>

          <button
            onClick={() => setActiveCategory("trending")}
            className={`px-6 py-2 rounded shadow transition ${
              activeCategory === "trending"
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900 hover:bg-gray-200"
            }`}
          >
            TRENDING ITEM
          </button>
        </div>

       </div>

       
       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-6 md:px-12 py-12 bg-white">
          {filteredProducts.map(({ title, price, oldPrice, imgUrl, onSale }, index) => (
            <div key={index} className="bg-white shadow-md rounded relative group overflow-hidden">
              {/* product card content */}
              <div className="relative">
                <img src={imgUrl} alt={title} className="w-full h-auto object-cover aspect-square" />

                

                <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {icons.map((Icon, i) => (
                    <button
                      key={i}
                      className="bg-white p-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                      <div className="w-6 h-6 flex items-center justify-center">
                        <Icon className="text-pink-600 text-base" />
                      </div>
                    </button>
                  ))}
                </div>


                {onSale && (
                  <span className="absolute top-2 right-2 bg-red-600 text-white text-xs px-2 py-1 rounded">
                    SALE
                  </span>
                )}
              </div>
        
              <div className="p-4 text-center">
                <h3 className="text-lg font-medium text-gray-900">{title}</h3>
                <div className="text-pink-600 text-lg font-bold">
                  ₹{price}
                  {oldPrice && (
                    <span className="line-through text-gray-500 ml-2 text-sm">₹{oldPrice}</span>
                  )}
                </div>


              </div>
            </div>
          ))}
        </div>
       </div>


      {/* banner */}

      <div className="w-11/12 mx-auto bg-[url(https://odour-demo.myshopify.com/cdn/shop/files/big_banner.png?v=1614298757)] bg-cover h-64 sm:h-80 md:h-96 bg-no-repeat py-10 px-4 md:px-14 flex flex-col md:flex-row items-center justify-between bg-center"></div>




    

    </div>
  );
};

export default Home;
