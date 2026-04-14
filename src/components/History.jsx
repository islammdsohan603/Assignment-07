import { useContext } from 'react';
import { FriendsContext } from '../FriendsContaxtData';
import { IoCall } from 'react-icons/io5';
import { IoIosText } from 'react-icons/io';
import { IoMdVideocam } from 'react-icons/io';
import { FaHistory } from 'react-icons/fa';

const getIcon = type => {
  if (type === 'Call') return <IoCall />;
  if (type === 'Text') return <IoIosText />;
  if (type === 'Video') return <IoMdVideocam />;
};

const History = () => {
  const { collId } = useContext(FriendsContext);

  return (
    <div className="my-4 bg-white shadow-2xs p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg font-bold text-neutral-500">
          Recent Interactions
        </h1>
        <button className="btn flex items-center gap-2">
          <FaHistory /> Full History
        </button>
      </div>
      <div className="mt-4 space-y-4">
        {collId.map(item => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b pb-3"
          >
            {/* Left */}
            <div className="flex items-center gap-3">
              <div className="text-xl text-gray-500">{getIcon(item.type)}</div>

              <div>
                <h1 className="font-semibold">{item.type}</h1>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>

            {/* Right */}
            <span className="text-sm text-gray-400">{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
