import {gql} from '@apollo/client'

 export const LOADU = gql`
 query {
     getAllCard {
         id
         name
         genre
         year
     }
 }`