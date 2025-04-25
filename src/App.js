import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import "./components/rotatingCircle/RotatingCircle.css";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
        <div className="rotating-circle">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="150"
              cy="150"
              r="100"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />

            <circle
              cx="150"
              cy="150"
              r="70"
              fill="none"
              stroke="black"
              strokeWidth="3"
            />

            <defs>
              <path
                id="midCirclePath"
                d="M150,65
             a85,85 0 1,1 -0.01,0"
              />
            </defs>

            <text fontSize="14" fill="black">
              <textPath
                href="#midCirclePath"
                startOffset="50%"
                textAnchor="auto"
                alignmentBaseline="middle"
                // dominantBaseline="middle"
                style={{ fontSize: "20px" }}
              >
                Open to new opportunities
              </textPath>
            </text>
          </svg>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
