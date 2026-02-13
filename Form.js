const validateBtn = document.querySelector('#validate');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('#passInput');
const toggleIcon = document.querySelector('#toggleIcon');

// --- Feature 1: Toggle Password Visibility & Icon ---
toggleIcon.addEventListener('click', function() {
    // Toggle the type attribute
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle the icon class (eye vs eye-slash)
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
});

// --- Feature 2: Regex Validation ---
validateBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Invalid Email!");
        return;
    }

    if (!passwordRegex.test(passwordInput.value.trim())) {
        alert("Password must be 8+ chars with letters and numbers.");
        return;
    }

    alert("Success!");
});