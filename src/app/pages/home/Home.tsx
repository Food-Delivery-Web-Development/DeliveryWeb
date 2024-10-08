import { Loading } from '../../shared-components/Loading';
import { Title } from '../../shared-components/Title';
import { RestaurantItem } from './components/RestaurantItem';
import { useGetRestaurants } from './hooks/useGetRestaurants';

function Home() {
  const { restaurants } = useGetRestaurants();

  if (!restaurants) {
    return <Loading />;
  }

  return (
    <div className="py-8 text-primary px-24">
      <h2 className="text-2xl mb-4">
        <Title>RESTAURANTS</Title>
      </h2>
      <section className="flex flex-col gap-2">
        {restaurants.map(restaurant => (
          <article key={restaurant.id} className="w-[300px]">
            <RestaurantItem key={restaurant.id} restaurant={restaurant} />
          </article>
        ))}
      </section>
    </div>
  );
}

export { Home };
