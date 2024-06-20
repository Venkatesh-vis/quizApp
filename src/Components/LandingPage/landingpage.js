import React from 'react';
import { Button } from 'react-bootstrap';
import TypingEffect from 'react-typing-effect';
import './Landingpage.css';

const LandingPage = ({ startGame }) => {
  return (
    <div className="landing-page">
      <div className="typing-effect">
        <TypingEffect
          text={["Welcome to the Quiz Game!", "Are you ready to win ₹1,00,00,000?"]}
          speed={100}
          eraseSpeed={50}
          eraseDelay={2000}
          typingDelay={500}
        />
      </div>
      <Button className="start-button" onClick={startGame}>Start Game</Button>
    </div>
  );
};

export default LandingPage;
