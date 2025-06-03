export default function loadContact() {
    const contact = document.createElement('div');
    contact.classList.add('section');
    contact.innerHTML = `
        <h1 class="page-title">Contact Us</h1>
        <div class="contact-info" style="margin-bottom: 20px;">
            <p><strong>Address:</strong> 123 Restaurant Street, Foodville, FC 12345</p>
            <p><strong>Phone:</strong> (555) 123-4567</p>
            <p><strong>Email:</strong> info@flavorfi.com</p>
            <p><strong>Hours:</strong></p>
            <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
            <p>Saturday - Sunday: 10:00 AM - 11:00 PM</p>
        </div>
        <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800" 
             alt="Restaurant entrance"
             style="width: 100%; max-width: 600px; border-radius: 8px; margin: 20px auto; display: block; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" />
    `;
    return contact;
} 