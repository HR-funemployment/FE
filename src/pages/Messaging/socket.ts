// src/socket.js
import { io } from 'socket.io-client';

const URL = 'http://localhost:3001'; // Replace with your server's URL and port
const socket = io(URL, { autoConnect: false });

export default socket;
