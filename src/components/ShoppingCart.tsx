import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import {useState, SetStateAction} from 'react';
import {SelectedItems} from './SelectedItems';

type ShoppingCartProps = {
  isOpen: boolean,
  

}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const [choose, setChoose] = useState(false)
  const { closeCart, cartItems } = useShoppingCart()
  const {removeAllFromCart} = useShoppingCart()
  

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {choose ? 
                  cartItems.map(item => (
                    <SelectedItems key={item.id} {...item} />
                  )) : cartItems.map(item => (
                    <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
          {
            cartItems.length < 1 ? '' : 
            <button onClick={() => removeAllFromCart()}>
            Remove all
            </button>
          }

          {
            <button onClick={() => setChoose(true)}>
              Select
            </button>
          }

          

          
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
