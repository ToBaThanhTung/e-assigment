import signUp from './signUp';
import signIn from './signIn';
import getAuthUser from './getAuthUser';
const Mutation = {
  signUp,
  signIn,
};

const Query = {
  getAuthUser,
};

export default {
  Mutation,
  Query,
};
