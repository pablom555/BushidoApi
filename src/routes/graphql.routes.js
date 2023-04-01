const { Router } = require('express');
const { graphqlHTTP } = require('express-graphql');

const moviesSchema = require('../schemas/movies.schema');
const moviesResolvers = require('../resolvers/movie.resolver');

const { authenticateUser } = require('../services/auth.service');

const graphqlRoutes = Router();

graphqlRoutes.use('/', authenticateUser, graphqlHTTP({
  schema: moviesSchema,
  rootValue: moviesResolvers,
  graphiql: true,

}));

module.exports = graphqlRoutes;
