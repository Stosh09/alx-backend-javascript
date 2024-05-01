const request = require('request');
const { expect } = require('chai');
const url = 'http://localhost:7865';

describe('Index Page', () => {
  it('returns status code 200', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns the correct result', (done) => {
    request.get('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});

describe('Cart Page', () => {
  it('returns status code 200 for correct ID', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('returns status code 404 for incorrect ID', (done) => {
    request.get('http://localhost:7865/cart/eric', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('returns the correct result for correct ID', (done) => {
    request.get('http://localhost:7865/cart/123', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 123');
      done();
    });
  });
});

describe('Express app /available_payments', () => {
  it('[Correct status] 200', (done) => {
    request.get(`${url}/available_payments`, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('[Correct result] object', (done) => {
    request.get(`${url}/available_payments`, (error, response, body) => {
      expect(JSON.parse(body)).to.eql({
        payment_methods: { credit_cards: true, paypal: false },
      });
      done();
    });
  });
});

describe('express app POST /login', () => {
  it('[Correct status] 200', (done) => {
    const options = {
      json: { userName: 'Betty' },
    };
    request.post(`${url}/login`, options, (err, httpResponse, body) => {
      expect(httpResponse.statusCode).to.equal(200);
      done();
    });
  });

  it('[Correct result] Welcome Betty', (done) => {
    const options = {
      json: { userName: 'Betty' },
    };
    request.post(`${url}/login`, options, (err, httpResponse, body) => {
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
