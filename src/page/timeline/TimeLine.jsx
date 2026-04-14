import React, { useContext } from 'react';
import { FriendsContext } from '../../FriendsContaxtData';
import { IoCall } from 'react-icons/io5';
import { IoIosText } from 'react-icons/io';
import { IoMdVideocam } from 'react-icons/io';
import { MdPeople } from 'react-icons/md';

const getIcon = type => {
  if (type === 'Call') return <IoCall className="text-orange-400 text-2xl" />;
  if (type === 'Text') return <IoIosText className="text-gray-400 text-2xl" />;
  if (type === 'Video')
    return <IoMdVideocam className="text-blue-400 text-2xl" />;
  return <MdPeople className="text-yellow-400 text-2xl" />;
};

const TimeLine = () => {
  const { collId } = useContext(FriendsContext);

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="w-10/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        {/* Filter */}
        <select className="select select-bordered mb-6 w-48">
          <option>Filter timeline</option>
          <option>Call</option>
          <option>Text</option>
          <option>Video</option>
        </select>

        {/* List */}
        <div className="space-y-2">
          {collId.length === 0 ? (
            <p className="text-neutral-400 text-center py-10">
              No interactions yet!
            </p>
          ) : (
            collId.map(item => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm"
              >
                {/* Icon */}
                <div>{getIcon(item.type)}</div>

                {/* Text */}
                <div>
                  <p className="font-semibold">
                    <span className="font-bold">{item.type}</span>{' '}
                    <span className="text-neutral-500 font-normal">
                      with {item.name}
                    </span>
                  </p>
                  <p className="text-sm text-gray-400">{item.date}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
