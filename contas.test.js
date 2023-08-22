const contas = require('./contas');

test("soma 2 + 5 esperado 7 como reusultado",()=>{
    expect(contas.soma(2,5)).toBe(7)
})

test("subtracao 5 - 2 esperado 3 como reusultado",()=>{
    expect(contas.subtracao(5,2)).toBe(3)
})

test("multiplicação 2 * 5 esperado 10 como reusultado",()=>{
    expect(contas.multiplicacao(2,5)).toBe(10)
})

test("divisao 4 / 2 esperado 2 como reusultado",()=>{
    expect(contas.divisao(4,2)).toBe(2)
})