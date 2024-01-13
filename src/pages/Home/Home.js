import React from 'react';
import CurrentMatches from '../CurrentMatches/CurrentMatches';
import CricketSeries from '../CricketSeries/CricketSeries';

const Home = () => {

  return (
    <div>
      This is home page
      <CurrentMatches></CurrentMatches>
      <CricketSeries></CricketSeries>
    </div>
  );
};

export default Home;