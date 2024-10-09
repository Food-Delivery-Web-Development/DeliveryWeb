import { useParams } from "react-router-dom";
import { useGetProduct } from "./hooks/useGetProduct";
import { Loading } from "../../shared-components/Loading";
import { Title } from "../../shared-components/Title";

function Product() {
  const { id } = useParams<{ id: string }>();

  const { product } = useGetProduct(id);

  if(!product){
    return <Loading />
  }

  return (
    <div className="flex justify-center items-center mt-10 text-white">
      <h2 className="max-w-4xl w-full">
        <h2 className="text-4xl mb-4 text-primary">
          <Title>{product.name}</Title>
        </h2>
        <div className="relative bg-gray-300 w-full h-56 mb-4 rounded-lg">
          <div className="absolute bottom-4 right-4 flex items-center space-x-4">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
              30-45 min
            </span>
            <div className="flex items-center">
              <span className="text-xl font-semibold ml-1 text-primary">★ 4.5</span>
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-2">Description</h3>
        <p className="text-gray-400">
          {product.description}
        </p>
      </h2>
    </div>
  );
}

export { Product };
