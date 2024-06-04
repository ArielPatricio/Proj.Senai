class Cliente{

    constructor(nomeCompleto, telefone, endereco){
        this._nomeCompleto = nomeCompleto
        this._telefone = telefone
        this._endereco = endereco 
    }

    get nomeCompleto(){
        return this._nomeCompleto
    }

    get telefone(){
        return this._telefone
    }

    get endereco(){
        return this._endereco
    }

    set nomeCompleto(nomeCompleto){
        this._nomeCompleto = nomeCompleto
    }

    set telefone(telefone){
        this._telefone = telefone
    }

    set endereco(endereco){
        this._endereco = endereco
    }

  

}

export default Cliente