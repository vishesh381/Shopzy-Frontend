import ProductCard from "./shared/ProductCard";

const products = [
    {
        image: "https://buy.gazelle.com/cdn/shop/files/iPhone_13_Pro_Max_-_Gold_-_Overlap_Trans-cropped.jpg?v=1747950668",
        productName: "iPhone 13 Pro Max",
        description:
          "The iPhone 13 Pro Max offers exceptional performance with its A15 Bionic chip, stunning Super Retina XDR display, and advanced camera features for breathtaking photos.",
        specialPrice: 720,
        price: 780,
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq9H30uG-XulOu-bK26MwbhftOtbICDXe9RQ&s",
        productName: "Samsung Galaxy S21",
        description:
          "Experience the brilliance of the Samsung Galaxy S21 with its vibrant AMOLED display, powerful camera, and sleek design that fits perfectly in your hand.",
        specialPrice: 699,
        price: 799,
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMGHpmePbwnk6XgyvVPVLImA5d4r4uh1FHBA&s",
        productName: "Google Pixel 6",
        description:
          "The Google Pixel 6 boasts cutting-edge AI features, exceptional photo quality, and a stunning display, making it a perfect choice for Android enthusiasts.",
        price: 599,
        specialPrice: 400,
      }
];

const About = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center mb-12">
                About Us
            </h1>
           <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <p className="text-lg mb-4">
                        Welcome to our e-commerce store! We are dedicated to providing the
                        best products and services to our customers. Our mission is to offer
                        a seamless shopping experience while ensuring the highest quality of
                        our offerings.
                    </p>
                </div>

                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                        src="shopzy.png"
                        alt="About Us"
                        className="w-full h-[450px] rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
></img>
                </div>
           </div>


           <div className="py-7 space-y-8">
            <h1 className="text-slate-800 text-4xl font-bold text-center">
                Our Products
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {products.map((product, index) => (
                <ProductCard 
                    key={index}
                    image={product.image}
                    productName={product.productName}
                    description={product.description}
                    specialPrice={product.specialPrice}
                    price={product.price}
                    about
                />
               ))
               }
                

            </div>
           </div>
        </div>
    );
}

export default About;