import React, { useState, useEffect } from 'react';
import { FileDown, Download } from 'lucide-react';

const FloatingCatalogDownload = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      
      const response = await fetch('/Data/catalog.pdf');
      
      if (!response.ok) {
        throw new Error('Download failed');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Business_Catalog_2024.pdf');
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
      setTimeout(() => setNotification(null), 3000);
    }
  };

  return (
    <>
      {isVisible && (
        <div 
          className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50"
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div 
            className={`relative bg-blue text-black 
                        rounded-r-lg shadow-lg 
                        flex items-center 
                        transition-all duration-300 ease-in-out
                        ${isExpanded ? 'w-48' : 'w-12'} 
                        overflow-hidden`}
          >
            <button 
              onClick={handleDownload}
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
                <span className="whitespace-nowrap">Download Catalog</span>
              )}
            </button>
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