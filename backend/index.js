import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, () => {
  console.log(`server running on port ${port}...`);
});