const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
const morgan = require("morgan");
const { StatusCodes } = require('http-status-codes');

const { connectDb } = require("./utils/db");

const stockRoutes = require('./routes/stockRoutes');

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: ["http://localhost:3001"],
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
}

app.use(cors(corsOptions));

app.use(morgan('dev'))

const PORT = process.env.PORT || 3000

app.use(express.json());

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

connectDb();

app.get("/", (req, res) => {
  return res.status(StatusCodes.OK).json({ message: "Server is up and running!" })
});

app.use("/stock", stockRoutes);

app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));