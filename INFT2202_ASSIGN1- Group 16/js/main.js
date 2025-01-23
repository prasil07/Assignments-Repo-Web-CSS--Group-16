/**
 * Student Name: Siraj Baral
 * Student ID: 100851233
 * Date of Completion: 23-24-25/01/2025
*/
const getInvolved = document.getElementById('getInvolved');

if (getInvolved) {
    getInvolved.addEventListener('click', () => {
        // to Opportunities page
        window.location.href = 'opportunities.html';
    });
}

// active page
const navLinks = document.querySelectorAll('.nav-link');
if (navLinks.length > 0) {
    const li = document.createElement('li');
    li.classList.add('nav-item');
    const a = document.createElement('a');
    a.classList.add('nav-link');
    a.href = '#';
    a.textContent = 'Donate';
    li.appendChild(a);
    document.querySelector('.navbar-nav').insertBefore(li, navLinks[1].nextSibling);

    navLinks[1].textContent = "Volunteer Now."

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
}