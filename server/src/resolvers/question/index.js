import createQuestion from './createQuestion';
import getQuestions from './getQuestions';

const Mutation = {
  createQuestion,
};

const Query = {
  getQuestions,
};

export default {
  Mutation,
  Query,
};
