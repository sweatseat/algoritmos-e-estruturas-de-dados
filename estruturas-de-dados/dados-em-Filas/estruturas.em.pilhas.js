class pilhas{
  constructor(){
    this.pilha = [];
  }
  addPilha(pilha){
    this.pilha.push(pilha);
  }
  removePilha(){
    return this.pilha=[];
  }
  printPilha(){
    return console.log(this.pilha)
  }
  popPilha(){
    return console.log(this.pilha.pop())
  }
  pila(){
    return console.log(this.pilha[this.pilha.length -1]);
  }
  verifiquePilha(){
    return this.pilha == 0?console.log("Sem nenhum item"):console.log("Com intem")
  }
  lengthPilha(){
    return console.log(this.pilha.length)
  }
}
const Master = new pilhas();
Master.addPilha(5);
Master.addPilha(3)
Master.addPilha(3)
Master.addPilha(876)
Master.printPilha()
Master.verifiquePilha();
Master.lengthPilha()
Master.popPilha()
Master.pila()
