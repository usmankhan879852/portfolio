// Theme: follow the system setting, remember the visitor's choice
const root = document.documentElement;
const saved = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
root.dataset.theme = saved || (prefersDark ? "dark" : "light");
document.getElementById("theme").addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  localStorage.setItem("theme", next);
});

document.getElementById("year").textContent = new Date().getFullYear();

// Contact form: opens the visitor's email app with the message filled in
document.getElementById("send").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const note = document.getElementById("note");
  if (!name || !email || !message) {
    note.textContent = "Please fill in your name, email and message.";
    return;
  }
  const subject = encodeURIComponent("Portfolio message from " + name);
  const body = encodeURIComponent(message + "\n\n" + name + "\n" + email);
  window.location.href = "mailto:usmankhan879852@gmail.com?subject=" + subject + "&body=" + body;
  note.textContent = "Opening your email app...";
});
