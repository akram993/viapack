import { useState, useEffect } from 'react';
import Gants1 from "../assets/2071.jpg"
import Gants2 from "../assets/Gants2.jpg"
import Transpalette1 from "../assets/Transpalette1.jpg"
import Transpalette2 from "../assets/Transpalette2.jpg"
import Chariot1 from "../assets/Chariot1.jpg"
import Chariot2 from "../assets/Chariot2.jpg"
import Cerclage1 from "../assets/Cerclage1.jpg"
import Cerclage2 from "../assets/Cerclage2.jpg"
import { useNavigate } from 'react-router-dom';
import CatalogDownload from '../CatalogDownload/CatalogDownload';

const Products = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const itemsPerPage = 6;

  // Sample data - replace with your actual products
  const products = [
    {
      id: 1,
      name: "Transpalette",
      category: "Transpalette",
      description: "Custom website development with modern technologies",
      price: "$999+",
      image: Transpalette1
    },
    {
      id: 2,
      name: "Transpalette Lende",
      category: "Transpalette",
      description: "Native and cross-platform mobile applications",
      price: "$1499+",
      image: Transpalette2
    },
    {
      id: 3,
      name: "Chariot de Servie Manuel",
      category: "Chariot",
      description: "User-centered design solutions",
      price: "$799+",
      image: Chariot1
    },
    {
      id: 4,
      name: "Chariot de Service Manuel",
      category: "Chariot",
      description: "Complete branding solutions",
      price: "$599+",
      image: Chariot2
    },
    {
      id: 5,
      name: "Gants Anti Coupure",
      category: "Gants",
      description: "Search engine optimization for better visibility",
      price: "$499+",
      image: Gants1
    },
    {
      id: 6,
      name: "Gants Jetable",
      category: "Gants",
      description: "Strategic content creation and distribution",
      price: "$399+",
      image: Gants2
    },
    {
      id: 7,
      name: "Cerclage en Couleur",
      category: "Cerclage",
      description: "Cloud infrastructure and deployment",
      price: "$899+",
      image: Cerclage1
    },
    {
      id: 8,
      name: "Support de Cerclage",
      category: "Cerclage",
      description: "Comprehensive security assessment",
      price: "$699+",
      image: Cerclage2
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Transpalette', name: 'Transpalette' },
    { id: 'Chariot', name: 'Chariot' },
    { id: 'Gants', name: 'Gants' },
    { id: 'Cerclage', name: 'Cerclage' }
  ];

  useEffect(() => {
    const filtered = products.filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       product.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0ea298] mb-4">Our Products</h1>
        <p className="text-gray-600 mb-6">
            Browse our complete range of products. Download our catalog for detailed specifications and pricing.
          </p>
          <CatalogDownload variant="button" />
      </div>

      {/* Search and Categories */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          {/* Search Input */}
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#0ea298]"
          />

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#0ea298] text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center text-gray-600 py-12">
            No products found matching your search and category.
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentItems.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#0ea298] font-bold">{product.price}</span>
                      <button
                        onClick={() => navigate(`/products/${product.id}`)} 
                        className="bg-[#0ea298] text-white px-4 py-2 rounded hover:bg-white hover:text-[#0ea298] transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12">
                <div className="flex space-x-2">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-4 py-2 rounded ${
                      currentPage === 1
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-[#0ea298] text-white hover:bg-[#0ea298]'
                    }`}
                  >
                    Previous
                  </button>
                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`px-4 py-2 rounded ${
                        currentPage === index + 1
                          ? 'bg-[#0ea298] text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-4 py-2 rounded ${
                      currentPage === totalPages
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                        : 'bg-[#0ea298] text-white hover:bg-[#0ea298]'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Products;