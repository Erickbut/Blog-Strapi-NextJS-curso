'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

async function fetchPosts() {
  try {
    const response = await axios.get('http://localhost:1337/api/posts');
    return response.data.data;
  } catch (error) {
    throw new Error('Error fetching posts');
  }
}

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts() {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);
    }

    getPosts();
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-yellow-400 flex justify-center items-center mb-8 mt-6 hover:text-5xl transform hover:scale-105 transition-all duration-300 ">
        BLOG con strapi y NextJS
      </h1>
      <hr className='p-5' />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-5 mr-5">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-4 rounded shadow hover:text-5xl transform hover:scale-105 transition-all duration-300">
            <h2 className="text-yellow-600 text-xl font-bold mb-2">{post.attributes.Title}</h2>
            <p className="text-blue-800 mb-4">{post.attributes.Content}</p>
            <p className="text-blue-500">Autor: {post.attributes.Author}</p>
          </div>
        ))}
      </div>
    </>
  );
}
