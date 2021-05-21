import { gql } from "@apollo/client";

export const CREATEU = gql`
  mutation createCard($name: String!, $genre: String!, $year: String!) {
    createCard(name: $name, genre: $genre, year: $year){
      name
      genre
      year
    }
  }
`;

export const DELETEU = gql`
mutation deleteCard($id:ID!){
  deleteCard(id:$id)
}
`