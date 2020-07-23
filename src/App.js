import React, { useState } from "react";

import ProgressBar from "./ProgressBar";

function App() {
  const [value, setValue] = useState(-10);

  return (
    <div className="App">
      <ProgressBar
        min={-50}
        width={400}
        height={50}
        max={50}
        value={value}
        text={(value, min, max) => String((((value - min) * 100) / (max - min))) + "%"}
      />
    </div>
  );
}

export default App;
