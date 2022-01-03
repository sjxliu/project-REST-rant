const React = require("react");
const Def = require("./Default");

function index(data) {
    let placesFormatted = data.places.map((place)=>{
        return (
            <div>
                <h2>{place.name}</h2>
                <img src="{place.pic}" alt="{place.name}"></img>
            </div>
        )
    })
  return (
    <Def>
      <main>
        <h1>Index???</h1>
        {placesFormatted}
      </main>
    </Def>
  );
}


module.exports = index;
