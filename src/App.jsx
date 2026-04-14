import React, { useEffect, useState } from 'react';
import { GridLoader } from 'react-spinners';

const totalFriends = [
  { id: 1, title: 'Total Friends', count: 10 },
  { id: 2, title: 'On Track', count: 3 },
  { id: 3, title: 'Need Attention', count: 6 },
];

const HomePages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fechtData = async () => {
      const res = await fetch('/data.json');
      const data = await res.json();

      setData(data);
    };

    fechtData();
  }, []);

  return (
    <div className="w-10/12 mx-auto py-10">
      <div className="space-y-3 max-w-2xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-700">
          Friends to Keep close in Your life
        </h1>
        <p className="text-sm md:text-lg text-neutral-600 font-semibold">
          Your personal shelf of meaningful connections. Browse,tend and nurture
          the <br />
          relationships that matter most.{' '}
        </p>

        <button className="btn btn-success text-lg font-bold cursor-pointer">
          + Add a Friend
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-5 pb-8 border-b-2 border-neutral-300">
        {totalFriends.map(frind => (
          <div
            key={frind.id}
            className="bg-base-100 p-6 rounded-2xl   flex flex-col shadow-2xs shadow-amber-500 items-center justify-center cursor-pointer hover:translate-y-2 duration-300 hover:shadow-2xl"
          >
            <h1 className="text-3xl font-bold"> {frind.count} </h1>
            <p className="text-neutral-600 font-semibold"> {frind.title} </p>
          </div>
        ))}
      </div>

      <h1 className="text-2xl font-bold my-10">Your Friends</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pt-10">
        {data.length == 0 ? (
          <div className="col-span-full flex justify-center items-center min-h-40">
            <GridLoader />
          </div>
        ) : (
          data.map(friends => (
            <div
              key={friends.id}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center cursor-pointer text-center space-y-3 hover:shadow-xl transition"
            >
              {/* Image */}
              <img
                src={friends.picture}
                alt={friends.name}
                className="w-16 h-16 rounded-full object-cover"
              />

              {/* Name */}
              <h1 className="font-semibold text-lg">{friends.name}</h1>

              {/* Days ago */}
              <p className="text-sm text-gray-500">
                {friends.days_since_contact}d ago
              </p>

              {/* Tags */}
              <div className="flex gap-2 flex-wrap justify-center">
                {friends.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <span
                className={`px-4 py-1 text-xs font-semibold rounded-full ${
                  friends.status === 'overdue'
                    ? 'bg-red-500 text-white'
                    : friends.status === 'almost due'
                      ? 'bg-yellow-400 text-white'
                      : 'bg-green-600 text-white'
                }`}
              >
                {friends.status}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePages;
