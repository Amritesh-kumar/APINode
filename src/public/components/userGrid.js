// Fetch and display all users
async function fetchUsers() {
    try {
        const response = await fetch('/api/get/users');
        const users = await response.json();

        const tableBody = document.getElementById('userTableBody');
        tableBody.innerHTML = '';

        users.forEach(user => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td><span class="details-btn" onclick="viewDetails(${user.id})">View Details</span></td>
            `;

            tableBody.appendChild(row);
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

// Fetch and display user details
async function viewDetails(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        const user = await response.json();

        const detailsContent = document.getElementById('detailsContent');
        detailsContent.innerHTML = `
            <strong>ID:</strong> ${user.id}<br>
            <strong>Name:</strong> ${user.name}<br>
            <strong>Email:</strong> ${user.email}<br>
            <strong>Phone:</strong> ${user.phone}<br>
            <strong>Address:</strong> ${user.address}
        `;
    } catch (error) {
        console.error('Error fetching user details:', error);
    }
}

// Initial fetch
fetchUsers();