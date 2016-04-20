'use strict';

var mosca = require('mosca');

var configFile = process.env.APPCONFIG || 'index.js';
var config = require('./config/' + (process.env.APPCONFIG || 'index.js' ));
var moscaConfig = config.mosca(mosca);
var server = new mosca.Server(moscaConfig);

server.on('ready', onServerReady);
server.on('clientConnected', onClientConnected);
server.on('clientDisconnected', onClientDisconnected);
server.on('error', onError);

function onServerReady() {
    console.log('MQTT Broker is up and running on port ' + moscaConfig.port);
}

function onClientConnected(client) {
    console.log('Client', client.id, 'is connected');
}

function onClientDisconnected(client) {
    console.log('Client', client.id, 'is disconnected');
}

function onError(error) {
    console.error(error);
}

process.on('uncaughtException', function(exception) {
    console.error('uncaughtException', exception);
});
