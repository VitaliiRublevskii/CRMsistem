import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.linkButton}>Home</Link>
      <Link to="/buyers" style={styles.linkButton}>Buyers</Link>
      <Link to="/sales" style={styles.linkButton}>Sales</Link>
      <Link to="/analyses" style={styles.linkButton}>Analyses</Link>
      <Link to="/supports" style={styles.linkButton}>Supports</Link>
      <Link to="/contacts" style={styles.linkButton}>Contacts</Link>
    </nav>
  );
}

const styles = {
  nav: {
    width: '200px',
    height: '100vh',
    backgroundColor: '#462a57',
    display: 'flex',
    flexDirection: 'column',
    padding: '10px',
    position: 'fixed',
    top: '0',
    left: '0',
    overflowY: 'auto',
  },
  linkButton: {
    display: 'block',
    marginBottom: '10px',
    padding: '10px',
    color: '#fff',
    backgroundColor: '#907c9c',
    textAlign: 'center',
    borderRadius: '5px',
    textDecoration: 'none',
    fontSize: '16px',
  },
};

export default Navigation;
