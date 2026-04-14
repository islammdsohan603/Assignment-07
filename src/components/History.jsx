import React, { useContext } from 'react';
import { FriendsContext } from '../FriendsContaxtData';

import { FaHistory } from 'react-icons/fa';

const History = () => {
  const { collId } = useContext(FriendsContext);

  return (
    <div>
      {/* Recent Interactions */}

      <div className="my-4 bg-white shadow-2xs p-6">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold text-neutral-500">
            Recent Interactions
          </h1>
          <button className=" btn flex items-center gap-2">
            {' '}
            <FaHistory /> Full History
          </button>
        </div>
        {/* History show */}
        <div>
          {collId.map(coll => (
            <div>
              <h1> {coll.title} </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
