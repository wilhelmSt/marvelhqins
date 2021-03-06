import axios from 'axios';
import md5 from 'md5';


const publicKey = '89b8d1890bded8e9d37b19288a4ea4fe';
const privateKey = 'c5f280843fdbfcd34ad8031aae72bb6a018feaa1';

const ts = Number(new Date());
const hash = md5(ts + privateKey + publicKey);


const api = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/',
    params: {
        ts,
        apikey: publicKey,
        hash,
        offset: 3,
        limit: 12,
        headers: {                  
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Authorization", 
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE" ,
            "Content-Type": "application/json;charset=UTF-8"                   
        },
    },
})

export default api;