import React, { useEffect, useState } from "react";
import AxiosInstance from "../Axiosconfig.js";
import { FaEdit, FaTrash } from "react-icons/fa";
import AddProductForm from "./add_products.jsx";

function Allproducts() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingProduct, setEditingProduct] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getProducts = async () => {
    try {
      // const productdata = await AxiosInstance.get("/product/all");
      const productdata = await fetch("https://api.vedaglobalgroup.com/product/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      const productdataJson = await productdata.json();
      setProducts(productdataJson.products);
      // console.log(productdataJson);
    } catch (error) {
      console.error("Error fetching products:", error);
      // Log specific error details for debugging
      if (error.response) {
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error setting up request:", error.message);
      }
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`https://api.vedaglobalgroup.com/product/delete/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });
      if (!response.ok) {
        throw new Error("Failed to delete product");
      }
      alert("Product deleted");
      getProducts();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete product");
    }
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const onFormSuccess = () => {
    setShowForm(false);
    setEditingProduct(null);
    getProducts();
  };

  // Filter products by search term (case insensitive)
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );


  

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
        />

        {/* Add product button */}
        <button
          onClick={() => {
            setEditingProduct(null);
            setShowForm(true);
          }}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          + Add Product
        </button>
      </div>
  
  {/* add or update form */}
      {showForm && (
        <AddProductForm
          product={editingProduct}
          onSuccess={onFormSuccess}
          onClose={() => setShowForm(false)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative"
          >
            <div className="absolute top-2 right-2 flex gap-2 z-10">
              <button
                onClick={() => handleEdit(product)}
                className="p-1 text-blue-600 hover:text-blue-800"
                title="Edit Product"
              >
                <FaEdit size={18} />
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="p-1 text-red-600 hover:text-red-800"
                title="Delete Product"
              >
                <FaTrash size={18} />
              </button>
            </div>

            <img
              src={
                product.imageUrl?.[0] ||
                "https://via.placeholder.com/300x200?text=No+Image"
              }
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-1">Category: {product.category}</p>
              <p className="text-sm text-gray-600 mb-2">{product.description}</p>

              <div className="text-sm text-gray-700 space-y-1">
                {Object.entries(product.details).map(([key, value]) => (
                  <p key={key}>
                    <strong>{key}:</strong> {value}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allproducts;
