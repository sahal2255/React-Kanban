const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const userRoutes = require('./Routes/UserRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
console.log('check');
connectDB();

app.use('/', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
