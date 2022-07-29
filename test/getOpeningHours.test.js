const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('testa se retorna o objeto hours se não passado nenhum argumento', () => {
    const actual = getOpeningHours();
    const expected = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(actual).toEqual(expected);
  });

  it('joga um erro se o parâmetro de dia for inválido', () => {
    expect(() => getOpeningHours('Dia', '00:00-AM')).toThrowError('The day must be valid. Example: Monday');
  });

  it('joga um erro se o parâmetro de hora ou minuto for inválido', () => {
    expect(() => getOpeningHours('Monday', '14:00-AM')).toThrowError('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Monday', '12:70-AM')).toThrowError('The minutes must be between 0 and 59');
  });

  it('joga um erro se o parâmetro de horário não for número', () => {
    expect(() => getOpeningHours('Monday', 'oito horas')).toThrowError('The hour should represent a number');
  });

  it('joga um erro se o parâmetro de horário não terminar com AM ou PM', () => {
    expect(() => getOpeningHours('Monday', '08:00-ZM')).toThrowError('The abbreviation must be \'AM\' or \'PM\'');
  });

  it('retorna mensagem que diz que está aberto caso os parâmetros batam o horário', () => {
    const actual = getOpeningHours('Tuesday', '09:00-AM');
    const expected = 'The zoo is open';
    expect(actual).toEqual(expected);
  });

  it('retorna mensagem que diz que está fechado caso os parâmetros não batam o horário', () => {
    const actual = getOpeningHours('Tuesday', '07:00-AM');
    const expected = 'The zoo is closed';
    expect(actual).toEqual(expected);
    expect(getOpeningHours('Monday', '09:00-AM')).toEqual(expected);
  });
});
