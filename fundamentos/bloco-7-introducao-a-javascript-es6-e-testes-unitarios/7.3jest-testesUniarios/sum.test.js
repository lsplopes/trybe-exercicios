const sum = require('./sum');

describe('Testes da função sum', () => {
  it('Somando 4 + 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
})