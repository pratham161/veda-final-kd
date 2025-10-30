import React, { useEffect, useState } from "react";
import axios from "axios";

const ProductDetailsInput = ({ detail, index, onChange, onRemove }) => {
  return (
    <div className="flex gap-2 mb-2 items-center bg-gray-50 p-2 rounded-lg">
      <input
        type="text"
        placeholder="Key"
        value={detail.key}
        onChange={(e) => onChange(index, "key", e.target.value)}
        required
        className="flex-1 p-1.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="text"
        placeholder="Value"
        value={detail.value}
        onChange={(e) => onChange(index, "value", e.target.value)}
        required
        className="flex-1 p-1.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
      />
      <button
        type="button"
        onClick={() => onRemove(index)}
        className="px-2 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 text-sm"
      >
        ✕
      </button>
    </div>
  );
};

const ImageUploader = ({ onChange }) => (
  <>
    <h4 className="text-lg font-semibold mb-2 text-gray-700">Upload Images</h4>
    <input
      type="file"
      multiple
      onChange={onChange}
      className="w-full mb-4 p-1.5 border rounded-lg text-sm"
    />
  </>
);

const AddProductForm = ({ product = null, onSuccess, onClose }) => {
  const isEditMode = !!product;

  const [productData, setProductData] = useState({
    name: "",
    category: "",
    description: "",
    details: [],
  });

  const [images, setImages] = useState([]);
  const [existingImages, setExistingImages] = useState([]);

  useEffect(() => {
    if (isEditMode) {
      const detailsArray = product.details
        ? Object.entries(product.details).map(([key, value]) => ({
            key,
            value,
          }))
        : [];

      setProductData({
        name: product.name || "",
        category: product.category || "",
        description: product.description || "",
        details: detailsArray,
      });

      setExistingImages(product.imageUrl || []);
    }
  }, [product, isEditMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleDetailChange = (index, field, value) => {
    const newDetails = [...productData.details];
    newDetails[index][field] = value;
    setProductData({ ...productData, details: newDetails });
  };

  const addDetail = () => {
    setProductData({
      ...productData,
      details: [...productData.details, { key: "", value: "" }],
    });
  };

  const removeDetail = (index) => {
    const newDetails = [...productData.details];
    newDetails.splice(index, 1);
    setProductData({ ...productData, details: newDetails });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const detailsObject = {};
    productData.details.forEach(({ key, value }) => {
      if (key) detailsObject[key] = value;
    });

    const formData = new FormData();
    formData.append("name", productData.name);
    formData.append("category", productData.category);
    formData.append("description", productData.description);
    formData.append("details", JSON.stringify(detailsObject));

    images.forEach((image) => {
      formData.append("files", image);
    });

    try {
      const url = isEditMode
        ? `https://api.vedaglobalgroup.com/product/update/${product._id}`
        : "https://api.vedaglobalgroup.com/product/add";

      const response = await fetch(url, {
        method: isEditMode ? "PUT" : "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
          // Do NOT set Content-Type when sending FormData with fetch
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit product");
      }

      alert(isEditMode ? "Product updated!" : "Product added!");

      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to submit product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className=" w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg"
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold leading-none"
          aria-label="Close form"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold mb-4 text-center text-gray-700">
          {isEditMode ? "Edit Product" : "Add New Product"}
        </h2>

        <input
          name="name"
          placeholder="Product Name"
          value={productData.name}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
        />

        <input
          name="category"
          placeholder="Category"
          value={productData.category}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400"
        />

        <textarea
          name="description"
          placeholder="Description"
          value={productData.description}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded-lg text-sm focus:ring-2 focus:ring-blue-400 resize-none"
          rows={3}
        />

        {/* Product Details */}
        <h4 className="text-base font-semibold mb-2 text-gray-700">
          Product Details
        </h4>
        {productData.details.map((detail, index) => (
          <ProductDetailsInput
            key={index}
            detail={detail}
            index={index}
            onChange={handleDetailChange}
            onRemove={removeDetail}
          />
        ))}

        <button
          type="button"
          onClick={addDetail}
          className="mb-4 px-3 py-1.5 bg-green-500 text-white rounded-lg hover:bg-green-600 text-sm"
        >
          ➕ Add Detail
        </button>

        <ImageUploader onChange={handleImageChange} />

        <button
          type="submit"
          className="w-full py-2.5 bg-blue-500 text-white text-base font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          {isEditMode ? "Update Product" : "Submit Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
