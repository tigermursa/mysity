"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const AddSite = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Name and image are required.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/websites", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, image, category, link }),
      });

      if (res.ok) {
        console.log(e);
        router.push("/products");
      } else {
        throw new Error("Failed to create a Product");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 border shadow-md rounded-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 font-mono text-gray-600">Add New Website</h1>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              className="input input-bordered input-accent border p-3 rounded-lg"
              type="text"
              placeholder="Website Name"
            />

            <input
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="input input-bordered input-accent border p-3 rounded-lg"
              type="text"
              placeholder="Image URL"
            />

            <input
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="input input-bordered input-accent border p-3 rounded-lg"
              type="text"
              placeholder=" Category"
            />

            <input
              onChange={(e) => setLink(e.target.value)}
              value={link}
              className="input input-bordered input-accent border p-3 rounded-lg"
              type="text"
              placeholder="Website link"
            />

            <button type="submit" className="btn">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddSite;
