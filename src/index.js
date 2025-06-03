import './style.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

function setActiveButton(button) {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

function clearContent() {
    const content = document.getElementById('content');
    content.innerHTML = '';
}

function loadPage(pageFunction, button) {
    clearContent();
    setActiveButton(button);
    const content = document.getElementById('content');
    content.appendChild(pageFunction());
}

document.addEventListener('DOMContentLoaded', () => {
    const homeBtn = document.getElementById('home-btn');
    const menuBtn = document.getElementById('menu-btn');
    const contactBtn = document.getElementById('contact-btn');

    // Initial load
    loadPage(loadHome, homeBtn);

    // Event listeners
    homeBtn.addEventListener('click', () => loadPage(loadHome, homeBtn));
    menuBtn.addEventListener('click', () => loadPage(loadMenu, menuBtn));
    contactBtn.addEventListener('click', () => loadPage(loadContact, contactBtn));
}); 