export const LOGIN_QUERY = `
  query Login($email: String!, $password: String!){
    login(email: $email, password: $password){
      token
      tokenExpiration
      currentUser {
        _id
        email
        firstName
        lastName
        date
        role
      }
    }
  }
`;

export const ME_QUERY = `
{
	me {
    _id
    email
    firstName
    lastName
    date
  }
}
`;

export const ME_ACTIONS_QUERY = `
query meActions($authorId: ID!){
  meActions(authorId: $authorId) {
    _id,
    date,
    title,
    description
    approved
    author {
      _id
      firstName
    }
  }
}
`;
