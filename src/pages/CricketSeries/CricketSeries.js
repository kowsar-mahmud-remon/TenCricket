import React, { useState } from 'react';
import { useGetAllCricketSeriesQuery } from '../../redux/features/cricket/cricketApi';

const CurrentMatches = () => {
  const { data, isLoading } = useGetAllCricketSeriesQuery({});

  const [itemsToShow, setItemsToShow] = useState(4);

  const handleShowMore = () => {
    setItemsToShow(itemsToShow + 4);
  };

  const handleShowLess = () => {
    setItemsToShow(4);
  };


  if (isLoading) {
    return (
      <div className="flex justify-center my-20 text-success">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className='max-w-[1280px] mx-auto px-5 my-20'>
      <h4 className='text-2xl font-semibold mb-3'>Cricket Next Series List</h4>
      <div className="grid grid-cols-2 gap-5">
        {
          data?.data?.slice(0, itemsToShow)?.map(matchDetails => <div key={matchDetails?.id} className=' bg-slate-200 py-5 px-10 rounded-md'>
            <div className="flex justify-end text-slate-500 mb-3">
              <p className='text-base'>{matchDetails?.startDate}</p>
            </div>

            <p className='text-xl text-center mb-3'>{matchDetails?.name}</p>
            <p className=' text-center mb-3'>Total Match - {matchDetails?.matches}</p>
            <div className="text-base flex justify-between">
              <p>Odi - {matchDetails?.odi}</p>
              <p>T20 - {matchDetails?.t20}</p>
              <p>test - {matchDetails?.test}</p>
              <p>squads - {matchDetails?.squads}</p>
            </div>
          </div>)
        }


      </div>
      <div className="flex justify-center mt-5">
        <button onClick={handleShowMore} className='btn btn-sm btn-secondary'>Show More</button>

      </div>

    </div>
  );
};

export default CurrentMatches;