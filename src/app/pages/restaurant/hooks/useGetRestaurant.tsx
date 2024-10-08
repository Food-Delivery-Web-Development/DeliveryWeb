import { useEffect, useState } from 'react';
import { Restaurant } from '../../../../domain/Restaurant';
import { getResturantById } from '../../../api/RestaurantAPI';

function useGetRestaurant(id: string | undefined) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    getResturantById(id!).then(data => {
      setRestaurant(data);
    });
  }, [id]);

  return { restaurant };
}

export { useGetRestaurant };
