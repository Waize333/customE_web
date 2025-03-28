import { categoryItems } from "../data/CategoryItemData";
import MenuItem from "./MenuItem";

const CategoryList = () => {
  return (
    <div className="p-4">
      {Object.keys(categoryItems).map((category) => (
        <div key={category} id={category} className="mb-8">
          <h2 className="text-xl font-bold mb-2">{category}</h2>
          <div className="grid grid-cols-2 gap-4">
            {categoryItems[category].map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
