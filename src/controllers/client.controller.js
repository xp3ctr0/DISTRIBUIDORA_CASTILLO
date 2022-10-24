import config from "./../config";
import {logPlugin} from "@babel/preset-env/lib/debug";
const https = require('node:https');

const getClients = async (req, res) => {
    const url = config.client;
    const param = req.params.id;
    let endpoint = url;
    if(param != undefined){
        endpoint = url+'?id='+param;
    }
    https.get(endpoint, response => {
        response.on('data', (r) => {
            res.json(JSON.parse(r));
        });
    })
}

const insertClients = async (req, res) => {
    console.log(req.body);
//    res.status(201).send('Created Client');
    const url = config.client;
    const options = {
        method: 'POST',
        body: JSON.stringify(req.body)
    };
//
//    res.send("SI SERVE")
    https.request(url,options, response => {

//        console.log('statusCode:', response.statusCode);
//        console.log('headers:', response.headers);
        console.log('response:', response);

        response.on('data', (d) => {
            res.json(JSON.parse(d));
        });
    });
}

export const methods = {getClients,insertClients};