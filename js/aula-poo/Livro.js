class Livro{
    constructor(titulo, autor, quantidadeCopias){
        this._titulo = titulo
        this._autor = autor
        this._quantidadeCopias = quantidadeCopias
    }

    get titulo() { 
        return this._titulo
    }

    set titulo(titulo) {
        this._titulo = titulo
    }

    get autor() { 
        return this._autor
    }

    set autor(autor) {
        this._autor = autor
    }

    get quantidadeCopias() {
        return this._quantidade
    }

    set quantidadeCopias(quantidadeCopias) {
        this._quantidadeCopias = quantidadeCopias
    }

    emprestar(){
        if(this._quantidadeCopias > 0){
            this._quantidadeCopias --
        }else{
            console.log("Não há mais exemplares disponíveis")
        }

    }

    devolver(){
        this._quantidadeCopias++
    }

}


const livro = new Livro("A volta dos que foram", "Fabio Grotto", 10)

livro.emprestar()
livro.emprestar()
livro.emprestar()

console.log(livro._quantidadeCopias)

livro.devolver()
livro.devolver()

console.log(livro.quantidadeCopias) 