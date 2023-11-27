const express = require("express");
const app = express();

const port = process.env.PORT || 6789;

app.listen(port, () => console.log(`[SERVER] is runinning on port ${port}`));
