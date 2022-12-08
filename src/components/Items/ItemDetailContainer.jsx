// aca van los detalles del item
import { customPromise } from "../../utils/customPromise";
import { products } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customPromise(products).then((res) =>
      setItem(res.find((el) => el.id === parseInt(id)))
    );
    console.log(item);
  }, [id]);

  return (
    <div className="container">
      <ItemDetail item={item} />;
    </div>
  );
};

export default ItemDetailContainer;
