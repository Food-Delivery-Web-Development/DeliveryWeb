import { useNavigate } from "react-router-dom";

interface Props {
  id: string,
  name: string,
  price: number
}

function MenuItem({ id, name, price }: Props) {
  const navigate = useNavigate();
    

  return (
    <button className="bg-white text-primary mb-2 rounded-xl px-4 py-2 w-full" onClick={() => {navigate(`/product/${id}`)}}>
      <div className="flex justify-between">
        <div className="flex gap-1 flex-col h-full text-start">
          <div className="py-1 px-4 bg-primary/60 flex justify-center w-fit rounded-md">
            <p className="text-xs text-white">Delivery</p>
          </div>
          <h3 className="text-lg font-bold">{name}</h3>
          <p className="text-xs">Price: {price} $</p>
        </div>
        <div className="text-right text-xs flex flex-col min-h-full justify-end">
          <p>12/30 orders left</p>
          <p>6/30 days left</p>
        </div>
      </div>
    </button>
  );
};

export { MenuItem };
