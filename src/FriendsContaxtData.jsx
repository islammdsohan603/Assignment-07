import { createContext, useEffect, useState } from 'react';

export const FriendsContext = createContext();

const FriendsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/data.json');
      const result = await res.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleCardData = id => {
    console.log(id);

    const isExistCard = data.find(friend => friend.id === id);

    if (isExistCard) {
      alert('data is alrady ');
    } else {
      alert('succusfull');
    }
  };

  return (
    <FriendsContext.Provider value={{ data, handleCardData }}>
      {children}
    </FriendsContext.Provider>
  );
};

export default FriendsProvider;
