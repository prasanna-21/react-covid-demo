import React from "react";
// import CountUp from "react-countup";

function Card(props) {
  // console.log(props.data);
  const { data } = props;
  if (!data.confirmed) return "Loading...";

  return (
    <div>
      <div className="ui  container" style={{ marginTop: "100px" }}>
        <div className="ui three column very relaxed  centered grid">
          <div className="ui centered cards">
            <div className="card" style={{ borderBottom: "10px solid blue" }}>
              <div className="content">
                <div className="header">Confirmed Cases</div>
                <div className="meta">
                  {new Date(data.lastUpdate).toDateString()}
                </div>
                <div className="description">{data.confirmed}</div>
              </div>
            </div>

            <div className="card" style={{ borderBottom: "10px solid green" }}>
              <div className="content">
                <div className="header">Deaths cases</div>
                <div className="meta">
                  {new Date(data.lastUpdate).toDateString()}
                </div>
                <div className="description">{data.deaths}</div>
              </div>
            </div>

            <div className="card" style={{ borderBottom: "10px solid red" }}>
              <div className="content">
                <div className="header">Recovered cases</div>
                <div className="meta">
                  {new Date(data.lastUpdate).toDateString()}
                </div>
                <div className="description">{data.recovered}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
