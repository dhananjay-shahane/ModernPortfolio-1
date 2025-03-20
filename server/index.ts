import express from 'express';
import cors from 'cors';
import routes from './routes';
import { createViteDevServer } from './vite';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Retaining this from original
app.use('/', routes);

app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
});


async function start() {
  if (process.env.NODE_ENV === 'development') {
    const vite = await createViteDevServer();
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`[express] serving on port ${port}`);
  });
}

start().catch(console.error);