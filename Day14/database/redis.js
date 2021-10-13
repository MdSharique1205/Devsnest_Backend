// 1. Redis Store (redis)
// 2. Redis Client (connect-redis)
// 3. Session (express-session)

const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);

const redisClient = redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClient.on("error", (err) => {
  console.error("Could not connect to redis", err);
});

redisClient.on("connect", () => {
  console.log("Connected to Redis");
});

module.exports = {
  redisClient,
  RedisStore,
  session,
};
