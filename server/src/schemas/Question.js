import { gql } from 'apollo-server-express';

/**
 * User schema
 */
const UserSchema = gql`
  # ---------------------------------------------------------
  # Model Objects
  # ---------------------------------------------------------
  type Question {
    id: ID!
    content: String
    answer: String
    type: String
    tag: String
    dificulty: String
  }


  # ---------------------------------------------------------
  # Input Objects
  # ---------------------------------------------------------

  input createQuestionInput {
  }

  # ---------------------------------------------------------
  # Return Payloads
  # ---------------------------------------------------------
  type QuestionPayload {
    id: ID!
    content: String
    answer: String
    type: String
    tag: String
    dificulty: String
  }

  type QuestionsPayload {
    questions: [QuestionPayload]
    count: number
  }
  


  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {

    # Gets user by username or by id
    getUser(type: String, id: ID): UserPayload


    # Gets all users
    getQuestion(userId: String!, skip: Int, limit: Int): UsersPayload
  }

  # ---------------------------------------------------------
  # Mutations
  # ---------------------------------------------------------
  extend type Mutation {
    # Request gitlab token
    createQuestion(input: createQuestionInput!): QuestionPayload
  }
`;

export default UserSchema;
