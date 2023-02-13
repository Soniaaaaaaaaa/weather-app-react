import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <form id="form">
          <div className="cntr">
            <input
              type="text"
              className="form-city"
              placeholder="please type a city:"
            />
            <button type="submit" className="btn-search">
              <i className="fa-solid fa-location-dot search-icon"></i>
            </button>
            <button className="current">Current</button>
          </div>
        </form>
        <div className="update">
          last updated: <span id="time"></span>
        </div>
        <div className="city">city: Kyiv</div>
        <div className="container">
          <div classNames="part-1">
            <img src="" alt="" className="icon" />
          </div>
          <div className="part-2">
            <span id="ch-1">
              <span className="degree"></span>
              <span className="unit">°C</span>
            </span>
          </div>
          <div className="part-3">
            <span id="ch_2">
              {" "}
              humidity: <span id="hum"></span>%
            </span>
            <br />
            <span id="ch_3">
              {" "}
              wind: <span id="wind"></span>km/h
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
