import CountryItem from "./CountryItem";
import Message from "./Message";
import styles from "./CountriesList.module.css";

import Spinner from "./Spinner";

function CountriesList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="Add your first city" />;

  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countriesList}>
      {countries.map((country) => (
        <CountryItem country={country} key={1} />
      ))}
    </ul>
  );
}

export default CountriesList;
