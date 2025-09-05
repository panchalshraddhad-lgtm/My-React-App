import { useState } from "react";

export default function RecipesCard(props) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div className="recipe-container">
      <header className="recipe-header">
        <h2>{props.name}</h2>
        <p>{props.time}</p>
      </header>

      <section className="recipe-details">
        <div>
          <p>{props.info1}</p>
          <p>{props.info2}</p>
          <p>{props.info3}</p>
        </div>
        <img className="foodimg" src={props.img} alt={props.name} />
      </section>

      <footer className="recipe-footer">
        <div className="action-buttons">
          <button
            className="dislike-btn"
            onClick={() => setDislikes(dislikes + 1)}
          >
            👎 {dislikes}
          </button>
          <button className="like-btn" onClick={() => setLikes(likes + 1)}>
            ❤️ {likes}
          </button>
        </div>
        <small>Delicious & healthy choice ✨</small>
      </footer>
    </div>
  );
}
