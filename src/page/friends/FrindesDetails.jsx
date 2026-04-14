import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FriendsContext } from '../../FriendsContaxtData';

const FrindesDetails = () => {
  const { id } = useParams();
  const { data } = useContext(FriendsContext);

  const singleFriend = data.find(friend => friend.id === Number(id));

  if (!singleFriend) {
    return <h1 className="text-center mt-10">Loading...</h1>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-base-200 p-8 rounded-2xl shadow-xl text-center space-y-3">
        <h1 className="text-2xl font-bold">{singleFriend.name}</h1>
        <p>Status: {singleFriend.status}</p>
        <p>ID: {singleFriend.id}</p>
      </div>
    </div>
  );
};

export default FrindesDetails;
