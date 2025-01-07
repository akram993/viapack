import React, { useState, useEffect } from 'react';
import { FileDown, Download, ChevronDown } from 'lucide-react';

const FloatingCatalogDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const catalogOptions = [
    { name: 'Catalog Viapack Packaging', path: '/Data/catalogue.pdf', filename: 'Business_Viapack_Packaging.pdf' },
    { name: 'Catalog Epi Merged', path: '/Data/EPI_merged.pdf', filename: 'Business_Epi_Merged.pdf' }
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleDownload = async (catalogPath, filename) => {
    try {
      setIsLoading(true);
      
      const response = await fetch(catalogPath);
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
      
      setNotification({
        type: 'success',
        message: 'Catalog downloaded successfully'
      });
    } catch (err) {
      setNotification({
        type: 'error',
        message: 'Download failed. Try again.'
      });
    } finally {
      setIsLoading(false);
      setIsDropdownOpen(false);
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <>
      {isVisible && (
        <div 
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => {
            setIsExpanded(false);
            setIsDropdownOpen(false);
          }}
        >
          <div 
            className={`relative bg-blue text-black 
                      rounded-r-lg shadow-lg 
                      flex items-center 
                      transition-all duration-300 ease-in-out
                      ${isExpanded ? 'w-48' : 'w-12'} 
                      overflow-visible`}
          >
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              disabled={isLoading}
              className="p-3 flex items-center space-x-2 
                       disabled:opacity-50 disabled:cursor-not-allowed
                       w-full"
            >
              {isLoading ? (
                <span className="animate-spin mx-auto">
                  <Download className="w-6 h-6" />
                </span>
              ) : (
                <FileDown className="w-6 h-6 mx-auto" />
              )}
              {isExpanded && (
                <>
                  <span className="whitespace-nowrap flex-grow">Download Catalog</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && isExpanded && (
              <div className="absolute left-full ml-2 top-0 w-48 bg-white rounded-md shadow-lg border border-gray-200">
                {catalogOptions.map((catalog, index) => (
                  <button
                    key={index}
                    onClick={() => handleDownload(catalog.path, catalog.filename)}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50 first:rounded-t-md last:rounded-b-md"
                  >
                    {catalog.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Notification */}
          {notification && (
            <div 
              className={`absolute top-full mt-2 left-0 
                        p-2 rounded text-sm 
                        ${notification.type === 'success' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-red-500 text-white'}`}
            >
              {notification.message}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default FloatingCatalogDownload;