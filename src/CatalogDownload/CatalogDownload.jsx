import React, { useState } from 'react';
import { Download, FileDown, Loader2, ChevronDown } from 'lucide-react';

const CatalogDownload = ({ variant = 'button' }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const catalogOptions = [
    { name: 'Catalog Viapack Packaging', path: '../../Data/Catalogue.pdf', filename: 'Catalog_Viapack_Packaging.pdf' },
    { name: 'Catalog Epi Merged', path: '../../Data/EPI_merged.pdf', filename: 'Catalog_Epi_Merged.pdf' }
  ];

  const handleDownload = async (catalogPath, filename) => {
    try {
      setIsLoading(true);
      
      const response = await fetch(catalogPath);
      
      if (!response.ok) {
        throw new Error('Failed to download catalog');
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
        message: 'Your catalog download has started'
      });
      
      setTimeout(() => setNotification(null), 3000);
    } catch (err) {
      setNotification({
        type: 'error',
        message: 'Failed to download catalog. Please try again later.'
      });
    } finally {
      setIsLoading(false);
      setIsDropdownOpen(false);
    }
  };

  const Notification = ({ type, message }) => {
    const bgColor = type === 'success' ? 'bg-green-50' : 'bg-red-50';
    const textColor = type === 'success' ? 'text-green-800' : 'text-red-800';
    const borderColor = type === 'success' ? 'border-green-200' : 'border-red-200';

    return (
      <div className={`absolute top-full mt-2 w-full p-4 rounded-md border ${bgColor} ${borderColor}`}>
        <p className={`text-sm font-medium ${textColor}`}>
          {message}
        </p>
      </div>
    );
  };

  const DownloadButton = () => (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        disabled={isLoading}
        className="bg-[#0ea298] mx-auto hover:bg-[#04776f] text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Download className="w-5 h-5" />
        )}
        <span>Download Product Catalog</span>
        <ChevronDown className="w-4 h-4" />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200">
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
  );

  const DownloadLink = () => (
    <div className="relative">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        disabled={isLoading}
        className="text-blue-600 hover:text-blue-800 flex items-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          <FileDown className="w-4 h-4" />
        )}
        <span>Download Catalog</span>
        <ChevronDown className="w-3 h-3" />
      </button>
      
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200">
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
  );

  return (
    <div className="relative">
      {variant === 'button' ? <DownloadButton /> : <DownloadLink />}
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
    </div>
  );
};

export default CatalogDownload;