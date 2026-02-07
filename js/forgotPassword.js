document.getElementById('forgot-form').addEventListener('submit', function(event) {
	event.preventDefault();
	
	const username = document.querySelector('.username').value;
	const newPassword = document.querySelector('.newPassword').value;
	const confirmPassword = document.querySelector('.confirmPassword').value;
	
	if (!username || !newPassword || !confirmPassword) {
		alert('All fields are required.');
		return;
	}
	
	if (newPassword.length < 8) {
		alert('Password must be at least 8 characters long.');
		return;
	}
	
	if (newPassword !== confirmPassword) {
		alert('Passwords do not match.');
		return;
	}
	
	const users = JSON.parse(localStorage.getItem('users')) || [];
	const userIndex = users.findIndex(u => u.username === username);

	if (userIndex === -1) {
		alert('User not found.');
		return;
	}
	
	users[userIndex].password = newPassword;
	localStorage.setItem('users', JSON.stringify(users));
	
	alert('Password reset successful! Redirecting to login page...');
	
	setTimeout(() => {
		window.location.href='loginPage.html';
	}, 1000);
});