import { useState, useEffect } from 'react';
import { useNavigate, useParams, BrowserRouter, Routes, Route } from 'react-router-dom';
import Transpalette1 from "../assets/transpalette1.jpg"
import Transpalette2 from "../assets/transpalette2.jpg"

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Sample detailed product data - replace with your actual data
  const products = {
    1: {
      id: 1,
      name: "Premium Wireless Headphones",
      category: "Electronics",
      price: "$299.99",
      stock: 15,
      colors: [
        { name: "Midnight Black", code: "#000000" },
        { name: "Arctic White", code: "#FFFFFF" },
        { name: "Ocean Blue", code: "#0ea298" }
      ],
      images: [
        Transpalette1,
        Transpalette2
      ],
      thumbnails: [
        Transpalette1,
        Transpalette2
      ],
      description: `Experience premium sound quality with our latest wireless headphones. 
      Featuring advanced noise cancellation technology and premium materials for ultimate comfort.`,
      features: [
        "40-hour battery life",
        "Active Noise Cancellation",
        "Premium leather cushions",
        "Bluetooth 5.0",
        "Built-in voice assistant"
      ],
      specifications: {
        "Driver Size": "40mm",
        "Frequency Response": "20Hz - 20kHz",
        "Impedance": "32 Ohm",
        "Weight": "250g",
        "Charging Time": "2 hours"
      },
      reviews: {
        average: 4.8,
        count: 246
      }
    },
    // Add more products...
  };

  const product = products[id];

  useEffect(() => {
    if (product && product.colors.length > 0) {
      setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <button 
            onClick={() => navigate('/products')}
            className="mt-4 bg-[#0ea298] text-white px-6 py-2 rounded hover:bg-[#0c8f86]"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const handleQuantityChange = (action) => {
    if (action === 'increment' && quantity < product.stock) {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation */}
        <div className="mb-8">
          <button 
            onClick={() => navigate('/products')}
            className="text-[#0ea298] hover:text-[#0c8f86] flex items-center"
          >
            ← Back to Products
          </button>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="flex space-x-4">
              {product.thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all
                    ${selectedImage === index ? 'border-[#0ea298]' : 'border-transparent'}`}
                >
                  <img 
                    src={thumb} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center space-x-4">
                <span className="text-2xl font-bold text-[#0ea298]">{product.price}</span>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < Math.floor(product.reviews.average)
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-gray-600">
                    ({product.reviews.count} reviews)
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Colors</h3>
              <div className="flex space-x-4">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={`group relative w-12 h-12 rounded-full flex items-center justify-center ${
                      selectedColor?.name === color.name ? 'ring-2 ring-[#0ea298]' : ''
                    }`}
                  >
                    <span
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: color.code }}
                    />
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                      opacity-0 group-hover:opacity-100 text-sm whitespace-nowrap">
                      {color.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-lg">
                  <button
                    onClick={() => handleQuantityChange('decrement')}
                    className="px-4 py-2 text-gray-600 hover:text-[#0ea298]"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('increment')}
                    className="px-4 py-2 text-gray-600 hover:text-[#0ea298]"
                  >
                    +
                  </button>
                </div>
                <span className="text-gray-600">
                  {product.stock} items available
                </span>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button 
              className="w-full bg-[#0ea298] text-white py-3 px-6 rounded-lg hover:bg-[#0c8f86] 
                transform transition hover:scale-105 flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" 
                strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span>Add to Cart</span>
            </button>

            {/* Specifications */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between">
                    <span className="text-gray-600">{key}</span>
                    <span className="font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h3>
              <ul className="grid grid-cols-1 gap-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <svg className="w-5 h-5 text-[#0ea298]" fill="none" strokeLinecap="round" 
                      strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;