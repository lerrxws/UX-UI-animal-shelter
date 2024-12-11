import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import styles from './BasicBreadcrumbs.module.css';

function BasicBreadcrumbs() {
  const handleClick = (event) => {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  };

  return (
    <div
      role="presentation"
      onClick={handleClick}
      className={styles.container}
    >
      <nav aria-label="breadcrumb">
        <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex', gap: '10px' }}>
          <li>
            <a href="/" className={styles.link}>
              MUI
            </a>
          </li>
          <li>
            <a
              href="/material-ui/getting-started/installation/"
              className={styles.link}
            >
              Core
            </a>
          </li>
          <li className={styles.typography}>Breadcrumbs</li>
        </ul>
      </nav>
    </div>
  );
}

export default BasicBreadcrumbs;

