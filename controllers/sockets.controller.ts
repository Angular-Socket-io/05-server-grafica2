import { Socket } from 'socket.io';
import socketIO from 'socket.io';



export const socketscontroller = (cliente:Socket,io: socketIO.Server) => {
    console.log('Cliente Conectado');

    cliente.on('disconnect', () =>{
        console.log('Cliente Desconectado');
    });

    
}




