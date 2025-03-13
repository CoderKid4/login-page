function switchToRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    
    document.getElementById('registerswitch-btn').textContent = 'Back to Login';
    document.getElementById('registerswitch-btn').setAttribute('onclick', 'switchToLogin()');
    
    document.getElementById('back-to-login-btn').style.display = 'block'; // Show the back-to-login button
  }

  // Switch to Login form
  function switchToLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    
    document.getElementById('registerswitch-btn').textContent = 'Register';
    document.getElementById('registerswitch-btn').setAttribute('onclick', 'switchToRegister()');
    
    document.getElementById('back-to-login-btn').style.display = 'none'; // Hide the back-to-login button
  }

  // Toggle password visibility
  function toggle() {
    let password_input = document.getElementById('password_input');
    let toggle_button = document.getElementById('toggle_button');

    if (password_input.type === 'password') {
      password_input.type = 'text';
      toggle_button.innerHTML = `...`; // change to the other icon
    } else {
      password_input.type = 'password';
      toggle_button.innerHTML = `...`; // original icon
    }
  }

  // Handle Register
  document.getElementById('back-to-login-bnt').addEventListener('click', function() {
    const email = document.getElementById('email_input').value;
    const password = document.getElementById('password_input').value;
    const age = document.getElementById('age_input').value;
    const gender = document.getElementById('gender_input').value;

    if (email && password && age && gender) {
      // Store user data in localStorage
      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);
      localStorage.setItem('userAge', age);
      localStorage.setItem('userGender', gender);

      alert('Registration successful! You can now log in.');
      switchToLogin();
    } else {
      alert('Please fill in all fields');
    }
  });

  // Handle Login
  document.querySelector('.login-btn').addEventListener('click', function() {
    const email = document.getElementById('email_input').value;
    const password = document.getElementById('password_input').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
      alert('Welcome back, ' + storedEmail);
    } else {
      alert('Invalid email or password');
    }
  });
