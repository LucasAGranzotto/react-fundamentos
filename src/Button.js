import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from './ThemeProvider';

export default function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{
        color: theme === 'dark' ? '#FFF' : '#000',
        background: theme === 'dark' ? '#000' : '#FFF',
      }}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};
