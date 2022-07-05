import * as dayjs from "dayjs";

import "./App.css";

function App() {
  const day = dayjs().diff("2022-06-22", "days");

  return (
    <div className="App">
      <header className="App-header">
        <p>
          这是我们在一起的第
          <span style={{ color: "red", fontSize: "60px" }}>{day}</span>天
        </p>
      </header>
    </div>
  );
}

export default App;
