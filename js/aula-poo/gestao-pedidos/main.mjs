import Pedido from "./Pedido.mjs"
import Cliente from "./Cliente.mjs"
import Item from "./Item.mjs"

let cliente = new Cliente("Ariel Rodrigues de Sousa", 85997315806, "Rua Augusto Sá n°356 - Centro")
let pedido = new Pedido(2400509001)

let item01 = new Item("Notebook Lenovo", 2500)
let item02 = new Item("Mouse Lenovo Gamer", 250)
let item03 = new Item("HeadSet Lenovo Gamer", 300)

pedido.adicionarItem(item01)
pedido.adicionarItem(item02)
pedido.adicionarItem(item03)

console.log(pedido.relatorio())


