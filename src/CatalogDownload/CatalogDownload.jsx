import React, { useState } from 'react';
import { Download, FileDown, Loader2 } from 'lucide-react';

const CatalogDownload = ({ variant = 'button'}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleDownload = async () => {
    try {
      setIsLoading(true);
      
      // Replace this URL with your actual PDF catalog URL
      const response = await fetch('/Data/catalog.pdf');
      
      if (!response.ok) {
        throw new Error('Failed to download catalog');
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'Catalog_2024.pdf');
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
    }
  };

  // Notification component
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

  // Main download button component
  const DownloadButton = () => (
    <button
      onClick={handleDownload}
      disabled={isLoading}
      className="bg-[#0ea298] mx-auto hover:bg-[#04776f] text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Download className="w-5 h-5" />
      )}
      <span>Download Product Catalog</span>
    </button>
  );

  // Compact link variant
  const DownloadLink = () => (
    <button
        onClick={handleDownload}
        disabled={isLoading}
        className="text-blue-600 hover:text-blue-800 flex items-center space-x-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isLoading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <FileDown className="w-4 h-4" />
      )}
      <span>Download Catalog</span>
    </button>
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