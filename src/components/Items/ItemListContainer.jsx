import ItemCount from "../Items/ItemCount";
import ItemList from "../Items/ItemList";
import { products } from "../../utils/products";
import { useState, useEffect } from "react";
import { customPromise } from "../../utils/customPromise";
import { useParams } from "react-router-dom";
const ItemListContainer = ({}) => {
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customPromise(products).then((res) =>
      setListProducts(id ? res.filter((el) => el.categoria === id) : res)
    );
  }, [id]);

  return (
    <div>
      <ItemList listaProductos={listProducts} />
    </div>
  );
};

export default ItemListContainer;
