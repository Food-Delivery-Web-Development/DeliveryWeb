import { useEffect, useState } from 'react';
import { Product } from '../../../../domain/Product';
import { getProductById } from '../../../api/RestaurantAPI';

function useGetProduct(id: string | undefined) {
    const [product, setProduct] = useState<Product | null>(null);
  
    useEffect(() => {
      getProductById(id!).then(data => {
        setProduct(data);
      });
    }, [id]);
  
    return { product };
  }
  
  export { useGetProduct };