  import React, { useEffect, useState } from 'react';
  import { useNavigate, Link } from 'react-router-dom';
  import { FaSignOutAlt, FaEdit, FaTrash, FaPlus, FaSave } from 'react-icons/fa';
  import MyOrderpage from './MyOrderpage';

  const Profile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '', file: null });

    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (!storedUser) {
        navigate('/login');
      } else {
        setUser(storedUser);
        setFormData({ name: storedUser.name, email: storedUser.email });
      }

      const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
      setProducts(storedProducts);
    }, [navigate]);

    const isAdmin = user?.role === 'admin';

    const handleLogout = () => {
      localStorage.removeItem('user');
    };

    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSave = () => {
      const updatedUser = { ...user, ...formData };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      setIsEditing(false);
      alert('Profile updated successfully!');
    };

    const handleProductChange = (e, index) => {
      const updated = [...products];
      updated[index][e.target.name] = e.target.value;
      setProducts(updated);
    };

    const handleProductSave = () => {
      localStorage.setItem('products', JSON.stringify(products));
      alert('Products updated!');
    };

    const handleProductDelete = (index) => {
      const updated = [...products];
      updated.splice(index, 1);
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    };

    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewProduct((prev) => ({
          ...prev,
          image: reader.result,
          file,
        }));
      };
      reader.readAsDataURL(file);
    };

    const handleAddProduct = () => {
      if (!newProduct.name || !newProduct.price || !newProduct.image) {
        return alert('Fill all fields to add product');
      }
      const updated = [...products, { ...newProduct }];
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
      setNewProduct({ name: '', price: '', image: '', file: null });
    };

    if (!user) return null;

    return (
      <div className="min-h-screen bg-gradient-to-tr from-[#fff1f5] to-[#ffe6f0] px-4 py-10 animate-fadeIn">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/3 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg p-8 border border-pink-100">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/men-2858738-2379823.png"
                alt="Avatar"
                className="w-28 h-28 rounded-full object-cover border-4 border-pink-300 shadow-md hover:scale-105 transition duration-300"
              />

              {!isEditing ? (
                <>
                  <h2 className="text-2xl font-semibold text-pink-500 mt-4">{user.name}</h2>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </>
              ) : (
                <div className="w-full mt-4 space-y-2">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded text-sm"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded text-sm"
                    placeholder="Email"
                  />
                </div>
              )}
              <p className="text-xs text-gray-400 mt-1">
                Joined on {user?.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              {!isEditing ? (
                <button
                  onClick={handleEditToggle}
                  className="bg-pink-400 hover:bg-pink-500 text-white py-2.5 rounded-full shadow-md text-sm uppercase flex items-center justify-center gap-2"
                >
                  <FaEdit /> Edit Profile
                </button>
              ) : (
                <button
                  onClick={handleSave}
                  className="bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-full shadow-md text-sm uppercase"
                >
                  Save Changes
                </button>
              )}

              <Link
                to="/login"
                onClick={handleLogout}
                className="flex items-center justify-center gap-2 border border-pink-300 text-pink-500 hover:bg-pink-100 py-2.5 rounded-full text-sm"
              >
                <FaSignOutAlt /> Logout
              </Link>
            </div>
          </div>

          <div className="w-full lg:w-2/3 space-y-8">
            {isAdmin ? (
              <>
                <div>
                  <h3 className="text-xl font-bold text-pink-600 mb-4">📦 All Orders</h3>
                  <MyOrderpage isAdmin={true} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-pink-600 mb-4">🛍️ Manage Products</h3>
                  {products.length > 0 ? (
                    products.map((product, index) => (
                      <div key={index} className="flex items-center gap-3 mb-3 bg-white p-3 rounded shadow border border-pink-100">
                        <img src={product.image} alt="product" className="w-14 h-14 object-cover rounded" />
                        <input
                          name="name"
                          value={product.name}
                          onChange={(e) => handleProductChange(e, index)}
                          className="border p-2 rounded w-1/3 text-sm"
                        />
                        <input
                          name="price"
                          value={product.price}
                          onChange={(e) => handleProductChange(e, index)}
                          className="border p-2 rounded w-24 text-sm"
                        />
                        <button onClick={() => handleProductDelete(index)} className="text-red-500">
                          <FaTrash />
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No products found.</p>
                  )}

                  <button
                    onClick={handleProductSave}
                    className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full flex items-center gap-2"
                  >
                    <FaSave /> Save All
                  </button>

                  <div className="mt-6 bg-pink-50 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">➕ Add New Product</h4>
                    <div className="flex gap-3 flex-wrap">
                      <input
                        type="text"
                        placeholder="Name"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                        className="border p-2 rounded w-1/3 text-sm"
                      />
                      <input
                        type="text"
                        placeholder="Price"
                        value={newProduct.price}
                        onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                        className="border p-2 rounded w-24 text-sm"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="border p-2 rounded w-1/3 text-sm"
                      />

                      {newProduct.image && (
                        <img
                          src={newProduct.image}
                          alt="Preview"
                          className="w-16 h-16 rounded object-cover border"
                        />
                      )}

                      <button
                        onClick={handleAddProduct}
                        className="bg-pink-500 text-white px-4 py-2 rounded-full"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <MyOrderpage />
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Profile;