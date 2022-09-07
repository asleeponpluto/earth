import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './earth.module.css';

const Earth = () => {
  const [isDark, setIsDark] = useState(false);
  const params = useParams();

  const toggleDark = () => {
    document.body.classList.toggle('dark', !isDark);
    setIsDark(!isDark);
  };

  return (
    <div className={styles.earth}>
      <h1 className='fs-primary-heading fw-bold'>
        hello, {params.moniker ? params.moniker : 'friend'}...
      </h1>
      <button onClick={toggleDark} className='fs-primary-heading'>
        {isDark ? '🪐' : '🌑'}
      </button>
    </div>
  );
};

export default Earth;
