const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors')
const PORT = process.env.PORT || 5000;
const userRouter = require('./router/user.router');
const adminRouter = require('./router/admin.router');
const morgan = require('morgan')


mongoose.connect('mongodb://127.0.0.1:27017/srv-userManagement');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use('/api', userRouter);
app.use('/api/admin', adminRouter);
app.get('/*', (req, res) => {
    res.send("<h1>invalid api<h1>");
});

app.listen(PORT, () => console.log(`server connected to ${PORT}`));