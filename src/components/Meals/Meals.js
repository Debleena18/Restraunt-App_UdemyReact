import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';

//As a wrapping component we can use div or fragment.
//Fragments are used to prevent {<div> Soup}
const Meals = () => {
  return (
    <Fragment>
        {/* <div> */}
      <MealsSummary />
      <AvailableMeals />
      {/* </div> */}
    </Fragment>
  );
};

export default Meals;