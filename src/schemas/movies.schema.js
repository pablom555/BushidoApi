const { buildSchema } = require('graphql');

const moviesSchema = buildSchema(`
  type Movie {
    id: Int
    title: String
    release_date: String
    popularity: Float
    poster_path: String
  }

  type MovieDetail {
    id: Int
    title: String
    release_date: String
    overview: String
    popularity: Float
    poster_path: String
    actors: [Actor]
  }  

  type Actor {
    id: ID!
    name: String!
    character: String!
    profilePicture: String
  }

  type Popular {
    movies: [Movie]
    totalPages: Int
  }

  type Query {
    popularMovies(page: Int): Popular
    searchMovies(term: String!): [Movie]
    movieDetails(id: Int!): MovieDetail
  }

`);

module.exports = moviesSchema;
