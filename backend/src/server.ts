import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
