const React = require("react");
const Def = require("../Default");

function show() {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <p>{rating} Currently Unrated</p>
        <p>No Comments Yet</p>
        <a href={"/places/${data.i}/edit"} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={"/places/${data.i}?_method=DELETE"}>
            <button type="submit" className="btn btn-danger">
                Delete
            </button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
