import express from 'express';
import bodyParser from 'body-parser';

import personsRoutes from './routes/persons.js';
import activitiesRoutes from './routes/activities.js';
import sportsRoutes from './routes/sports.js';

const app = express();
const PORT = 7000;

app.use(bodyParser.json());
app.use('/persons', personsRoutes);
app.use('/activities', activitiesRoutes);
app.use('/sports', sportsRoutes);

app.get('/', (req, res) => {
  res.send('Hallo from here');
});

app.listen(
    PORT,
    () => console.log(`Server Running on port: http://localhost:${PORT}`),
);