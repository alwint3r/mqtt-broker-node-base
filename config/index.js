'use strict';

module.exports = {
  mosca() {
    return {
      port: 1883,
      http: {
        port: 8888,
        bundle: true,
      },
    };
  },
};
