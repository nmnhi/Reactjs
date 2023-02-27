import { useState, useMemo, useRef } from "react";
function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState<any>([]);

  const nameRef = useRef<any>();
  const handleSubmit = () => {
    setProducts([...products, { name, price: +price }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = products.reduce((result: any, prod: any) => {
      console.log("Tính toán lại....");
      return result + prod.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div className="mt-4">
      <input
        ref={nameRef}
        className="px-2 py-1 w-52 h-11 border border-gray-400 rounded-md flex"
        type="text"
        value={name}
        placeholder="Enter name..."
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="px-2 py-1 w-52 h-11 border border-gray-400 rounded-md flex mt-4"
        type="text"
        value={price}
        placeholder="Enter price..."
        onChange={(e) => setPrice(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="rounded-lg px-3 py-1 shadow-xl border border-gray-400 bg-blue-500 text-white mt-4"
      >
        Thêm sản phẩm mới
      </button>
      <br />
      <div className="mt-4">
        Total:{total}
        <ul>
          {products.map(
            (product: { name: string; price: string }, index: any) => (
              <li key={index}>
                {product.name} - {product.price}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
export default AddProduct;
