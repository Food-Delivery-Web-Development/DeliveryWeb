import { useParams } from "react-router-dom";
import { useGetProduct } from "./hooks/useGetProduct";
import { Loading } from "../../shared-components/Loading";
import { Title } from "../../shared-components/Title";

function Product() {
  const { id } = useParams<{ id: string }>();
  const { product } = useGetProduct(id);

  if (!product) {
    return <Loading />;
  }

  return (
    <div className="flex justify-center items-center mt-10 text-white">
      <div className="max-w-4xl w-full">
        <h2 className="text-4xl mb-4 text-primary">
          <Title>{product.name}</Title>
        </h2>

        <div className="relative w-full h-56 mb-4 rounded-lg">
          {product.imageUrl ? (
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          ) : (
            <div className="bg-gray-300 w-full h-full rounded-lg"></div>
          )}
        </div>

        

        <div className="flex items-center justify-between space-x-4 mt-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
          </div>

          <div className="flex items-center justify-center">
            <span className="bg-gray-800 text-white px-3 py-1 rounded-md text-sm">
              30-45 min
            </span>
            <div className="flex items-center">
              <span className="text-xl font-semibold ml-1 text-primary">
                ★ {product.rating || "0.0"}
              </span>
            </div>
          </div>
        </div>

        <p className="text-gray-400">{product.description}</p>
      </div>
    </div>
  );
}

export { Product };
