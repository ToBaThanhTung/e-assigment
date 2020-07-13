import { Queue } from '../../../models';
import { pubSub } from '../../../utils/apollo-server';
import { NOTIFY_TEST_RUNNING } from '../../../constants/Subscription';

class MongoQueue {

  async constructor(queueName) {
    this.queue = await this.getQueue(queueName);
  }
  // Create queue if queue name does not exist
  async getQueue(queueName, job) {
    try {
      const queue = await Queue.findOne({ queueName });

      if (!queue) {
        queue = await new Queue({
          queueName,
          jobs: [job],
        }).save();
      }

      return queue;
    } catch (err) {
      throw new Error('Error get queue', err);
    }
  }

  // Put a job to queue due to its priority
  enqueue(job, priority = 0) {
    try {
      if (this.size && this.queue.jobs[this.size - 1].priority >= priority) {
        this.queue.jobs.push(job);
        return this.persist();
      }

      const index = lowerBound(
        this.queue.jobs,
        job,
        (a, b) => b.priority - a.priority
      );
      this.queue.jobs.splice(index, 0, element);

      pubSub(NOTIFY_TEST_RUNNING, this.queue.jobs);

      return this.persist();
    } catch (err) {
      throw new Error('Error enqueue', err);
    }
  }

  dequeue() {
    return this.queue.jobs.shift() && this.persist();
  }

  size() {
    return this.queue.jobs.length;
  }

  persist() {
    return this.queue.save();
  }
}

export default MongoQueue;
