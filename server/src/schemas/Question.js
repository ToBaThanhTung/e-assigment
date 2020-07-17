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
    content: String
    answer: String
    type: String
    tag: String
    dificulty: String
    description: String
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
    description: String
    dificulty: String
  }

  type QuestionsPayload {
    questions: [QuestionPayload]
  }

  # ---------------------------------------------------------
  # Queries
  # ---------------------------------------------------------
  extend type Query {
    # Gets user by username or by id
    getQuestion(type: String, id: ID): UserPayload

    # Gets all users
    getQuestions(userId: String, skip: Int, limit: Int): QuestionsPayload
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
