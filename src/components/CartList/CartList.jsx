import useCartStore from '../../stores/useCartStore';

import CartCounter from '../CartCounter/CartCounter';

import './CartList.css';

function CartList() {
  const { cart } = useCartStore();

  return (
    <section className='cart-list'>
      {cart.map((event) => {
        return <CartCounter event={event} />;
      })}
    </section>
  );
}

export default CartList;
