import { Producto } from "./producto"

export interface CartItem{
  id: number
  product: Producto
  quantity: number
}
