import { useEffect, useState } from 'react';
import { Restaurant } from '../../../../domain/Restaurant';
import { getResturants } from '../../../api/RestaurantAPI';

function useGetRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[] | null>(null);

  useEffect(() => {
    getResturants().then(data => {
      setRestaurants(data);
    });
  }, []);

  return { restaurants };
}

export { useGetRestaurants };
