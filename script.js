document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Show confirmation tick mark after successful sign up
    const confirmationMessage = document.getElementById("confirmation");
    confirmationMessage.style.display = "block";

    // Show the "Go to Quiz Game" link with animation
    const quizLink = document.getElementById("quizLink");
    quizLink.style.display = "inline-block"; // Make it visible

    // Optional: You can also add some logic for handling the actual quiz navigation
});
