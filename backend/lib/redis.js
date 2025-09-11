import Redis from "ioredis";
import dotenv from "dotenv";

dotenv.config();



// export const redis = new Redis(process.env.UPSTASH_REDIS_URL);
// console.log("Redis URL:", process.env.UPSTASH_REDIS_URL);


export const redis = new Redis(process.env.UPSTASH_REDIS_URL, {
  tls: {},                 // 👈 enable TLS
  maxRetriesPerRequest: null // 👈 avoid 20 retry limit crash
});

redis.on('connect', () => {
  console.log('Redis connected successfully!');
});

redis.on('error', (err) => {
  console.error('Redis error:', err);
});



