import { useLocation, useNavigate } from 'react-router-dom';
import Header from "../Header";
import Blog from "../Blog";
import Page from "../page";

const Categories = () => {
  const navigate = useNavigate();  // fixed here
  const location = useLocation();  // fixed typo
  const category = location.pathname.split("/").at(-1).replaceAll("-", " "); // optional nicer display

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigate(-1)}> Back </button> {/* fixed */}
        <h2>Blog on <span>{category}</span></h2>
      </div>
      <Blog />
      <Page />
    </div>
  );
};

export default Categories;
