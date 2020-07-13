import Queue from 'bull';
import { REDIS } from '../../../config';
const REDIS_URL = REDIS.url;
const Redis = require('ioredis');
const client = new Redis(REDIS_URL);
const subscriber = new Redis(REDIS_URL);

const opts = {
  createClient: function (type) {
    switch (type) {
      case 'client':
        return client;
      case 'subscriber':
        return subscriber;
      default:
        return new Redis(REDIS_URL);
    }
  },
};

class RedisQueue {
  constructor(name) {
    this.queue = new Queue(name, opts);
  }

  async putJobToQueue(data) {
    try {
      await this.queue.add(data);
      return 'Put job success';
    } catch (err) {
      throw new Error(`Error put job to queue, ${err}`);
    }
  }

  async getJobCount() {
    try {
      return await this.queue.getJobCounts();
    } catch (err) {
      throw new Error(`Err get job count ${err}`);
    }
  }
}

export default new RedisQueue('jobQueue');
