import React, { useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (content) => {
    const newPost = { id: Date.now(), content };
    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h2>Daily Blog</h2>
      <textarea placeholder="Write your thoughts..." />
      <button onClick={() => addPost(document.querySelector('textarea').value)}>
        Post
      </button>
      <div>
        {posts.map(post => (
          <div key={post.id}>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
