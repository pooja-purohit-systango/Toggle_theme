import React, { useState, useEffect } from "react";
import "./Button.css"; // Import CSS file

const Button = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    
      if (theme === "dark") {
        document.getElementById("window").style.backgroundColor = "#333";
        document.getElementById("window").style.color = "white";
      } else {
        document.getElementById("window").style.backgroundColor = "white";
        document.getElementById("window").style.color = "black";
      }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="button-container">
      <button className="light-btn" onClick={() => setTheme("light")}>
        Light Mode
      </button>
      <button className="dark-btn" onClick={() => setTheme("dark")}>
        Dark Mode
      </button>
    </div>
  );
};

export default Button;
