document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('userForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const id = document.getElementById('id').value.trim();
        const name = document.getElementById('name').value.trim();

        if (!id || !name) {
            alert('Both ID and Name are required!');
            return;
        }

        try {
            const response = await fetch('/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: parseInt(id), name }),
            });

            if (!response.ok) {
                throw new Error('Failed to add user');
            }

            // Clear input fields
            document.getElementById('id').value = '';
            document.getElementById('name').value = '';
            fetchUsers();

        } catch (error) {
            console.error('Error adding user:', error); // Correct usage
            alert('Error adding user: ' + error.message);
        }
    });

    async function fetchUsers() {
        try {
            const response = await fetch('/api/get/users');
            const users = await response.json();
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            users.forEach((user) => {
                const li = document.createElement('li');
                li.textContent = `${user.id}: ${user.name}`;
                userList.appendChild(li);
            });
        } catch (err) {
            alert('Error fetching users: ' + err.message);
        }
    }

    // Fetch users on page load
    fetchUsers();

});