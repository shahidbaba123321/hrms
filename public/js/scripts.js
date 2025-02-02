// Login Form Submission
document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  const response = await fetch('https://your-backend.onrender.com/api/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('role', data.role);
    window.location.href = 'dashboard.html';
  } else {
    alert(data.error || 'Login failed');
  }
});

// Register Form Submission
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;

  const response = await fetch('https://your-backend.onrender.com/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role })
  });

  const data = await response.json();
  if (response.ok) {
    alert('Registration successful! Please log in.');
    window.location.href = 'login.html';
  } else {
    alert(data.error || 'Registration failed');
  }
});

// Dashboard Role Display
document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || !role) {
    alert('Access denied. Please log in.');
    window.location.href = 'login.html';
  }

  const response = await fetch('https://your-backend.onrender.com/api/dashboard', {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
  });

  const data = await response.json();
  if (response.ok) {
    document.getElementById('roleDisplay').innerText = `Role: ${data.message}`;
  } else {
    alert('Access denied. Invalid token.');
    window.location.href = 'login.html';
  }
});

// Logout Functionality
function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  window.location.href = 'login.html';
}
