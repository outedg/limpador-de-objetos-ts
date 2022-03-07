import { limparObjeto } from "./limpadorDeObjeto"

const objetoEsperado = {}
test("deve limpar os atributos primitivos que são undefined", () => {
    const objeto = {
        id: undefined
    }
    const objetoLimpo = limparObjeto(objeto)

    expect(objetoLimpo).toEqual(objetoEsperado)
})

test("deve limpar os atributos se tiver atributo filho sem valores", () => {
    const objeto = {
        filho: {}
    }

    const objetoLimpo = limparObjeto(objeto)

    expect(objetoLimpo).toEqual(objetoEsperado)
})

test("deve limpar se tiver filho com array sem dados", () => {
    const objeto = {
        filho: []
    }

    const objetoLimpo = limparObjeto(objeto)

    expect(objetoLimpo).toEqual(objetoEsperado)
})

test("deve limpar somente os itens do array que estão sem valor em seus atributos", () => {
    const objeto = {
        filhos: [{ nome: undefined }, { nome: "vou ali tomar um café" }]
    }
    const objetoEsperado = {
        filhos: [{ nome: "vou ali tomar um café" }]
    }

    const objetoLimpo = limparObjeto(objeto)

    expect(objetoLimpo).toEqual(objetoEsperado)
})

test("deve limpar array do filho se tiver filhos com atributos sem valor", () => {
    const objeto = {
        filhos: [{ nome: undefined }]
    }

    const objetoLimpo = limparObjeto(objeto)
    
    expect(objetoLimpo).toEqual(objetoEsperado)
})

test("deve limpar todos os items dos filhos caso tenho objetos sem atributos", () => {
    const objeto = {
        filhos: [{ nome: undefined }, {}, {}, {}]
    }

    const objetoLimpo = limparObjeto(objeto)

    expect(objetoLimpo).toEqual(objetoEsperado)
})