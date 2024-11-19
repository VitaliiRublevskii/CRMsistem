import React from 'react';

function Home() {
  const features = [
    { title: 'Contact Management', description: 'Maintain a complete client database.' },
    { title: 'Sales Funnel', description: 'Track all stages of sales.' },
    { title: 'Customer Support', description: 'Respond quickly to inquiries.' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Welcome to the CRM System</h1>
        <p style={styles.paragraph}>Effectively manage your contacts, sales, and support!</p>
      </div>
      <div style={styles.cardContainer}>
        {features.map((feature, index) => (
          <div key={index} style={styles.card}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginLeft: '420px', 
    padding: '20px',
    backgroundColor: '#462a57',
    borderRadius: '10px',
    maxWidth: '1200px',
    marginTop: '20px', 
  },
  textContainer: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  heading: {
    color: '#333',
    fontSize: '36px',
    margin: '10px 0',
  },
  paragraph: {
    color: '#555',
    fontSize: '18px',
    margin: '10px 0',
  },
  cardContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap', 
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    width: '250px', 
    textAlign: 'center',
  },
};

export default Home;
