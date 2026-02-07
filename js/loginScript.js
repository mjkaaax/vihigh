document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const username = document.querySelector('.username').value;
	const password = document.querySelector('.password').value;
	
	if (!username || !password) {
		alert('All fields are required.');
		return;
	}
	
	const users = JSON.parse(localStorage.getItem('users')) || [];
	
	const user = users.find(u => u.username === username && u.password === password);
	
	if (user) {
		localStorage.setItem('loggedInUser', JSON.stringify(user));
		alert('Login successful!');
		
		setTimeout(() => {
			window.location.href = 'homePage.html';
		}, 1000);
	} else {
		alert('Invalid username or password');
	}
});