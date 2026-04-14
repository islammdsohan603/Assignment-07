import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FriendsContext } from '../../FriendsContaxtData';
import History from '../../components/History';

import { GridLoader } from 'react-spinners';
import { IoCall } from 'react-icons/io5';
import { IoIosText } from 'react-icons/io';
import { IoMdVideocam } from 'react-icons/io';
import { MdOutlineSnooze } from 'react-icons/md';
import { FaBoxArchive } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';

const girdItem = [
  { id: 1, title: 'Call', icon: <IoCall /> },
  { id: 2, title: 'Text', icon: <IoIosText /> },
  { id: 3, title: 'Video', icon: <IoMdVideocam /> },
];

const buttonsItem = [
  { id: 1, buttonsName: 'Snooze 2 Weeks', buttonIcon: <MdOutlineSnooze /> },
  { id: 2, buttonsName: 'Archive', buttonIcon: <FaBoxArchive /> },
  { id: 3, buttonsName: 'Delete', buttonIcon: <MdDelete /> },
];

const FrindesDetails = () => {
  const { id } = useParams();
  const { data, handleCall } = useContext(FriendsContext);

  const singleFriend = data.find(friend => friend.id === Number(id));

  if (!singleFriend) {
    return (
      <div className="w-40 mx-auto flex flex-col items-center justify-center py-8">
        <GridLoader />
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-base-200">
      <div className="w-10/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* col-1 */}
          <div className="space-y-3">
            <div className=" col-span-1 bg-white p-4 rounded-2xl shadow-2xs space-y-3 flex flex-col items-center justify-center">
              {/* Image */}
              <img
                src={singleFriend.picture}
                alt={singleFriend.name}
                className="w-16 h-16 rounded-full object-cover mx-auto"
              />

              {/* Name */}
              <h1 className="font-bold text-xl">{singleFriend.name}</h1>

              <div className="flex items-center gap-4">
                {singleFriend.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-green-100 font-semibold text-green-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status */}
              <span
                className={`px-4 py-1 text-xs font-semibold rounded-full ${
                  singleFriend.status === 'overdue'
                    ? 'bg-red-500 text-white'
                    : singleFriend.status === 'almost due'
                      ? 'bg-yellow-400 text-white'
                      : 'bg-green-600 text-white'
                }`}
              >
                {singleFriend.status}
              </span>
            </div>

            {/*  buttons*/}
            <div className="space-y-2.5">
              {buttonsItem.map(btn => (
                <button
                  key={btn.id}
                  className="btn w-full flex items-center justify-center"
                >
                  <span
                    className={`${btn.buttonsName === 'Delete' ? 'text-red-500' : ''}`}
                  >
                    {' '}
                    {btn.buttonIcon}
                  </span>
                  <h1 className="text-xl text-neutral-500 font-bold">
                    {btn.buttonsName}
                  </h1>
                </button>
              ))}
            </div>
          </div>

          {/* col-2 */}

          <div className="col-span-3 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* grid-1 */}
              <div className="bg-white shadow-2xs p-4 rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">
                  {' '}
                  {singleFriend.days_since_contact}{' '}
                </h1>
                <span className="text-lg font-semibold">
                  Days Since Contact
                </span>
              </div>
              {/* grid-2 */}
              <div className="bg-white shadow-2xs p-4 rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold"> {singleFriend.goal} </h1>
                <span className="text-lg font-semibold"> Goal (Day)</span>
              </div>
              {/* grid-3 */}
              <div className="bg-white shadow-2xs p-4 rounded-2xl flex flex-col items-center justify-center">
                <h1 className="text-2xl font-bold">
                  {' '}
                  {singleFriend.next_due_date}{' '}
                </h1>
                <span className="text-lg font-semibold"> Next Due</span>
              </div>
            </div>
            {/* Relationship Goal */}

            <div className="  bg-white shadow-2xs p-4 rounded-2xl flex items-center justify-between space-y-3">
              <div>
                <h1 className="text-2xl font-semibold">ReleationShip Goal</h1>
                <span>Contact Every {singleFriend.goal} days</span>
              </div>
              <div>
                <button className="btn">Edit</button>
              </div>
            </div>

            {/* Call div */}

            <div className="bg-white p-4 space-y-3 rounded-2xl">
              <h1 className="text-2xl font-bold text-neutral-500">
                {' '}
                Quick Cheek-In{' '}
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {girdItem.map(item => (
                  <div
                    onClick={() => handleCall(item.id)}
                    key={item.id}
                    className="bg-base-300 p-4 rounded-2xl cursor-pointer flex flex-col items-center justify-center"
                  >
                    <div className="text-3xl text-neutral-500">{item.icon}</div>
                    <h1 className="text-2xl font-bold text-neutral-600">
                      {item.title}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
            <History />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrindesDetails;
