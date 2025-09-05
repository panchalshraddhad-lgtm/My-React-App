import { createRoot } from "react-dom/client";
import "./index.css";
import RecipesCard from "./Recipe";
import Data from "./components/Data.js";

const root = createRoot(document.getElementById("root"));

function RecipeCards() {
  return (
    <>
      <header className="mainhead">RECIPE MENU CARD</header>

      {/* <div className="recipe-container">
        {Data.map((item, id) => (
          <RecipesCard item={item} id={id} />
        ))}
      </div> */}

      <div className="mainParent">
        {Data.map((item, id) => (
          <RecipesCard
            key={id}
            name={item.name}
            time={item.time}
            info1={item.info1}
            info2={item.info2}
            info3={item.info3}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}

root.render(<RecipeCards />);

// root.render(<RecipeCard />);
