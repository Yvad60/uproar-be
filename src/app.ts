import express, { Application, Request, Response } from 'express';

const app: Application = express();
const PORT: number | string = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the API');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${PORT}`);
});
