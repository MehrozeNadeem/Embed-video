const authContainer = document.getElementById("authContainer");
const toggleSignIn = document.getElementById("toggleSignIn");

toggleSignIn.addEventListener("click", () => {
    authContainer.innerHTML = `
                <h2>Sign In</h2>
                <form class="auth-form" action="signin_process.php" method="POST">
                    <input type="text" name="username" placeholder="Username" required>
                    <input type="password" name="password" placeholder="Password" required>
                    <button type="submit">Sign In</button>
                </form>
                <div class="auth-toggle">
                    Don't have an account? <button id="toggleSignUp">Sign Up</button>
                </div>
            `;

    const toggleSignUp = document.getElementById("toggleSignUp");

    toggleSignUp.addEventListener("click", () => {
        authContainer.innerHTML = `
                    <h2>Sign Up</h2>
                    <form class="auth-form" action="" method="POST">
                        <input type="text" name="username" placeholder="Username" required>
                        <input type="email" name="email" placeholder="Email" required>
                        <input type="password" name="password" placeholder="Password" required>
                        <button type="submit">Sign Up</button>
                    </form>
                    <div class="auth-toggle">
                        Already have an account? <button id="toggleSignIn">Sign In</button>
                    </div>
                `;

        toggleSignIn.addEventListener("click", () => {
            // Swap back to Sign In form
            // You can implement this similarly if needed
        });
    });
});