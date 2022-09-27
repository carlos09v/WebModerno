class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

// extends = Linkar - Prototipar
class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor'){
        super(sobrenome) // Chama o sobrenome de Avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const filho = new Filho
console.log(filho) // Filho { sobrenome: 'Silva', profissao: 'Professor' }