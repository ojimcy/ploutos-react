import React from 'react';
import MainDashboard from '../components/Dashboard';
import { Container } from 'reactstrap';

function Home() {
  return (
    <div>
      <Container>
        <MainDashboard />
      </Container>
    </div>
  );
}

export default Home;
