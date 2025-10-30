import React, { useRef, useState } from "react";

const WriteArticle = () => {
  const fileInputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePublish = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim() || !file) {
      alert("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "data",
      JSON.stringify({
        title,
        content,
      })
    );

    try {
      setLoading(true);
      const response = await fetch("https://api.vedaglobalgroup.com/blog/add", {
        method: "POST",
        body: formData,
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
          // Do NOT set Content-Type when sending FormData with fetch
        },
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message || "Article published successfully!");
        setTitle("");
        setContent("");
        setFile(null);
      } else {
        alert("Failed to publish article.");
      }
    } catch (error) {
      console.error("Error publishing article:", error);
      alert("An error occurred while publishing the article.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-50 py-10 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-2xl flex flex-col gap-5">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          ✍️ Write an Article
        </h1>

        {/* Image Preview */}
        <div className="flex flex-col items-center gap-3">
          <img
            src={file ? URL.createObjectURL(file) : "/imgalt.jpg"}
            alt="Preview"
            className="w-60 h-60 object-cover rounded-xl border border-gray-300"
          />
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="px-4 py-2 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg transition"
          >
            {file ? "Change Image" : "Upload Image"}
          </button>
        </div>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Enter article title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        {/* Content Textarea */}
        <textarea
          placeholder="Write your article content here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-3 text-gray-800 w-full min-h-[200px] resize-none focus:outline-none focus:ring-2 focus:ring-green-700"
        />

        {/* Publish Button */}
        <button
          onClick={handlePublish}
          disabled={loading}
          className={`w-full py-3 font-bold text-white rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-700 hover:bg-green-800"
          }`}
        >
          {loading ? "Publishing..." : "Publish Article"}
        </button>
      </div>
    </div>
  );
};

export default WriteArticle;
