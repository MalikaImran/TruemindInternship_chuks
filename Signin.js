// ===== PASSWORD TOGGLE FUNCTIONALITY =====
const togglePasswordBtn = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePasswordBtn.addEventListener('click', function() {
    // Toggle password visibility
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    
    // Toggle eye icon
    const icon = this.querySelector('i');
    if (type === 'password') {
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    } else {
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    }
});

// ===== FORM SUBMISSION HANDLING =====
const signinForm = document.getElementById('signinForm');

signinForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[\d\s-()]+$/;
    
    if (!emailPattern.test(email) && !phonePattern.test(email)) {
        alert('Please enter a valid email or phone number');
        return;
    }
    
    // Success message (in a real app, this would connect to backend)
    console.log('Form submitted:', { email, password });
    alert('Sign in functionality would connect to backend here!\n\nEmail/Phone: ' + email);
    
    // Optional: Clear form
    // signinForm.reset();
});

// ===== INPUT FOCUS EFFECTS =====
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.01)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// ===== SOCIAL LOGIN BUTTONS =====
const googleBtn = document.querySelector('.btn-google');
const appleBtn = document.querySelector('.btn-apple');

googleBtn.addEventListener('click', function() {
    alert('Google Sign-In would be implemented here with OAuth integration');
    console.log('Google sign-in clicked');
});

appleBtn.addEventListener('click', function() {
    alert('Apple Sign-In would be implemented here with Apple ID integration');
    console.log('Apple sign-in clicked');
});

// ===== SMOOTH SCROLLING FOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== LOADING STATE FOR CONTINUE BUTTON =====
const continueBtn = document.querySelector('.btn-continue');
let isLoading = false;

function setLoadingState(loading) {
    isLoading = loading;
    if (loading) {
        continueBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing in...';
        continueBtn.disabled = true;
        continueBtn.style.opacity = '0.7';
    } else {
        continueBtn.innerHTML = 'Continue';
        continueBtn.disabled = false;
        continueBtn.style.opacity = '1';
    }
}

// ===== FORM VALIDATION ON INPUT =====
const emailInput = document.getElementById('email');

emailInput.addEventListener('input', function() {
    const value = this.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+?[\d\s-()]+$/;
    
    if (value.length > 0 && !emailPattern.test(value) && !phonePattern.test(value)) {
        this.style.borderColor = '#ff6b6b';
    } else {
        this.style.borderColor = '#d0d0d0';
    }
});

passwordInput.addEventListener('input', function() {
    const value = this.value;
    
    if (value.length > 0 && value.length < 6) {
        this.style.borderColor = '#ff6b6b';
    } else {
        this.style.borderColor = '#d0d0d0';
    }
});

// ===== PREVENT FORM RESUBMISSION =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}

// ===== LOG PAGE LOAD =====
console.log('Chuki Kitchen Sign-In page loaded successfully');
console.log('Frontend-only implementation - no backend required');