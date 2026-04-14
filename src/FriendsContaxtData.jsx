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
      toast.error('Already Clicked!');
      return false;
    } else {
      toast.success('Success!');
      setClickId([...clickdId, id]);
      return true;
    }
  };

  const handleCall = id => {
    if (collId.includes(id)) {
      toast.error('Already Clicked!');
      return false;
    } else {
      toast.success('SuccessFully');
      setCollId([...clickdId, id]);
      return true;
    }
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
