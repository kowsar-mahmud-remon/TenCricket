import React from 'react';
import { useGetAllUsersQuery } from '../../redux/features/user/userApi';

const Home = () => {
  const { data } = useGetAllUsersQuery({});
  console.log(data);
  return (
    <div>
      This is home page
    </div>
  );
};

export default Home;