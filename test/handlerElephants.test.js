const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('testa se retorna undefined caso não seja passado um parâmetro', () => {
    const actual = handlerElephants();
    const expected = undefined;
    expect(actual).toEqual(expected);
  });

  it('testa se retorna mensagem de parâmetro inválido caso o parâmetro não seja uma string', () => {
    const actual = handlerElephants(1);
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(actual).toEqual(expected);
    expect(handlerElephants(true)).toEqual(expected);
    expect(handlerElephants([])).toEqual(expected);
    expect(handlerElephants({})).toEqual(expected);
  });

  it('testa se retorna o valor da chave caso o parâmetro seja uma chave presente no objeto', () => {
    const actual = handlerElephants('location');
    const expected = 'NW';
    expect(actual).toEqual(expected);
    expect(handlerElephants('popularity')).toEqual(5);
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  it('testa se retorna a quantidade de elefantes caso o parâmetro seja "count"', () => {
    const actual = handlerElephants('count');
    const expected = 4;
    expect(actual).toEqual(expected);
  });

  it('testa se retorna a relação dos nomes dos elefantes caso o parâmetro seja "names"', () => {
    const actual = handlerElephants('names');
    const expected = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(actual).toEqual(expected);
  });

  it('testa se retorna a média de idade dos elefantes caso o parâmetro seja "averageAge"', () => {
    const actual = handlerElephants('averageAge');
    const expected = 10.5;
    expect(actual).toEqual(expected);
  });

  it('testa se retorna null caso o parâmetro não seja uma chave do objeto ou count/names/averageAge', () => {
    const actual = handlerElephants('teste');
    const expected = null;
    expect(actual).toEqual(expected);
  });
});
