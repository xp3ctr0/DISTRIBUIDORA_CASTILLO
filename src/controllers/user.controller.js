import config from "./../config";
import {logPlugin} from "@babel/preset-env/lib/debug";

const https = require('node:https');

const getUsers = async (req, res) => {
    const url = config.user;
    const param = req.params.id;
    let endpoint = url + '?id=*';
    if (param != undefined) {
        endpoint = url + '?id=' + param;
    }
    https.get(endpoint, response => {
        response.on('data', (r) => {
            res.json(JSON.parse(r));
        });
    })
}

const insertUser = async (req, res) => {
    const url = config.user;
    const options = {
        method: 'POST',
        body: JSON.stringify(req.body)
    };
    console.log(url);
    console.warn(req.body);
    const postResponse = https.request(url, options, response => {
        return response.on('data', (d) => {
            console.log(JSON.parse(d))
            res.json(JSON.parse(d));
        });
    });
    postResponse.write(options.body);
    postResponse.end();
}

const updateUser = async (req, res) => {
    const url = config.user;
    const options = {
        method: 'PUT',
        body: JSON.stringify(req.body)
    };
    const putResponse = https.request(url, options, response => {
        return response.on('data', (d) => {
            res.json(JSON.parse(d));
        });
    });
    putResponse.write(options.body);
    putResponse.end();
}

export const methods = {getUsers, insertUser, updateUser};