"use client"
import React, { useState } from 'react';
import { products } from '../../public/assets/assets';

const Product = () => {
  const [activeTab, setActiveTab] = useState('popular');

  // Sort products for recent (by date descending) and popular (bestseller)
  const popularProducts = products.filter(p => p.bestseller);
  const recentProducts = [...products].sort((a, b) => b.date - a.date).slice(0, 10);

  const displayedProducts = activeTab === 'popular' ? popularProducts : recentProducts;

  return (
    <>
      <nav className="flex gap-2 mt-6 w-full border-b-2 pb-0 border-[#000]">
        <button
          className={`font-bold pr-2 border-r-2 border-[#000] ${activeTab === 'popular' ? 'text-blue-600' : ''}`}
          onClick={() => setActiveTab('popular')}
        >
          Popular
        </button>
        <button
          className={`font-bold ${activeTab === 'recent' ? 'text-blue-600' : ''}`}
          onClick={() => setActiveTab('recent')}
        >
          Recent
        </button>
      </nav>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {displayedProducts.map(product => (
          <div key={product._id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
            <img src={product.image[0]} alt={product.name} className="h-32 w-32 object-contain mb-2" />
            <div className="font-semibold text-lg text-gray-800 mb-1">{product.name}</div>
            <div className="text-gray-500 text-sm mb-2">${product.price}</div>
          </div>
        ))}
      </div>
      {/* <footer className="w-full bg-gray-100 py-6 mt-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-2 mb-2 md:mb-0">
            <img src="/assets/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
            <span className="text-lg font-semibold text-gray-700">Resto</span>
          </div>
          <div className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Resto. All rights reserved.</div>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition">Terms of Service</a>
          </div>
        </div>
      </footer> */}
    </>
  );
};

export default Product;
