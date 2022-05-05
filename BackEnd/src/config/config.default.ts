import { MidwayConfig } from '@midwayjs/core';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: '1651632777192_226',
  koa: {
    port: 7001,
  },
  jwt: {
    secret: 'mk123456', // fs.readFileSync('xxxxx.key')
    expiresIn: '1d'   // https://github.com/vercel/ms
  },
  orm: {
    /**
     * 单数据库实例
     */
    type: 'mysql',
    host: '114.116.79.120',
    port: 3306,
    username: 'root',
    password: 'suanzi',
    database: 'mkmobile',     //mkmobile
    synchronize: true,     // 如果第一次使用，不存在表，有同步的需求可以写 true
    logging: false,
  },
  cors: {
    credentials: true,
  },
} as MidwayConfig;
