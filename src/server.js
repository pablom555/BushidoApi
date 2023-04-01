const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');

const apiRoutes = require('./routes');
const graphqlRoutes = require('./routes/graphql.routes');

dotenv.config();

const app = express();

const { PORT } = process.env;

app.use(morgan('dev'));

app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', apiRoutes);
app.use('/graphql/v1', graphqlRoutes);

console.log('Starting Server...');

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
