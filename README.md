# MovieAPI

MovieAPI is a back-end API built with Node.js and GraphQL that fetches data from The Movie Database API (TMDb). This API allows to get information about movies and series, as well as user authentication and authorization.

## Features

- Query for popular movies
- Query to search for movies by title
- Query for movie details
- User authentication with JWT
- Authorizing users to access certain queries

## Requirements

- ode.js v14 or higher
- TMDb API Key (https://www.themoviedb.org/settings/api)

## Installation

1. Clone the repository: `git clone https://git@github.com:pablom555/BushidoApi.git`.
2. Install the dependencies: `npm install`.
3. Create a `.env` file and configure the following information:

PORT=3000
TMDB_API_KEY=<your TMDb API key>
SECRET_KEY=<a secret key for generating JWT tokens>

4. Start the application: `npm start`.
5. Access to the API through `http://localhost:3000/api/v1/movies/`.
6. Access to the GraphQLAPI through `http://localhost:3000/graphql/v1`.

## Queries available

### Popular movies

```graphql
query {
  popularMovies(page: 1) {
    movies {
      id
      popularity
      poster_path
      release_date
      title
    }
      totalPages
  }
}
```

### Search Movies

```graphql
query {
  searchMovies(term: "Avatar") {
    id
    title
    poster_path
  }
}
```

### Details of a movie
```graphql
query {
  movieDetails(id: 19995 ) {
    id
    overview
    popularity
    actors {
      id
      name
    }
  }
}
```

### User login

`http://localhost:3000/api/v1/auth/login`

In body you must send the following data

```json
{
  username: 'testUser',
  password: 'testPassword',
}
```

### Authorization

The API uses JWT tokens for authorization. To access queries that require authorization, it is necessary to include the token in the Authorization header as follows:

Authorization: Bearer <tu token JWT>