import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="flex justify-center">
      <h1 className="text-white">Product with id {id}</h1>
    </div>
  );
}

export { Product };
