import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import Blog from "../Blog";
import Page from "../page";

const Tagpage = () => {
  const navigate = useNavigate();  // fixed here
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1).replaceAll("-", " ");  // converting URL format to readable

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>
          Blogs Tagged <span>#{tag}</span>
        </h2>
      </div>
      <Blog />
      <Page />
    </div>
  );
};

export default Tagpage;
