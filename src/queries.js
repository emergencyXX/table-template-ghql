import gql from 'graphql-tag';

export const GET_USERS = gql`
 query users($after:String,$before:String,$first:Int,$last:Int) {
  search(query: "location:Kyiv language:JS", type: USER, first: $first, last:$last, after:$after, before:$before) {
   userCount
   edges {
    cursor
    node {
    ... on User {
     id
     login
     name
     location
     email
     company
     avatarUrl(size:100)
     bio
     bioHTML
     websiteUrl 
     url
     followers(first:10){
      nodes{
        name
      }
     }
     following(first:10){
      nodes{
        name
      }
     } 
     }
    }
   }
  }
 }
 `;