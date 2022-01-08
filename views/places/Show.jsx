const React = require("react");
const Def = require("../Default");

function show(data) {
  let comments = <h3 className="inactive">No comments here...</h3>;
  let rating = <h3 className="inactive">Not rated yet...</h3>;

  let sumRatings = data.place.comments.reduce((tot, c) => {
    return tot + c.stars;
  }, 0);
  let averageRating = Math.round(sumRatings / data.place.comments.length);
  let stars = "";
  for (let i = 0; i < averageRating; i++) {
    stars += "⭐";
  }
  rating = <h3>{stars} stars</h3>;
  if (data.place.comments.length) {
    comments = data.place.comments.map((c) => {
      return (
        <div className="border col-sm-4">
          <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong> -{c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
          <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
            <input type="submit" className="btn btn-danger" value="Delete Comment"></input>
          </form>
        </div>
      );
    });
  }
  return (
    <Def>
      <main>
        <h2>{data.place.name}</h2>
        <img src={data.place.pic} alt={data.place.name}></img>
        <h3>
          Location: {data.place.city}, {data.place.state}
        </h3>
        <div className="col-sm-6">
          <h2>Description</h2>
          <h3>{data.place.showEstablished()}</h3>
          <h4>Serving {data.place.cuisines}</h4>
          <section>
            <h1>Ratings</h1>
            {rating}
          </section>
          <section>
            <h2>Comments</h2>
            {comments}
          </section>
          <a href={"/places/${data.i}/edit"} className="btn btn-warning">
            Edit
          </a>
          <form method="POST" action={"/places/${data.id}?_method=DELETE"}>
            <button type="submit" className="btn btn-danger">
              Delete
            </button>
          </form>
        </div>
      </main>
    </Def>
  );
}

module.exports = show;
