import {ICartItem} from "./ICartItem";

export interface ICart{
  id: string,
  productList: ICartItem[],
  subTotal: number,
  taxTotal: number,
  shippingTotal: number,
  costTotal: number
}
