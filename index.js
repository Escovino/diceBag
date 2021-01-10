import express from 'express';
import dice from './routers/dice.js';
//import transactionRouter from './routers/transaction.js';

const app = express();
app.use(express.json());

app.use('/dice', dice);
//app.use('/transaction', transactionRouter);

app.listen(3000, async () => {
  try {
    console.log('API Started!');
  } catch (error) {
    console.log(error);
  }
});
