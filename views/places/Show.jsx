const React = require("react");
const Def = require("../Default");

function show(data) {
  let comments = <h3 className="inactive">No comments here...</h3>;
  if (data.place.comments.length) {
    return (
      <div className="border">
        <h2 className="rant">{c.rant ? "Rant! 😡" : "Rave! 😻"}</h2>
        <h4>{c.content}</h4>
        <h3>
          <stong> -{c.author}</stong>
        </h3>
        <h4>Rating: {c.stars}</h4>
      </div>
    );
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
            <h3>No ratings yet...</h3>
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
