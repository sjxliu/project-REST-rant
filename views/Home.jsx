const React = require("react");
const Def = require("./default");

function home() {
  return (
    <Def>
      <main>
        <div style={{ textAlign: "center" }}>
          <h1>REST-Rant</h1>
          <img
            src="/images/sushi.jpg"
            alt="Sushi topped with greens"
            width={400}
            height={500}
          ></img>
          <div>
            Photo by: <a href="https://www.pexels.com/@cottonbro">Cottonbro</a>{" "}
            on <a href="https://www.pexels.com">Pexels</a>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </div>
      </main>
    </Def>
  );
}

module.exports = home;
