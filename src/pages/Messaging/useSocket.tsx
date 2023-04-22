// src/useSocket.js
import React, { useState, useEffect } from 'react';
import socket from './socket';

const useSocket = (shouldConnect: boolean) => {
  useEffect(() => {
    if (shouldConnect) {
      socket.connect();
    } else {
      socket.disconnect();
    }
    return () => {
      socket.disconnect();
    };
  }, [shouldConnect]);
};

export default useSocket;
