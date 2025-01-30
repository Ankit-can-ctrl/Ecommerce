import { useState } from "react";
import { ChevronDown, ChevronUp, X } from "lucide-react";

// Filter configurations for different product types
const filterConfigs = {
  clothing: {
    name: "Clothing",
    filters: {
      size: {
        type: "multiSelect",
        label: "Size",
        options: ["XS", "S", "M", "L", "XL", "XXL"],
      },
      color: {
        type: "multiSelect",
        label: "Color",
        options: ["Black", "White", "Red", "Blue", "Green"],
      },
      material: {
        type: "multiSelect",
        label: "Material",
        options: ["Cotton", "Polyester", "Wool", "Denim", "Silk"],
      },
      gender: {
        type: "select",
        label: "Gender",
        options: ["Men", "Women", "Unisex"],
      },
    },
  },
  electronics: {
    name: "Electronics",
    filters: {
      brand: {
        type: "multiSelect",
        label: "Brand",
        options: ["Apple", "Samsung", "Sony", "LG", "Dell"],
      },
      rating: {
        type: "range",
        label: "Rating",
        min: 1,
        max: 5,
        step: 0.5,
      },
      storage: {
        type: "multiSelect",
        label: "Storage",
        options: ["64GB", "128GB", "256GB", "512GB", "1TB"],
      },
      condition: {
        type: "select",
        label: "Condition",
        options: ["New", "Refurbished", "Used"],
      },
    },
  },
  furniture: {
    name: "Furniture",
    filters: {
      category: {
        type: "multiSelect",
        label: "Category",
        options: ["Sofa", "Table", "Chair", "Bed", "Storage"],
      },
      material: {
        type: "multiSelect",
        label: "Material",
        options: ["Wood", "Metal", "Glass", "Plastic", "Fabric"],
      },
      roomType: {
        type: "multiSelect",
        label: "Room",
        options: ["Living Room", "Bedroom", "Dining Room", "Office"],
      },
      assembly: {
        type: "select",
        label: "Assembly Required",
        options: ["Yes", "No"],
      },
    },
  },
};

const DynamicFilterSidebar = ({ productType = "electronics" }) => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [priceRange, setPriceRange] = useState([0, 1000]);

  const config = filterConfigs[productType];

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (filterKey, value, isMulti = true) => {
    setSelectedFilters((prev) => {
      if (isMulti) {
        const currentValues = prev[filterKey] || [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        return { ...prev, [filterKey]: newValues };
      }
      return { ...prev, [filterKey]: [value] };
    });
  };

  const clearAllFilters = () => {
    setSelectedFilters({});
    setPriceRange([0, 1000]);
  };

  const FilterComponent = ({ filterKey, filterConfig }) => {
    const { type, label, options, min, max, step } = filterConfig;

    switch (type) {
      case "multiSelect":
      case "select":
        return (
          <div className="space-y-2">
            {options.map((option) => (
              <label
                key={option}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={(selectedFilters[filterKey] || []).includes(option)}
                  onChange={() =>
                    handleFilterChange(
                      filterKey,
                      option,
                      type === "multiSelect"
                    )
                  }
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-600">{option}</span>
              </label>
            ))}
          </div>
        );

      case "range":
        return (
          <div className="space-y-2">
            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={selectedFilters[filterKey]?.[0] || min}
              onChange={(e) =>
                handleFilterChange(filterKey, e.target.value, false)
              }
              className="w-full"
            />
            <div className="text-sm text-gray-600">
              Value: {selectedFilters[filterKey]?.[0] || min}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const ActiveFilters = () => {
    const activeFilters = Object.entries(selectedFilters)
      .filter(([_, values]) => values.length > 0)
      .flatMap(([key, values]) =>
        values.map((value) => ({
          key,
          value,
          label: `${filterConfigs[productType].filters[key].label}: ${value}`,
        }))
      );

    if (activeFilters.length === 0) return null;

    return (
      <div className="mb-4">
        <h3 className="text-sm font-medium text-gray-900 mb-2">
          Active Filters
        </h3>
        <div className="flex flex-wrap gap-2">
          {activeFilters.map(({ key, value, label }) => (
            <span
              key={`${key}-${value}`}
              className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800"
            >
              {label}
              <button
                onClick={() => handleFilterChange(key, value)}
                className="ml-1"
              >
                <X size={14} />
              </button>
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-64 bg-white h-screen overflow-y-auto border-r border-gray-200 p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-900">
          {config.name} Filters
        </h2>
        <button
          onClick={clearAllFilters}
          className="text-sm text-blue-600 hover:text-blue-800"
        >
          Clear all
        </button>
      </div>

      {/* Active Filters */}
      <ActiveFilters />

      {/* Price Range */}
      <div className="border-b border-gray-200 py-4">
        <button
          onClick={() => toggleSection("price")}
          className="flex justify-between items-center w-full mb-2 text-left"
        >
          <span className="font-medium text-gray-900">Price Range</span>
          {expandedSections.price ? (
            <ChevronUp size={20} />
          ) : (
            <ChevronDown size={20} />
          )}
        </button>

        {expandedSections.price && (
          <div className="space-y-4 mt-2">
            <div className="flex items-center space-x-4">
              <input
                type="number"
                value={priceRange[0]}
                onChange={(e) =>
                  setPriceRange([parseInt(e.target.value), priceRange[1]])
                }
                className="w-24 p-1 border border-gray-300 rounded text-sm"
                placeholder="Min"
              />
              <span className="text-gray-500">to</span>
              <input
                type="number"
                value={priceRange[1]}
                onChange={(e) =>
                  setPriceRange([priceRange[0], parseInt(e.target.value)])
                }
                className="w-24 p-1 border border-gray-300 rounded text-sm"
                placeholder="Max"
              />
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], parseInt(e.target.value)])
              }
              className="w-full"
            />
          </div>
        )}
      </div>

      {/* Dynamic Filters */}
      {Object.entries(config.filters).map(([filterKey, filterConfig]) => (
        <div key={filterKey} className="border-b border-gray-200 py-4">
          <button
            onClick={() => toggleSection(filterKey)}
            className="flex justify-between items-center w-full mb-2 text-left"
          >
            <span className="font-medium text-gray-900">
              {filterConfig.label}
            </span>
            {expandedSections[filterKey] ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>

          {expandedSections[filterKey] && (
            <FilterComponent
              filterKey={filterKey}
              filterConfig={filterConfig}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default DynamicFilterSidebar;
