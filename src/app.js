const express = require("express");
const app = express();

const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/courses_db');
console.log(`📚[DATABASE] MongoDB is running 🔥`)
}

const port = process.env.PORT || 6789;

const coursesRouter = require("./routes/courseRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1/courses", coursesRouter);
app.listen(port, () => console.log(`[SERVER] is runinning on port ${port}`));
