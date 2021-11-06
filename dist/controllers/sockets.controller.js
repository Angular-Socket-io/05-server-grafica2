"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.socketscontroller = void 0;
var socketscontroller = function (cliente, io) {
    console.log('Cliente Conectado');
    cliente.on('disconnect', function () {
        console.log('Cliente Desconectado');
    });
};
exports.socketscontroller = socketscontroller;
