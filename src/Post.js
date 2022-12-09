import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

export default function Post({ post, onRemove }) {
  const [read, setRead] = useState(post.read);

  function handlePostIsRead() {
    setRead((prevState) => !prevState);
  }

  return (
    <>
      <article>
        <PostHeader
          onRemove={onRemove}
          onRead={handlePostIsRead}
          post={{
            id: post.id,
            title: post.title,
            read,
          }}
        />
        <br />
        <small>{post.subtitle}</small>
        <br />
        Média:
        {post.likes / 2}
      </article>
      <br />
    </>
  );
}

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
