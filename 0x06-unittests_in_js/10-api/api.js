const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;
  res.send(`Payment methods for cart ${cartId}`);
});

app.get('/available_payments', (req, res) => {
  res.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    },
  });
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

app.listen(port, () => {
  console.log(`API available on http://localhost:${port}`);
});

module.exports = app;
