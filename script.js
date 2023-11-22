const expandedText = document.getElementById('expandedText')
const readMoreBtn = document.getElementById('readMoreBtn')
let isExpanded = false;

readMoreBtn.addEventListener('click', () => {
    if (isExpanded)
    {
        expandedText.style.display = 'none'
        readMoreBtn.innerText = 'Read More'
    } else {
        expandedText.style.display = 'block'
        readMoreBtn.innerText = 'Read Less'
    }
    isExpanded = !isExpanded;
})

// Function to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get user inputs
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validate email
    if (!validateEmail(email)) {
        document.getElementById("responseMessage").innerHTML = "<p>Please enter a valid email address.</p>";
        return;
    }

    // You can handle the form data here, for example, by sending it to a server using AJAX

    // Display a success message
    document.getElementById("responseMessage").innerHTML = "<p>Thank you for your message!</p>";
});

// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible'); // If you want it to fade out again when out of view
            }
        });
    }, { threshold: 0.1 }); // The threshold controls when the callback is executed

    document.querySelectorAll('.content-section').forEach((section) => {
        observer.observe(section);
    });
});