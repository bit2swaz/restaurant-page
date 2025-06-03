function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('section');

    const title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = 'Contact Us';

    const info = document.createElement('div');
    info.classList.add('contact-info');
    info.innerHTML = `
        <p><strong>Address:</strong> 123 Restaurant Street, Foodville, FC 12345</p>
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> info@ourrestaurant.com</p>
        <p><strong>Hours:</strong></p>
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
    `;

    contact.appendChild(title);
    contact.appendChild(info);

    return contact;
}

export default createContact; 