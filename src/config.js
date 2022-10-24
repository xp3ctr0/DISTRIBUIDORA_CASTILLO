import {config} from "dotenv";

config();

export default {
    host: process.env.HOST || "",
    client: process.env.CLIENT || "",
};