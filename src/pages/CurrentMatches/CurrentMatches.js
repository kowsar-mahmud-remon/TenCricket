import React, { useState } from 'react';
import { useGetAllCurrentMatchesQuery } from '../../redux/features/cricket/cricketApi';

const CurrentMatches = () => {
  const { data, isLoading } = useGetAllCurrentMatchesQuery({});

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
    <div className='max-w-[1280px] mx-auto px-5 my-10'>
      <h4 className='text-2xl font-semibold mb-3'>Current Matches List</h4>
      <div className="grid grid-cols-2 gap-5">
        {
          data?.data?.slice(0, itemsToShow)?.map(matchDetails => <div key={matchDetails?.id} className=' bg-slate-200 py-5 px-10 rounded-md'>
            <div className="flex justify-between text-slate-500 mb-3">
              <p className='text-base'>{matchDetails?.matchType}</p>
              <p className='text-base'>{matchDetails?.date}</p>
            </div>

            <div className="flex justify-between">
              <div className="">
                {
                  matchDetails?.teamInfo?.map((info, i) => <div key={i} className="flex">
                    <img className=' w-8 me-2 mb-5' src={info?.img} alt="" />
                    <h5>{info?.name}</h5>
                  </div>)
                }
              </div>
              <div className="">
                {
                  matchDetails?.score?.slice(0, 2).map((details, i) => <div key={i} className="mb-5">
                    <h5>{details?.r}/{details?.w}({details?.o})</h5>
                  </div>)
                }
              </div>
            </div>
            <p className='text-base text-center'>{matchDetails?.status}</p>
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