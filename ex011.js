let amigo = {nome: 'Yann', 
sexo: 'm',
peso: 60,
engordar(p=0){
    return this.peso += p
}
}

console.log('O ' + amigo.nome + ' esta pesando ' + amigo.engordar() + ' Kg')


