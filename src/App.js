import React, { useState } from 'react';

import Header from './Header';
import Post from './Post';

import PostsArray from './PostsArray';
import ThemeProvider from './ThemeProvider';

export default function App() {
  const [posts, setPosts] = useState(PostsArray);

  function handleRefresh() {
    setPosts((prevState) => {
      const ordinal = String(prevState.length + 1).padStart(4, '0');
      return [
        ...prevState,
        {
          id: Math.random(),
          title: `Title #${ordinal}`,
          subtitle: `Subtitle #${ordinal}`,
          likes: 20,
          read: false,
        },
      ];
    });
  }

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
  }

  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2>
          Posts da Semana
          <button type="button" onClick={handleRefresh}>
            Atualizar
          </button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </ThemeProvider>
  );
}
