import React, { useEffect, useState } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { useCart } from '../../context/CartContext';

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart(); 

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  useEffect(() => {
    const fromState = location.state?.product;
    if (fromState) {
      setProduct(fromState);
      setMainImage(fromState.images?.[0]?.url || '');
    } else {
      const allProducts = JSON.parse(localStorage.getItem('allProducts') || '[]');
      const found = allProducts.find((p) => p.id === parseInt(id));
      if (found) {
        setProduct(found);
        setMainImage(found.images?.[0]?.url || '');
      } else {
        toast.error("Product not found");
        navigate('/');
      }
    }
  }, [id, location.state, navigate]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (product?.images?.length > 1) {
        const next = (selectedIdx + 1) % product.images.length;
        setSelectedIdx(next);
        setMainImage(product.images[next].url);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [selectedIdx, product]);

  const handleImageClick = (img, idx) => {
    setMainImage(img.url);
    setSelectedIdx(idx);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prev) =>
      type === 'plus' ? Math.min(prev + 1, 10) : Math.max(prev - 1, 1)
    );
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setSelectedSize('');
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select a size and color");
      return;
    }
    const cartItem = {
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url || '',
      size: selectedSize,
      color: selectedColor,
      quantity,
    };

    addToCart(cartItem); // ✅ Add to cart context

    toast.success("Item added to cart!", {
      style: { background: 'black', color: 'white' }
    });
  };


  if (!product) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className='font-sans bg-white py-10'>
      <div className='max-w-6xl mx-auto p-4 md:p-4'>
        <div className='bg-white rounded-2xl shadow-md overflow-hidden'>
          <div className='flex flex-col md:flex-row gap-10 p-6 md:p-10'>

            <div className='hidden md:flex flex-col space-y-4'>
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img.url}
                  alt={img.altText || 'Product'}
                  onClick={() => handleImageClick(img, idx)}
                  className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition hover:scale-105 ${
                    selectedIdx === idx ? 'border-black ring-2 ring-black' : 'border-gray-300'
                  }`}
                />
              ))}
            </div>

            <div className='md:w-1/2'>
              <img
                src={mainImage}
                alt='Main Product'
                className='w-full h-[400px] object-cover rounded-xl border'
              />
              <div className='md:hidden flex overflow-x-auto space-x-4 mt-4'>
                {product.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img.url}
                    alt={img.altText}
                    onClick={() => handleImageClick(img, idx)}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border flex-shrink-0 hover:scale-105 transition ${
                      selectedIdx === idx ? 'border-black ring-2 ring-black' : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className='md:w-1/2'>
              <h1 className='text-2xl font-bold text-gray-900 mb-2'>{product.name}</h1>
              <p className='text-gray-500 text-sm mb-1'>${product.originalPrice || product.price}</p>
              <p className='text-xl text-black font-semibold mb-3'>${product.price}</p>
              <p className='text-gray-700 mb-4'>{product.description || "Great product!"}</p>

              <div className='mb-4'>
                <p className='text-gray-800 font-medium mb-2'>Color:</p>
                <div className='flex gap-2'>
                  {product.variants && Object.keys(product.variants).map((color, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleColorSelect(color)}
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all duration-200 ${
                        selectedColor === color
                          ? 'border-black ring-2 ring-black'
                          : 'border-gray-300'
                      }`}
                      style={{ backgroundColor: color.toLowerCase() }}
                      title={color}
                    />
                  ))}
                </div>
                {selectedColor && (
                  <p className='text-sm text-gray-500 mt-1'>Selected Color: {selectedColor}</p>
                )}
              </div>

              <div className='mb-4'>
                <p className='text-gray-800 font-medium mb-2'>Size:</p>
                {selectedColor ? (
                  <div className='flex gap-2'>
                    {product.variants[selectedColor]?.map((size, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSize(size)}
                        className={`border px-4 py-1 text-sm rounded transition ${
                          selectedSize === size ? 'bg-gray-800 text-white' : 'hover:bg-gray-100'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className='text-sm text-gray-500'>Please select a color first</p>
                )}
              </div>

              <div className='mb-6'>
                <p className='text-gray-700 font-medium'>Quantity:</p>
                <div className='flex items-center space-x-4 mt-2'>
                  <button
                    onClick={() => handleQuantityChange("minus")}
                    className='px-3 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300'
                  >
                    -
                  </button>
                  <span className='text-lg font-medium'>{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("plus")}
                    className='px-3 py-1 bg-gray-200 rounded text-lg font-bold hover:bg-gray-300'
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                className={`w-full uppercase px-4 py-3 rounded transition text-white ${
                  selectedColor && selectedSize
                    ? 'bg-black hover:bg-gray-800'
                    : 'bg-gray-400 cursor-not-allowed'
                }`}
                disabled={!selectedColor || !selectedSize}
              >
                Add to Cart
              </button>

              <div className='mt-8 text-gray-700'>
                <h2 className='text-base font-bold mb-2'>Characteristics:</h2>
                <table className='w-full text-sm'>
                  <tbody>
                    <tr>
                      <td className='py-1 w-24'>Brand</td>
                      <td className='py-1'>{product.brand || 'N/A'}</td>
                    </tr>
                    <tr>
                      <td className='py-1'>Material</td>
                      <td className='py-1'>{product.material || 'Cotton'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className='mt-20'>
            <h2 className='text-2xl text-center font-medium mb-4'>
              You may also like
            </h2>
            <ProductGrid products={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
