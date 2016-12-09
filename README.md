MQTT Broker Base
====================

Base app for creating MQTT broker on top of mosca.

## Install dependencies

```sh
npm install
```

## Running the server

**Using default config file**
```sh
npm start
```

**Using custom config file**
```sh
APPCONFIG=dev npm start
```

where `dev` is file `dev.js` inside `config/` directory.

**Debug log enabled**
```sh
DEBUG=mqtt-broker-base,mqtt-broker-base:error npm start
```
