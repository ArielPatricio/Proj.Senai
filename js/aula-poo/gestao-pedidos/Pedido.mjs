class Pedido extends Cliente {

    constructor(id, cliente){
        this._id = id
        this._cliente = cliente
        this._itens = []
        this._total = 0

    }

    get id(){
        return this._id
    }

    get itens(){
        return this._itens
    }

    get total(){
        return this._total
    }

    get cliente(){
        return this._cliente
    }

    set itens(itens){
        this._itens = itens
    }

    set total(total){
        this._total = total
    }

    adicionarItem(item){
        this._itens.push(item)
        this._total += item.preco
    }

    relatorio(){
        let text = `ID: ${this._id}\n\nCLIENTE: ${Cliente.nomeCompleto}\n\nDADOS DO CLIENTE\n\n`
    
        for (let item of this._itens){
            text += item.relatorio()
        
    }
        return text + `\n\nTOTAL: ${this._total.toFixed(2)}`
                                +  `\nINFORMAÇÕES DE ENTREGA\n`
                                +  `TELEFONE: ${this._cliente.telefone}\n`
                                +  `ENDEREÇO: ${this._cliente.endereco}\n`

}

}

export default Pedido