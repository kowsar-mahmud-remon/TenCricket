import React from 'react';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpeg';
import img3 from '../../assets/img3.jpeg';
import img4 from '../../assets/img4.jpeg';


const TopStories = () => {
  const data = [
    {
      id: 1,
      title: "Ind vs Eng: No Shami; Kuldeep, Axar in for first two Tests",
      img: img1
    },
    {
      id: 2,
      title: "BBL: Hobson, Connolly hurt Heat again",
      img: img2
    },
    {
      id: 3,
      title: "PSL opener to clash with ILT20 final",
      img: img3
    },
    {
      id: 4,
      title: "Naqvi breaks Zim cricket records with unbeaten 300",
      img: img4
    },
  ];
  return (
    <div className='max-w-[1280px] mx-auto px-5 my-10'>

      <h4 className='text-2xl font-semibold mb-3'>Top Stories</h4>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {
          data?.map(news => <div key={news?.id} className='flex items-center'>
            <img className='me-3 rounded-md' src={news?.img} alt="" />
            <h4 className='text-lg font-semibold'>{news?.title}</h4>
          </div>)
        }
      </div>
    </div>
  );
};

export default TopStories;