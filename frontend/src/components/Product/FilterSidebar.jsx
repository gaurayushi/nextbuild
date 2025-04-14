import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Black", "Green", "Yellow", "Gray", "White", "Pink", "Beige", "Navy"];
  const sizes = ["XS", "S", "M", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Fierece", "Viscoe"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Style", "Fashionstate", "Chicstyle"];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.set(key, newFilters[key].join(","));
      } else if (
        newFilters[key] &&
        typeof newFilters[key] !== "object" &&
        newFilters[key] !== ""
      ) {
        params.set(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type });

    let updatedFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        updatedFilters[name] = [...(updatedFilters[name] || []), value];
      } else {
        updatedFilters[name] = updatedFilters[name].filter((item) => item !== value);
      }
    } else {
      updatedFilters[name] = value;
    }

    setFilters(updatedFilters);
    updateURLParams(updatedFilters);
  };

  return (
    <div className='p-5 bg-white border border-pink-100 rounded-xl shadow-md w-full'>
      <h3 className='text-2xl font-semibold text-pink-500 mb-6 tracking-wide'>Filters</h3>

      {/* Category + Gender */}
      {[{ label: "Category", name: "category", options: categories },
        { label: "Gender", name: "gender", options: genders }].map(({ label, name, options }) => (
        <div key={name} className='mb-6'>
          <p className='text-gray-600 font-medium mb-2'>{label}</p>
          {options.map((option) => (
            <label key={option} className='flex items-center gap-2 text-sm text-gray-700 mb-1'>
              <input
                type='radio'
                name={name}
                value={option}
                checked={filters[name] === option}
                onChange={handleFilterChange}
                className='accent-pink-500 h-4 w-4'
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {/* Colors */}
      <div className='mb-6'>
        <p className='text-gray-600 font-medium mb-2'>Colors</p>
        <div className='flex flex-wrap gap-3'>
          {colors.map((color) => (
            <label key={color} className='flex items-center gap-2 cursor-pointer'>
              <input
                type='radio'
                name='color'
                value={color}
                checked={filters.color === color}
                onChange={handleFilterChange}
                className='hidden'
              />
              <span
                className='w-5 h-5 rounded-full border border-gray-300 shadow'
                style={{ backgroundColor: color.toLowerCase() }}
              />
              <span className='text-sm text-gray-700'>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Multi-Selects: Sizes, Materials, Brands */}
      {[{ label: "Sizes", name: "size", options: sizes },
        { label: "Materials", name: "material", options: materials },
        { label: "Brands", name: "brand", options: brands }].map(({ label, name, options }) => (
        <div key={name} className='mb-6'>
          <p className='text-gray-600 font-medium mb-2'>{label}</p>
          {options.map((option) => (
            <label key={option} className='flex items-center gap-2 text-sm text-gray-700 mb-1'>
              <input
                type='checkbox'
                name={name}
                value={option}
                checked={filters[name].includes(option)}
                onChange={handleFilterChange}
                className='accent-pink-500 h-4 w-4'
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {/* Price Range */}
      <div className='mb-8'>
        <label className='block text text-gray-600 font-medium mb-3'>Price Range</label>
        <input
          type='range'
          name='maxPrice'
          min={0}
          max={100}
          value={filters.maxPrice}
          onChange={handleFilterChange}
          className='w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer'
        />
        <div className='flex justify-between text-gray-600 text-sm'>
          <span>$0</span>
          <span>${filters.maxPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
