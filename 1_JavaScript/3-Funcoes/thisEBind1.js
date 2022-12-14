const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // undefined - conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa) // bind = amarrar
falarDePessoa() // Bom dia!