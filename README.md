MQTT Broker Base
====================

Base app for creating MQTT broker on top of mosca.

## Running the server

FIrst, install all the dependencies
```sh
npm install
```

Using nodemon
```sh
APPCONFIG=index nodemon server.js
```

or using default configuration file which is `index.js`
```sh
nodemon server.js
```

Using pm2

```sh
pm2 start server.js --name=mqtt-broker
```
