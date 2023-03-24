import PropTypes from "prop-types";
import CategoryListItem from "Patterns/01_Atoms/Category List Item/CategoryListItem";
import styles from "./CategoryList.module.scss";

const CategoryList = ({ categories }) => {
  return (
    <ul className={styles.categories}>
      {categories.map((category) => (
        <CategoryListItem category={category} />
      ))}
    </ul>
  );
};

CategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryList;
