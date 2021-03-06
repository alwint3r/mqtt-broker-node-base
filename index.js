'use strict';

const mosca = require(`mosca`);
const config = require(`./config`);
const logger = require(`./logger`);

const moscaConfig = config.mosca;
const server = new mosca.Server(moscaConfig);

function onServerReady() {
  logger.log(`MQTT Broker is up and running on port ${moscaConfig.port}`);
}

function onClientConnected(client) {
  logger.log(`Client`, client.id, `is connected`);
}

function onClientDisconnected(client) {
  logger.log(`Client`, client.id, `is disconnected`);
}

function onError(error) {
  logger.err(error);
}

server.on(`ready`, onServerReady);
server.on(`clientConnected`, onClientConnected);
server.on(`clientDisconnected`, onClientDisconnected);
server.on(`error`, onError);

process.on(`uncaughtException`, (exception) => {
  logger.err(`uncaughtException`, exception);
});
