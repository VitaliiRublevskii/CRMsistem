import React from 'react';

function Analyses() {
  // Placeholder data for analysis
  const data = {
    totalDeals: 120,
    completedDeals: 80,
    canceledDeals: 20,
    inProgressDeals: 20,
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Analyses Page</h1>
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h2>Total Deals</h2>
          <p>{data.totalDeals}</p>
        </div>
        <div style={styles.card}>
          <h2>Completed Deals</h2>
          <p>{data.completedDeals}</p>
        </div>
        <div style={styles.card}>
          <h2>Canceled Deals</h2>
          <p>{data.canceledDeals}</p>
        </div>
        <div style={styles.card}>
          <h2>Deals in Progress</h2>
          <p>{data.inProgressDeals}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: '80%',
    marginLeft: '280px',
    //margin: 'auto',
    padding: '20px',
    backgroundColor: '#907c9c',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    marginBottom: '20px',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1 1 calc(25% - 20px)',
    backgroundColor: '#462a57',
    color: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
};

export default Analyses;
