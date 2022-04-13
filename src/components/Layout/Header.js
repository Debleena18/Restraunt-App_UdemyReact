import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assests/meals.jpg'
import classes from './Header.modules.css';

//Since "main-image" is a css class with (-) so we can't write it with dot(.) notation
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>RestrauntMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}> 
        <img src={mealsImage} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;