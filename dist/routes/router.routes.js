"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var server_models_1 = require("../models/server.models");
var grafica_1 = require("../classes/grafica");
var router = express_1.Router();
var grafica = new grafica_1.Grafica;
router.get('/grafica', function (req, res) {
    var data = grafica.getDataGrafica();
    res.json({
        ok: true,
        data: data
    });
});
router.post('/grafica', function (req, res) {
    var numPregunta = req.body.pregunta;
    var valor = Number(req.body.valor);
    var payload = { numPregunta: numPregunta, valor: valor };
    var server = server_models_1.Server.instance;
    grafica.incrementarValor(numPregunta, valor);
    var data = grafica.getDataGrafica();
    server.io.emit('cambiar-grafica', data);
    res.json({
        ok: true,
        data: data
    });
});
exports.default = router;
