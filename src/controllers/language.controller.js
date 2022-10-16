import config from "./../config";
const https = require('node:https');

const getLanguages = async (req, res) => {
    const url = config.host;

    https.get(url, response => {
        response.on('data', (r) => {
            res.json(JSON.parse(r));
        });
    })
}

export const methods = {getLanguages};