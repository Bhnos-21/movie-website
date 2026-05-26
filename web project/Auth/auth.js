document.addEventListener('DOMContentLoaded', () => {
    
    const signupForm = document.getElementById('signupForm');
    const signupError = document.getElementById('signupError'); 
    
    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            if(signupError) signupError.textContent = "";

            const name = document.getElementById('signupName').value.trim();
            const email = document.getElementById('signupEmail').value.trim();
            const password = document.getElementById('signupPassword').value;

            if (!name || !email || !password) {
                if(signupError) signupError.textContent = "Please fill in all fields.";
                return;
            }
            
            if (password.length < 6) {
                if(signupError) signupError.textContent = "Password must be at least 6 characters.";
                return;
            }

            let users = JSON.parse(localStorage.getItem('cinex_users')) || [];
            
            if (users.find(u => u.email === email)) {
                if(signupError) signupError.textContent = "Email already registered.";
                return;
            }

            const newUser = { name, email, password };
            users.push(newUser);
            
            localStorage.setItem('cinex_users', JSON.stringify(users));
            localStorage.setItem('cinex_session', JSON.stringify(newUser));

            window.location.href = '../Explore/explore.html'; 
        });
    }

    const loginForm = document.getElementById('loginForm');
    const loginError = document.getElementById('loginError');

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            if(loginError) loginError.textContent = "";

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value;

            if (!email || !password) {
                if(loginError) loginError.textContent = "Please enter email and password.";
                return;
            }

            let users = JSON.parse(localStorage.getItem('cinex_users')) || [];
            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem('cinex_session', JSON.stringify(user));
                window.location.href = '../Explore/explore.html';
            } else {
                if(loginError) loginError.textContent = "Invalid email or password.";
            }
        });
    }
});