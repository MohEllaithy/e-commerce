import CategoryItem from "../directory-item/DirectoryItem";
import "./directory.scss";

function Director({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  );
}

export default Director;
