import React from 'react';
import CurrentMatches from '../CurrentMatches/CurrentMatches';
import CricketSeries from '../CricketSeries/CricketSeries';
import Banner from '../Banner/Banner';
import TopStories from '../TopStories/TopStories';
import OurPartners from '../OurPartners/OurPartners';

const Home = () => {

  return (
    <div>
      <Banner></Banner>
      <CurrentMatches></CurrentMatches>
      <CricketSeries></CricketSeries>
      <TopStories></TopStories>
      <OurPartners></OurPartners>
    </div>
  );
};

export default Home;