import products from "./product";
import Name from "./Name";
import Price from "./Price";
import Description from "./Description";
import Image from "./Image";

const firstName = "Yahia Djouadi";

export default () => {
  const handleAddToCart = () => {
    alert("Added to cart successfully");
  };

  return (
    <div className="bg-gray-900 text-white">
      <header className="sticky top-0 bg-yellow-500 text-white shadow-lg z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center p-6">
          <h1 className="text-3xl font-extrabold text-black tracking-wide">Exclusive Store</h1>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#products"
                  className="text-black font-medium hover:text-yellow-600 transition duration-200 ease-in-out"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-black font-medium hover:text-yellow-600 transition duration-200 ease-in-out"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-black font-medium hover:text-yellow-600 transition duration-200 ease-in-out"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-700 text-white h-[50vh] sm:h-[60vh] flex items-center justify-center px-6 sm:px-12">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
            Unlock a New Era of Shopping
          </h1>
          <p className="text-md sm:text-lg text-gray-100 mb-6">
            Browse curated collections and discover premium products in a seamless shopping journey.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-lg text-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-300 ease-in-out">
            Start Shopping Now
          </button>
        </div>
      </section>

      <main className="container mx-auto py-12" id="products">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl overflow-hidden"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t-xl"
              />
              <div className="p-6 space-y-4">
                <Name name={product.name} />
                <Price price={product.price} />
                <Description description={product.description} />
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-yellow-500 text-black py-2 rounded-md font-semibold hover:bg-yellow-600 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <p className="text-2xl text-yellow-400 mb-4">
            {firstName ? `Hello, ${firstName}!` : "Hello, there!"}
          </p>
          <div className="mt-6 flex justify-center items-center">
            <img
              src="/assets/IMG_3750.jpeg"
              alt="Greeting"
              className="w-32 h-32 rounded-full border-4 border-yellow-400 shadow-xl"
            />
          </div>
        </div>
      </section>

      <section id="about" className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Our Store</h2>
          <p className="text-lg text-gray-300">
            Our store brings you exclusive, curated products to enhance your lifestyle. From fashion to tech, we've got it all!
          </p>
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-10 text-center">
        <p className="text-lg text-yellow-400">Powered by Yahia Djouadi 🤖</p>
      </footer>
    </div>
  );
};
