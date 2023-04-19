// server/index.js
import express from 'express';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST']
};
app.use(cors(corsOptions));
const PORT = process.env.PORT || 3001;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
const io = new Server(server, {cors: corsOptions});

app.get('/', (req: any, res: any) => {
  res.send('Socket.IO server is running');
});

io.on('connection', (socket: any) => {
  console.log('A user connected');

  socket.on('send-message', (message: any) => {
    console.log('Message received:', message);
    io.emit('message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});


