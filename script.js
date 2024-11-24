const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close');
const forms = document.querySelectorAll('form');

// Toggle between Login and Register
registerlink.addEventListener('click', () => {
    console.log('Register link clicked, showing register form');
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () => {
    console.log('Login link clicked, showing login form');
    wrapper.classList.remove('active');
});

// Show Popup
btnPopup.addEventListener('click', () => {
    console.log('Login button clicked, displaying popup');
    wrapper.classList.add('active-popup');
    wrapper.style.transition = 'all 0.3s ease-in-out'; // Smooth transition
});

// Close Popup
iconClose.addEventListener('click', () => {
    console.log('Close icon clicked, hiding popup');
    wrapper.classList.remove('active-popup');
});

// Form Validation
forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const inputs = form.querySelectorAll('input');
        let valid = true;

        inputs.forEach((input) => {
            if (!input.value.trim()) {
                console.log(`Validation failed for input: ${input.placeholder}`);
                alert(`Please fill out the ${input.placeholder}`);
                valid = false;
            }
        });

        if (valid) {
            console.log('Form successfully validated and submitted');
            alert('Form submitted successfully!');
            form.reset();
            wrapper.classList.remove('active-popup'); // Close popup after submission
        }
    });
});

// Auto-fill Email (Example Feature)
loginlink.addEventListener('click', () => {
    const emailField = document.querySelector('input[name="email"]');
    if (emailField && !emailField.value) {
        console.log('Prefilling email field with a sample email: example@email.com');
        emailField.value = "example@email.com"; // Prefill with a sample email
    }
});

// Close Popup on Outside Click
document.addEventListener('click', (e) => {
    if (!wrapper.contains(e.target) && !e.target.closest('.btnLogin')) {
        console.log('Click detected outside popup, closing popup');
        wrapper.classList.remove('active-popup');
    }
});
