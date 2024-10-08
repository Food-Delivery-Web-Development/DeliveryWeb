import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import { Restaurant } from '../../../../domain/Restaurant';

interface Props {
  restaurant: Restaurant;
}

function RestaurantItem({ restaurant }: Props) {
  const navigate = useNavigate();

  return (
    <button className="bg-white w-full px-4 py-4 rounded-lg" onClick={() => navigate(`/restaurant/${restaurant.id}`)}>
      <div className="flex justify-between">
        <div className="flex gap-4 h-full items-center">
          <img
            className="w-14 h-14 object-cover rounded-full border-secondary border-2"
            src={restaurant.logoUrl}
            alt={restaurant.name}
          />
          <div className="text-start">
            <h2 className="font-semibold">{restaurant.name}</h2>
            <p className="text-secondary text-xs">{restaurant.address.city}</p>
          </div>
        </div>
        <div className=" text-lg font-bold text-primary flex gap-2 items-end min-h-full justify-end">
          <p className="mb-1 text-base">
            <StarIcon fontSize="inherit" />
          </p>
          <p>4.5</p>
        </div>
      </div>
    </button>
  );
}

export { RestaurantItem };
