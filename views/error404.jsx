const React = require("react");
const Def = require("./Default");

function error404() {
  return (
    <Def>
      <main>
        <div style={{ textAlign: "center" }}>
          <h1>404: PAGE NOT FOUND</h1>
          <p>Oopies doopies, we can't find this page</p>
          <img
            src="./images/404_error.jpg"
            alt="Figurine of Human Skeleton Sitting Infront of Computer"
          ></img>
          <div>
            Photo by:{" "}
            <a href="https://www.pexels.com/@cody-berg-98219">cody berg</a> on{" "}
            <a href="https://www.pexels.com">Pexels</a>
          </div>
        </div>
      </main>
    </Def>
  );
}

module.exports = error404;
