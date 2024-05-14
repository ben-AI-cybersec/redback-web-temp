import React from 'react';
import { useNavigate } from 'react-router-dom';

function MainContent() {
  let navigate = useNavigate();

  function navigateToPowerCurve() {
    navigate('/power-curve');
  }

  return (
    <div className="main-content">
      <button onClick={navigateToPowerCurve} className="power-curve-btn">POWER CURVE</button>
    </div>
  );
}

export default MainContent;
