// Aca va el boton con el contador
import { useState } from "react";
const ItemCount = ({ stock, initial, id }) => {
  const [count, setCount] = useState(initial);
  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > initial && setCount(count - 1);
  const onAdd = () => count > 0 && console.log(`Agregaste ${count}`);

  return (
    <div>
      <button
        onClick={onAdd}
        className="mt-4 w-full rounded-xl bg-indigo-600 py-2 text-xl text-white shadow-lg hover:bg-orange-200">
        Agregar al carrito{" "}
      </button>
      <div className="flex text-center">
        <button onClick={increase} className="mt-4 hover:bg-white">
          +
        </button>
        <span className="mt-4 pl-4">Cantidad : {count} unidades</span>
        <button
          onClick={decrease}
          className="mt-4 items-center pl-4 hover:bg-white">
          -
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
