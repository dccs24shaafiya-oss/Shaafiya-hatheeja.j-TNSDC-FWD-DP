3. Student Digital Portfolio in JavaScript Only

This uses JavaScript to generate and insert portfolio content dynamically.

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>JavaScript Portfolio</title>
</head>
<body>
  <h1>My Digital Portfolio</h1>
  <div id="portfolio"></div>

  <script>
    // Portfolio data in JavaScript
    const portfolio = {
      name: "John Doe",
      about: "I am a student learning JavaScript and web development.",
      projects: ["Calculator App", "To-Do List", "Game Development"],
      skills: ["JavaScript", "HTML", "CSS"],
      contact: "john.doe@example.com"
    };

    // Display portfolio in the page
    const container = document.getElementById("portfolio");
    container.innerHTML = `
      <h2>About Me</h2>
      <p>${portfolio.about}</p>
      <h2>Projects</h2>
      <ul>${portfolio.projects.map(p => `<li>${p}</li>`).join("")}</ul>
      <h2>Skills</h2>
      <p>${portfolio.skills.join(", ")}</p>
      <h2>Contact</h2>
      <p>${portfolio.contact}</p>
    `;
  </script>
</body>
</html>
