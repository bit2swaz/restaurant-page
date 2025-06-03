export default function loadHome() {
    const home = document.createElement('div');
    home.classList.add('section');
    home.innerHTML = `
        <h1 class="page-title">Welcome to FlavorFi</h1>
        <p>Experience the finest dining in town. Our restaurant offers a perfect blend of traditional and modern cuisine in a cozy atmosphere.</p>
        <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800" 
             alt="Cozy restaurant interior"
             style="width: 100%; max-width: 600px; border-radius: 8px; margin: 20px auto; display: block; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" />
    `;
    return home;
} 