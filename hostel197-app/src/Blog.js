import React from 'react';
import './Blog.css';

function Blog() {
  return (
    <div className="blog-page bg-gray-100 min-h-screen p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-8">Blog</h1>
      <article className="blog-article bg-white rounded shadow p-6 max-w-2xl w-full mb-8">
        <h2 className="text-2xl font-semibold mb-4">Zanzibar'da Ucuz Macera: 5 İpucu</h2>
        <p className="text-gray-700">(İçerik yakında eklenecek...)</p>
      </article>
    </div>
  );
}

export default Blog; 