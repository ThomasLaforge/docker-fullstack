import express from 'express';
import cors from 'cors';

let PORT: number = 1992; 

const app = express();
app.use(cors());
app.use(express.json());

app.get('/server/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
})

app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.json({ message: `Hello ${name}!` });
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
});