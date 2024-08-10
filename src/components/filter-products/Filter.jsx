import { useState, useEffect } from "react";
import "./style.css";

const Filter = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  const fetchProducts = async () => {
    try {
      const apiRespone = await fetch(`https://dummyjson.com/products`, {
        method: "GET",
      });
      const result = await apiRespone.json();
      setProducts(result.products);
      setFilterProduct(result.products);
      setLoading(false);
    } catch (error) {
      setLoading(true);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const uniqueCategory = [...new Set(products.map((items) => items.category))];

  useEffect(() => {
    const copyProducts = [...products];

    setFilterProduct(
      currentCategory !== ""
        ? copyProducts.filter(
            (items) =>
              items.category.toLowerCase() ===
              currentCategory.toLocaleLowerCase()
          )
        : copyProducts
    );
  }, [products, currentCategory]);

  if (loading) {
    return <h2>fetching the data </h2>;
  }

  return (
    <>
      <div className="filter-container">
        <h1>Filter Products By Category</h1>

        <div className="category-container">
          {uniqueCategory.map((category, index) => (
            <div key={index}>
              <button
                onClick={() =>
                  setCurrentCategory(
                    currentCategory !== "" && currentCategory === uniqueCategory
                      ? ""
                      : uniqueCategory
                  )
                }
              >
                {category}
              </button>
            </div>
          ))}
        </div>

        <div className="filter-products">
          {filterProduct && filterProduct.length > 0
            ? filterProduct.map((productsItems) => (
                <div className="filter" key={productsItems.id}>
                  {productsItems.title}
                  <button>{productsItems.category}</button>
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Filter;
