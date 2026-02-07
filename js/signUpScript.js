document.getElementById('signup-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const username = document.querySelector('.username').value.trim();
	const name = document.querySelector('.name').value.trim();
	const password = document.querySelector('.password').value;
	const confirmPassword = document.querySelector('.confirmPassword').value;
	
	if (!username || !name || !password || !confirmPassword) {
		alert('All fields are required.');
		return;
	}
	
	if (password.length < 8) {
		alert('Password must be at least 8 characters long.');
		return;
	}
	
	if (password !== confirmPassword) {
		alert('Passwords do not match.');
		return;
	}
	
	const users = JSON.parse(localStorage.getItem('users')) || [];
	
	users.push({
		username: username,
		password: password,
		displayName: name
	});
	
	localStorage.setItem('users', JSON.stringify(users));
	
	alert('User signed up successfully!');
	
	setTimeout(() => {
		window.location.href = 'loginPage.html';
	}, 1000);
});