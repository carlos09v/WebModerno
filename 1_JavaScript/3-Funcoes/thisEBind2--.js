function Pessoa(){
  this.idade = 0

  const self = this
  setInterval(function () { // Temporizador
    self.idade ++
    console.log(self.idade)
  }/*.bind(this)*/, 1000) // 1000 Milisegundos = 1 seg
}

new Pessoa