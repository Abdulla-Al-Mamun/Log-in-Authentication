// Register Functionality
document.getElementById('registerForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = { name, email, password };

    localStorage.setItem(email, JSON.stringify(user));
    alert('Registration successful!');
    window.location.href = 'index.html'; // Redirect to login page
});

// Login Functionality
document.getElementById('loginForm')?.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUser = JSON.parse(localStorage.getItem(email));

    if (storedUser && storedUser.password === password) {
        window.location.href = 'homePage.html'; // Redirect to Mantasha Page
    } else {
        alert('Invalid email or password.');
    }
});
