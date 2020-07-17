import gql from "graphql-tag";

const userPayload = `
  id
  username
  email
  fullName
  createdAt
  updatedAt
`;

export const GET_AUTH_USER = gql`
  query {
    getAuthUser {
      ${userPayload}
    }
  }
`;

export const SIGN_IN = gql`
  mutation($input: SignInInput!) {
    signIn(input: $input) {
      token
    }
  }
`;

export const SIGN_UP = gql`
  mutation($input: SignUpInput!) {
    signUp(input: $input) {
      token
    }
  }
`;
