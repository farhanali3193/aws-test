const express = require('express');
const app = express();
app.use(express.static('./'));

const port = 3030;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});