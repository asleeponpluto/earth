import React, { useState } from 'react';
import styles from './earth.module.css';

const Earth = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDark = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`${styles.earth} ${isDark ? styles.dark : ''}`}>
      <h1 className='fs-primary-heading fw-bold'>hello, friend...</h1>
      <button onClick={toggleDark} className='fs-primary-heading'>{isDark ? '🪐' : '🌑'}</button>
    </div>
  );
}

export default Earth;
