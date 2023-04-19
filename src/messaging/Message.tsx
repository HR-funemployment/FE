// src/components/MyComponent.js
import React, { useState, useEffect } from 'react';
import useSocket from './useSocket';
import socket from './socket';

function Message() {
  const [shouldConnect, setShouldConnect] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useSocket(shouldConnect);

  useEffect(() => {
    socket.on('message', (message: unknown) => {
      setMessages((prevMessages: unknown) => [...prevMessages, message]);
    });

    return () => {
      socket.off('message');
    };
  }, []);

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      socket.emit('send-message', inputMessage);
      setInputMessage('');
    }
  };

  const handleButtonClick = () => {
    setShouldConnect((prevState) => !prevState);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>{shouldConnect ? 'Disconnect' : 'Connect'}</button>
      {shouldConnect && (
        <div>
          <ul>
            {messages.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
          <input
            type='text'
            value={inputMessage}
            onChange={handleInputChange}
            placeholder='Type a message'
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
}

export default Message;
