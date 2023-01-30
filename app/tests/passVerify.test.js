const passUtils = require('../functions/pass.utils.js');

test('senha sem regras', () => {
    expect(passUtils.verify('123456', [])).toEqual({ verify: true, noMatch: [] });
})

test('senha com regra de tamanho', () => {
    expect(passUtils.verify('123456', [{ rule: 'minDigit', value: 6 }])).toEqual({ verify: true, noMatch: [] });
    expect(passUtils.verify('123456', [{ rule: 'minDigit', value: 7 }])).toEqual({ verify: false, noMatch: ['minDigit'] });
})

test('senha com de repetição', () => {
    expect(passUtils.verify('123456', [{ rule: 'noRepeted', value: 6 }, { rule: 'noRepeted', value: 0 }])).toEqual({ verify: true, noMatch: [] });
    expect(passUtils.verify('11234566', [{ rule: 'noRepeted', value: 6 }, { rule: 'noRepeted', value: 0 }])).toEqual({ verify: false, noMatch: ['noRepeted'] });
})

test('senha com caracteres especiais', () => {
    expect(passUtils.verify('123456', [{ rule: 'minSpecialChars', value: 0 }])).toEqual({ verify: true, noMatch: [] });
    expect(passUtils.verify('=._$123456@#', [{ rule: 'minSpecialChars', value: 6 }])).toEqual({ verify: true, noMatch: [] });
})

test('senha com letras maiúsculas', () => {
    expect(passUtils.verify('123456', [{ rule: 'minUppercase', value: 1 }])).toEqual({ verify: false, noMatch: ['minUppercase'] });
    expect(passUtils.verify('ABC123456', [{ rule: 'minUppercase', value: 3 }])).toEqual({ verify: true, noMatch: [] });
    expect(passUtils.verify('ABC123456', [{ rule: 'minUppercase', value: 4 }])).toEqual({ verify: false, noMatch: ['minUppercase'] });
})

test('senha com letras minúsculas', () => {
    expect(passUtils.verify('123456', [{ rule: 'minLowercase', value: 1 }])).toEqual({ verify: false, noMatch: ['minLowercase'] });
    expect(passUtils.verify('abc123456', [{ rule: 'minLowercase', value: 3 }])).toEqual({ verify: true, noMatch: [] });
    expect(passUtils.verify('abc123456', [{ rule: 'minLowercase', value: 4 }])).toEqual({ verify: false, noMatch: ['minLowercase'] });
})