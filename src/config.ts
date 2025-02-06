import type {Proxy} from './util/model';

export let PORT = 443; // 端口

export let PROXY_CODE_SECRET = 'Easy-Reverse-Proxy'; // 代理码密钥
// 代理
export let PROXIES: Proxy[] = [
    {
        domain: "https://arden.moe",
        url: "https://blog.wtf.day/",
        enable: true
    }
];
