// src/socket.js
import { io } from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import store, { RootState } from '../../state/store';

const currentState: RootState = store.getState();
const userData = currentState.user;


const URL = 'http://localhost:3001'; // Replace with your server's URL and port
// const { user } = useSelector((state) => state.user);
// let userId = 'try'
export const socket = io(URL, { autoConnect: false, query: {customId: store.getState().user.user} });
// const socket = io(URL, { autoConnect: false });

// export const sendDM = (recipient: string, message: string) => {
//   socket.emit('sendDM', { recipient, message });
// };

