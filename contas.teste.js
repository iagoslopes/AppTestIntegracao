const { soma } = require('./contas');
const contas = require('/comtas');

test("soma 2 + 5 esperado 7 como reusultado",()=>{
    expect(contas.soma(2,5)).toBe(7)
})