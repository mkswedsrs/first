import React, { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [need, setNeed] = useState('');

  const handlePost = () => {
    if (need.trim() === '') return;
    setPosts([...posts, { id: Date.now(), text: need, helped: false }]);
    setNeed('');
  };

  const handleHelp = (id) => {
    setPosts(posts.map((post) =>
      post.id === id ? { ...post, helped: true } : post
    ));
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Help Needed Platform</h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          placeholder="Describe your need..."
          value={need}
          onChange={(e) => setNeed(e.target.value)}
          style={{ flex: 1, padding: '8px' }}
        />
        <button onClick={handlePost}>Post</button>
      </div>

      <div>
        {posts.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>
            No needs posted yet.
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '5px'
              }}
            >
              <p>{post.text}</p>
              {post.helped ? (
                <strong style={{ color: 'green' }}>Helped</strong>
              ) : (
                <button onClick={() => handleHelp(post.id)}>
                  I want to help
                </button>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;