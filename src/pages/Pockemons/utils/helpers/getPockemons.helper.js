import { useState, useEffect } from 'react';
import { pockemonApis } from '../../../../apis';

export const useGetPockemons = () => {
  const [pockemonsArray, setPockemonsArray] = useState([]);

  const getPockemonsWitDetails = () => {
    getPockemons()
      .then((res) => {
        const { results } = res;

        const promisesArray = results.map(({ name }) => {
          return getPockemonDetais(name);
        });
        return Promise.all(promisesArray);
      })
      .then((res) => {
        setPockemonsArray(formatPockemonsArray(res));
      });
  };

  useEffect(() => {
    getPockemonsWitDetails();
  }, []);

  return pockemonsArray;
};

export const getPockemons = () => {
  return pockemonApis.getPockemonList(20, 0);
};

export const getPockemonDetais = (name) => {
  return pockemonApis.getPockemonDetails(name);
};

export const formatPockemonsArray = (pockemonsArray) => {
  const pockemonsArrayFormatted = pockemonsArray.map(
    ({ id, name, sprites }) => {
      const { front_default } = sprites;

      return {
        id,
        name,
        picture: front_default,
      };
    }
  );

  return pockemonsArrayFormatted;
};
