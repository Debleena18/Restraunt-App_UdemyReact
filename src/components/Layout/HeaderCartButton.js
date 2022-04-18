import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';
import { valueToPercent } from '@mui/base';

//using useContext here the HeaderCartButton will be re-evaluated by react whenever the context changes.
//It changes when we update it in CartProvider.js
const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  
// reduce() is a built-in mtd that allows us to transforn an array into a single value.
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;