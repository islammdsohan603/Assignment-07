import React from 'react';

const totalFriends = [
  { id: 1, title: 'Total Friends', count: 10 },
  { id: 1, title: 'On Track', count: 3 },
  { id: 1, title: 'Need Attention', count: 6 },
];

const HomePages = () => {
  return (
    <div className="w-10/12 mx-auto py-6">
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
            className="bg-base-100 p-6 rounded-2xl shadow-2xl flex flex-col items-center justify-center cursor-pointer hover:translate-y-2 duration-300"
          >
            <h1 className="text-3xl font-bold"> {frind.count} </h1>
            <p className="text-neutral-600 font-semibold"> {frind.title} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePages;
