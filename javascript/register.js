    function registerInstitution() {
        const roleMap = { 'Financing Institution': 'Financing Institution', 'Project Institution': 'Project Institution', 'Regulatory Body': 'Regulatory Authority' };
        const selected = document.getElementById('instRole').value;
        const role = roleMap[selected];
        if(role) sessionStorage.setItem('userRole', role);
        alert(`Registration successful as ${role}. You can now login.`);
        window.location.href = 'login.html';
    }
    function registerCitizen() {
        sessionStorage.setItem('userRole', 'Public/Citizen');
        alert('Citizen account created. You can login with public access.');
        window.location.href = 'login.html';
    }