"use strict";
exports.__esModule = true;
var log4js = require("log4js");
log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: 'app.log' }
    },
    categories: {
        "default": { appenders: ['out', 'app'], level: 'debug' }
    }
});
var logger = log4js.getLogger('default');
logger.debug('Some debug messages');
logger.info('Some info messages');
logger.warn('Some warning messages');
logger.error('Some error messages');
logger.fatal('Some fatal messages');
exports["default"] = logger;
