// Role-based navigation and logout
    const currentRole = sessionStorage.getItem('userRole');
    const userInfoDiv = document.getElementById('userInfo');
    const userRoleSpan = document.getElementById('userRoleDisplay');
    const navLinksUl = document.getElementById('navLinks');

    function updateNavigation() {
        if (currentRole) {
            // Show logout, hide login/register
            const loginLink = navLinksUl.querySelector('a[href="login.html"]')?.parentElement;
            const registerLink = navLinksUl.querySelector('a[href="register.html"]')?.parentElement;
            if (loginLink) loginLink.style.display = 'none';
            if (registerLink) registerLink.style.display = 'none';
            userInfoDiv.style.display = 'flex';
            userRoleSpan.textContent = currentRole;
            // Add role-specific links dynamically
            const roleLinks = {
                'Project Institution': ['project_upload.html'],
                'Financing Institution': ['fund_release.html'],
                'Regulatory Authority': ['regulator_dashboard.html', 'ai_dashboard.html', 'satellite_monitoring.html']
            };
            if (roleLinks[currentRole]) {
                roleLinks[currentRole].forEach(link => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = link;
                    a.textContent = link.replace('.html','').replace('_',' ').toUpperCase();
                    li.appendChild(a);
                    navLinksUl.appendChild(li);
                });
            }
            // Also add AI and sat for Financing if not regulator
            if (currentRole === 'Financing Institution') {
                const aiLi = document.createElement('li');
                const aiA = document.createElement('a');
                aiA.href = 'ai_dashboard.html';
                aiA.textContent = 'AI DASHBOARD';
                aiLi.appendChild(aiA);
                navLinksUl.appendChild(aiLi);
                const satLi = document.createElement('li');
                const satA = document.createElement('a');
                satA.href = 'satellite_monitoring.html';
                satA.textContent = 'SATELLITE';
                satLi.appendChild(satA);
                navLinksUl.appendChild(satLi);
            }
        } else {
            // Not logged in, show login/register
            userInfoDiv.style.display = 'none';
        }
    }

    document.getElementById('logoutBtn')?.addEventListener('click', () => {
        sessionStorage.clear();
        window.location.href = 'index.html';
    });

    updateNavigation();