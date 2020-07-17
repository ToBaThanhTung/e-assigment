import { gql } from 'apollo-server-express';

import UserSchema from './User';
import QuestionSchema from './Question';

const schema = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
  type Subscription {
    _empty: String
  }
  ${UserSchema}
  ${QuestionSchema}
`;

export default schema;
