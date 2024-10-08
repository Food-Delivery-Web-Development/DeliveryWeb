import { useParams } from 'react-router-dom';
import { Loading } from '../../shared-components/Loading';
import { Title } from '../../shared-components/Title';
import { MenuItem } from './components/MenuItem';
import { useGetRestaurant } from './hooks/useGetRestaurant';

function Restaurant() {
  const { id } = useParams();

  const { restaurant } = useGetRestaurant(id);

  if (!restaurant) {
    return <Loading />;
  }

  return (
    <div className="py-8 text-primary px-24">
      <h2 className="text-4xl mb-4">
        <Title>{restaurant.name}</Title>
      </h2>
      <section className="ml-12">
        <h3 className="text-3xl mb-4">
          <Title>Menu</Title>
        </h3>
        {restaurant.products.map(product => (
          <article key={product.id} className="w-[350px]">
            <MenuItem id={product.id} name={product.name} price={product.price} />
          </article>
        ))}
      </section>
    </div>
  );
}

export { Restaurant };
