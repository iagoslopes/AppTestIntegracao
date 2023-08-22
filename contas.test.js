const contas = require('./contas');

test("soma 2 + 5 esperado 7 como reusultado",()=>{
    expect(contas.soma(2,5)).toBe(7)
})