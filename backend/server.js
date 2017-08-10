const express = require('express');
const app = express();

// Require all groups of routes here
const authRoutes = require('./routes/auth.js')

app.use(express.static('build'));

// app.use all routes here
app.use('/auth', authRoutes)


app.listen(3000, () => {
  console.log('Server for React Todo App listening on port 3000!')
});
