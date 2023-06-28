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
    <div className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="card w-1/4 p-4">
          <h2>{post.attributes.Title}</h2>
          <p>{post.attributes.Content}</p>
          <p>Author: {post.attributes.Author}</p>
        </div>
      ))}
    </div>
  );
}