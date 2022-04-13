import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import Card from '../UI/Card';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 122.949,
  }, 
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 216.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 112.999,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 418.599,
  },
];

//We need to return the abouve array into JSX
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
  <MealItem 
        id={meal.id}
        key={meal.id} 
        name={meal.name} 
        description={meal.description} 
        price={meal.price}
  />
  ));

  return (
    <section className={classes.meals}>
        <Card>
      <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;