const express = require('express');
const app = express();
app.use(express.static('./'));

app.get('http://52.90.22.200/test', (req, res) => {
  res.status(200).send(JSON.stringify('SERVER SAYS OK'))
})

const port = 3030;
app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`);
});

