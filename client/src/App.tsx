import React, { useEffect, useState } from 'react'
import axios from 'axios'

interface MessageType {
  userName: string,
  description: string,
  duration: number,
  date: Date
}

const App = () => {
  const [message, setMessage] = useState<MessageType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/getOne');
      const data = response.data;
      console.log(data)
      setMessage(data);
      setIsLoading(false);
    } catch (error) {
      setMessage(null);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='py-4 px-16 flex flex-col justify-between bg-slate-900 text-white min-h-screen'>
      <p> Header </p>
      <div>
        {isLoading ? (
          'Loading...'
        ) : message ? (
          <>
            <p> { message.userName } </p>
            <p> { message.description } </p>
            <p> { message.duration } </p>
            <p> { String(message.date) } </p>
          </>
        ) : (
          'Error fetching data.'
        )}
      </div>
      <p> Footer </p>
    </div>
  );
}

export default App;
