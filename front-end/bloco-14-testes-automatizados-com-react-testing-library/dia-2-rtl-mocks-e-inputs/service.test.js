const service = require('./service');

test('1 - testa se o retorno é recebido e se a função é chamada', () => {
  service.retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
  expect(service.retornaNumeroAleatorio()).toBe(10);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
});

test('2 - testa divisao', () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);
  expect(service.retornaNumeroAleatorio(20, 2)).toBe(10);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(20, 2);
})

test('3 - altera a função inicial 2 vezes e testa as alterações', () => {
  service.retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);
  expect(service.retornaNumeroAleatorio(2, 2, 2)).toBe(8);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(2, 2, 2);

  service.retornaNumeroAleatorio.mockReset();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledTimes(0);
  service.retornaNumeroAleatorio = jest.fn().mockImplementationOnce((a) => 2 * a );
  expect(service.retornaNumeroAleatorio(5)).toBe(10);
  expect(service.retornaNumeroAleatorio).toHaveBeenCalled();
  expect(service.retornaNumeroAleatorio).toHaveBeenCalledWith(5);
})

describe('4 - cria e testa 3 funções', () => {
  test('4.1 - transforma get bigger em get smaller', () => {
    service.getBigger = jest.spyOn(service, "getBigger").mockImplementation((string) => string.toLowerCase());
    expect(service.getBigger('CAVALO')).toBe('cavalo');
    expect(service.getBigger).toHaveBeenCalled();
    expect(service.getBigger).toHaveBeenCalledWith('CAVALO');
  })
  test('4.2 - transforma getFirst em get Last', () => {
    service.getFirst = jest.spyOn(service, "getFirst").mockImplementationOnce((string) => string.substr(-1));
    expect(service.getFirst('cavalo')).toBe('o');
    expect(service.getFirst).toHaveBeenCalled();
    expect(service.getFirst).toHaveBeenCalledWith('cavalo');
  })
  test('4.3 - transforma concatStrings para 3 strings', () => {
    service.concatStrings = jest.spyOn(service, "concatStrings").mockImplementationOnce((string1, string2, string3) => string1+string2+string3);
    expect(service.concatStrings('Cavalo ', 'Cachorro ', 'Gato')).toBe('Cavalo Cachorro Gato');
    expect(service.concatStrings).toHaveBeenCalled();
    expect(service.concatStrings).toHaveBeenCalledWith('Cavalo ', 'Cachorro ', 'Gato');
  })
  test('4.4 - confirma se todas voltaram ao normal', () => {
    service.getBigger.mockRestore();
    expect(service.getBigger('cavalo')).toBe('CAVALO');
    
    expect(service.getFirst('cavalo')).toBe('c');

    expect(service.concatStrings('Cavalo ', 'Cachorro')).toBe('Cavalo Cachorro');
  })

  describe("5 - testando a requisição", () => {
    service.fetchDog = jest.fn();
    afterEach(service.fetchDog.mockReset);
  
    test("testando requisição caso a promise resolva", async () => {
      service.fetchDog.mockResolvedValue("request success");
  
      service.fetchDog();
      expect(service.fetchDog).toHaveBeenCalled();
      expect(service.fetchDog).toHaveBeenCalledTimes(1);
      await expect(service.fetchDog()).resolves.toBe("request success");
      expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });
  
    test("testando requisição caso a promise seja rejeitada", async () => {
      service.fetchDog.mockRejectedValue("request failed");
  
      expect(service.fetchDog).toHaveBeenCalledTimes(0);
      await expect(service.fetchDog()).rejects.toMatch("request failed");
      expect(service.fetchDog).toHaveBeenCalledTimes(1);
    });
  });
}) 
