const pm2Conf = require('./pm2.config');

pm2Conf.instances = 1;

module.exports = {
    apps: [pm2Conf]
};
