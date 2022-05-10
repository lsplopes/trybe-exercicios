const { sum, myRemove } = require('./sum');

describe('Testes da função sum', () => {

  it('Somando 4 + 5 igual a 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('Somando 0 + 0 igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('Lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => sum(4, "5")).toThrowError();
  });
  
  it('Testa se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
})

describe('Testes da função myRemove', () => {

  it('Testa se o array [1, 2, 3, 4] retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })

  it('Testa se o array [1, 2, 3, 4] não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  })

  it('Testa se o array [1, 2, 3, 4] retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});