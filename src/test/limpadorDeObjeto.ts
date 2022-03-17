const limparItemsDoArray = (array: Array<any>) => {
    const itensAhSeremRemovidos = array.filter(item => {
        return Object.keys(item).length === 0
    })
    for (const item of itensAhSeremRemovidos) {
        const index = array.indexOf(item)
        if (Object.keys(item).length === 0) array.splice(index, 1)
    }
}

const limparArray = (array: Array<any>) => {
    for (const item of array) {
        if (Array.isArray(item)) {
            limparArray(item)
            limparItemsDoArray(item)
        }
        else limparObjeto(item)
    }
    limparItemsDoArray(array)
}
export const ola = () => {
    return "PR"
}

export const limparObjeto = (objeto: any): any => {
    for (const key in objeto) {
        if (Array.isArray(objeto[key]))
            limparArray(objeto[key])
        if (!objeto[key] || !objeto[key].length)
            delete objeto[key]
    }
    return objeto;
}