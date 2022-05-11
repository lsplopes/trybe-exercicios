const { sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate } = require('./sum');

//EXERCICIO 1

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

//EXERCICIO 2

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

// EXERCICIO 3

describe('Testes da função myFizzBuzz', () => {

  it('Verifica se uma chamada com um número divisível por 3 e 5  o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Verifica se uma chamada com um número divisível apenas por 3 o retorno é o esperado', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  })

  it('Verifica se uma chamada com um número divisível apenas por 5 o retorno é o esperado', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  })

  it('Verifica se uma chamada com um parametro que não é um numero o retorno é o esperado', () => {
    expect(myFizzBuzz('vaca')).toBe(false);
  })
});

// EXERCICIO 4

describe('Testes das funções encode e decode', () => {
  //requisito1
  it('Verifica se encode e decode são funções', () => {
    expect(typeof encode).toBe('function');
    expect(typeof decode).toBe('function');
  });
  //requisito2
  it ('verifica se Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  })
  //requisito3
  it ('verifica se Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  })
  //requisito4
  it ('verifica se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('6')).toBe('6');
    expect(encode('g')).toBe('g');
  })
  //requisito5
  it ('verifica se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
    expect(encode('Lucas').length).toEqual(5);
    expect(decode('12345').length).toEqual(5);
  })
})

//EXERCICIO 5

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//EXERCICIO 6

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});
