import { gql } from 'apollo-server-express';

import UserSchema from './User';
import ProjectSchema from './Project';
import BranchSchema from './Branch';
import TestSchema from './Test';
import QueueSchema from './Queue';
import RepositoryFileSchema from './File';

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
  ${ProjectSchema}
  ${BranchSchema}
  ${TestSchema}
  ${QueueSchema}
  ${RepositoryFileSchema}
`;

export default schema;
