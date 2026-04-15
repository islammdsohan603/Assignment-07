import React, { useContext, useState } from 'react';
import { FriendsContext } from '../../FriendsContaxtData';
import { IoCall } from 'react-icons/io5';
import { IoIosText } from 'react-icons/io';
import { IoMdVideocam } from 'react-icons/io';

const getIcon = type => {
  if (type === 'Call') return <IoCall className="text-orange-400 text-2xl" />;
  if (type === 'Text') return <IoIosText className="text-gray-400 text-2xl" />;
  if (type === 'Video')
    return <IoMdVideocam className="text-blue-400 text-2xl" />;
};

const TimeLine = () => {
  const { collId } = useContext(FriendsContext);
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredData = collId
    .filter(item => (filter === 'All' ? true : item.type === filter))
    .filter(
      item =>
        item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.description?.toLowerCase().includes(search.toLowerCase()),
    );

  return (
    <div className="min-h-screen bg-base-200 py-10">
      <div className="w-10/12 mx-auto">
        <h1 className="text-3xl font-bold mb-6">Timeline</h1>

        <div className="flex flex-col md:flex-row md:items-center gap-6 mb-6">
          {/* Filter */}
          <select
            className="select select-bordered mb-6 w-48"
            value={filter}
            onChange={e => setFilter(e.target.value)}
          >
            <option value="All">Filter timeline</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
          {/* Search Bar */}

          <input
            type="text"
            value={search}
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
            className="input input-bordered w-full md:w-80 mb-6"
          />
        </div>
        {/* List */}
        <div className="space-y-2">
          {filteredData.length === 0 ? (
            <p className="text-neutral-400 text-center py-10">
              No {filter === 'All' ? '' : filter} interactions yet!
            </p>
          ) : (
            filteredData.map(item => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-sm"
              >
                <div>{getIcon(item.type)}</div>
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
