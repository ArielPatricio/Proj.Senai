class Pedido{
 
constructor(idPedido, listadeItens = [], totaldoPedido){
        this._idPedido = idPedido
        this._listadeItens = []
        this._totaldoPedido = 0
}

get idPedido(){
    return this._idPedido
}

get listadeItens(){
   return this._listadeItens
}
get totaldoPedido(){
    return this._totaldoPedido
}

set listadeItens(listadeItens){
    this._listadeItens = listadeItens
}

Adicionar(listadeItens){
    this.listadeItens.push(listadeItens)
    this._total += item.preco
}

calcularTotaldoPedido(){
    this.totaldoPedido = this.listadeItens[0]._totaldoPedido

}

gerarresumoPedido(){
   
}

}


const pedido = new Pedido(2, 3, 4)
pedido.Adicionar()
pedido.calcularTotaldoPedido()

console.log(pedido._listadeItens)