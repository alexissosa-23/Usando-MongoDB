const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/my_first_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err));

const studentRoutes = require('./routes/student.routes');
app.use('/api', studentRoutes);

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});
