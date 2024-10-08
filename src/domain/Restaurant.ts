import { Address } from './Address';
import { Product } from './Product';

type Restaurant = {
  id: string;
  name: string;
  branch: string;
  logoUrl: string;
  address: Address;
  products: Product[];
};

export type { Restaurant };
