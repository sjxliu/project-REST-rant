const React = require("react");
const Def = require("../Default");

function show() {
  return (
    <Def>
      <main>
        <h2>{data.place.name}</h2>
        <img src={data.place.pic} alt={data.place.name}></img>
        <h3>
          Location: {data.place.city}, {data.place.state}
        </h3>
        <h4>Cuisines: {data.place.cuisines}</h4>
        <section>
          <h1>Ratings</h1>
          <h3>No ratings yet...</h3>
        </section>
        <section>
          <h1>Comments</h1>
          <h3>No comments yet...</h3>
        </section>
        <a href={"/places/${data.i}/edit"} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={"/places/${data.id}?_method=DELETE"}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
