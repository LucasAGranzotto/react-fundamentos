import React from 'react';

import PropTypes from 'prop-types';

import Button from './Button';

export default function PostHeader({ post, onRemove, onRead }) {
  return (
    <>
      <strong>
        {post.read && <s>{post.title}</s>}
        {!post.read && post.title}
      </strong>
      <Button onClick={onRead}>Toggle read</Button>
      <Button onClick={() => onRemove(post.id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
