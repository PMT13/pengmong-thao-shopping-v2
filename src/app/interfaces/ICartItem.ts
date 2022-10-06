import {IProduct} from "./IProduct";

export interface ICartItem{
  id: string,
  count: number,
  product: IProduct
}
