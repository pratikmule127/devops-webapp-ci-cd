// Interactive button demo
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('demo-btn');
    const output = document.getElementById('demo-output');

    if(btn) {
        btn.addEventListener('click', () => {
            output.textContent = 'Hello! This is a live demo message from JS.';
            output.style.color = '#4CAF50';
        });
    }

    // Contact form demo
    const form = document.getElementById('contact-form');
    const msg = document.getElementById('form-msg');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        msg.textContent = "Message sent successfully! (Demo)";
        msg.style.color = "#4CAF50";
        form.reset();
    });
});
