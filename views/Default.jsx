const React = require("react");

function Def(html) {
  return (
    <html>
      <head>
        <title>Title</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="/public/style.css"></link>
      </head>
      <body>
        <nav class="navbar navbar-light bg-light">
          <div>
            <ul>
              <li class="nav-item active">
                <a class="nav-link" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/places">
                  Places
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/places/New">
                  Add Place
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {html.children}
      </body>
    </html>
  );
}

module.exports = Def;
