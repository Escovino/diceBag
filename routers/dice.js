import express from 'express';
import Dice from '../class/Dice.js';
const router = express.Router();
const dice = new Dice();

router.get('/roll', async (req, res) => {
  try {
    const value = await dice.read(req.body.value);
    res.status(200).send({ resp: value });
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

export default router;
