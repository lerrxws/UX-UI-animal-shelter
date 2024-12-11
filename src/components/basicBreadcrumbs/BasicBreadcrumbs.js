import * as React from 'react';
import { Link } from 'react-router-dom';  // Use Link for client-side routing
import styles from './BasicBreadcrumbs.module.css';

function BasicBreadcrumbs({ pages }) {
  // Handle click (optional, you can remove this if not needed)
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
          {pages.map((page, index) => (
            <li key={index}>
              {index < pages.length - 1 ? (
                <Link to={page.url} className={styles.link}>
                  {page.label} ›
                </Link>
              ) : (
                <span className={styles.typography}>{page.label}</span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default BasicBreadcrumbs;
