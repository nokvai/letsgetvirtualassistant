import React, { FC } from 'react';
import './HomePage.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className="HomePage" data-testid="HomePage">
    <h3>Welcome to Lets get Virtual Assistant</h3>
      <div>
        <img alt="" src="https://st2.depositphotos.com/1074452/8691/i/950/depositphotos_86917298-stock-photo-virtual-assistant-shows-independent-contractor.jpg"/>
        <img alt="" src="https://p.kindpng.com/picc/s/65-658263_online-marketing-project-personal-assistant-virtual-assistant-vector.png"/> 
      </div>
  </div>
);

export default HomePage;
