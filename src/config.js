import {config} from "dotenv";

config();

export default {
    host: process.env.HOST || "",
};