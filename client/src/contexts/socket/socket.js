import { createContext } from 'react';
import socketIo from 'socket.io-client';
import { Socket_Url } from '../../default';

export const socket = socketIo.connect(Socket_Url);
export const SocketContext = createContext();

const SocketProvider = ({ children }) => {
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;
