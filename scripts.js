// Example: Add interactivity to the dashboard stats
document.addEventListener("DOMContentLoaded", () => {
  const statCards = document.querySelectorAll(".stat-card");

  statCards.forEach((card) => {
    card.addEventListener("click", () => {
      alert(`You clicked on: ${card.querySelector("h3").innerText}`);
    });
  });

  // Example: Form submission handling
  const userForm = document.querySelector(".user-form");
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    alert(`User Added:\nName: ${name}\nEmail: ${email}\nRole: ${role}`);
  });
});
