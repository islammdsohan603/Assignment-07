import { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [clickdId, setClickId] = useState([]);
  const [collId, setCollId] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const result = await res.json();
      setData(result);
    };
    fetchData();
  }, []);

  const handleCardData = id => {
    if (clickdId.includes(id)) {
      (new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
        toast.error('Already Clicked!'));
      return false;
    } else {
      toast.success('Success!');
      setClickId([...clickdId, id]);
      return true;
    }
  };

  const handleCall = (item, friendName, friendPicture) => {
    const newInteraction = {
      id: Date.now(),
      type: item.title,
      description: item.desc,
      name: friendName,
      picture: friendPicture,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
    };
    setCollId(prev => [newInteraction, ...prev]);
    toast.success('Successfully!');
  };

  return (
    <FriendsContext.Provider
      value={{ data, handleCardData, handleCall, collId }}
    >
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
