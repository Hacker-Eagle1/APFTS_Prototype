    document.getElementById('loginBtn').addEventListener('click', () => {
        const role = document.getElementById('roleSelect').value;
        sessionStorage.setItem('userRole', role);
        window.location.href = 'index.html';
    });