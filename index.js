const express = require('express');
const app = express();
app.use(express.static('./'));
const cors = require('cors');
app.use(cors());

app.get('/test', (req, res) => {
  res.status(200).send(JSON.stringify('SERVER SAYS OK'))
})

const port = 3030;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

