const fs = require("fs");

const htmlFilePath = "index.html";

function updateHtmlTime() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString();
  const updatedHtml = fs
    .readFileSync(htmlFilePath, "utf8")
    .replace(
      /<h1 id="currentTime"><\/h1>/,
      `<h1 id="currentTime">Current Time: ${formattedTime}</h1>`
    );
  fs.writeFileSync(htmlFilePath, updatedHtml, "utf8");
}

updateHtmlTime();
