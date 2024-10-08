import axios from 'axios';
import { Configurations } from '../../configurations/Configurations';
import { Restaurant } from '../../domain/Restaurant';

const ResturantAPI = axios.create({
  baseURL: Configurations.BaseURL + '/restaurant/api'
});

async function getResturants(): Promise<Restaurant[]> {
  const response = await ResturantAPI.get<Restaurant[]>('/restaurants');

  return response.data;
}

async function getResturantById(id: string) {
  const response = await ResturantAPI.get(`/restaurants/${id}`);

  return response.data;
}

export { getResturantById, getResturants };
