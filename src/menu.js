export default function loadMenu() {
    const menu = document.createElement('div');
    menu.classList.add('section');
    menu.innerHTML = `
        <h1 class="page-title">Our Menu</h1>
        <div class="menu-items" style="margin-bottom: 20px;">
            <div class="menu-item" style="margin-bottom: 15px;">
                <h3>Classic Burger</h3>
                <p class="price">$12.99</p>
                <p class="description">Juicy beef patty with fresh vegetables</p>
            </div>
            <div class="menu-item" style="margin-bottom: 15px;">
                <h3>Margherita Pizza</h3>
                <p class="price">$14.99</p>
                <p class="description">Fresh tomatoes, mozzarella, and basil</p>
            </div>
            <div class="menu-item" style="margin-bottom: 15px;">
                <h3>Caesar Salad</h3>
                <p class="price">$8.99</p>
                <p class="description">Crisp romaine lettuce with our special dressing</p>
            </div>
        </div>
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800" 
             alt="Delicious food spread"
             style="width: 100%; max-width: 600px; border-radius: 8px; margin: 20px auto; display: block; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" />
    `;
    return menu;
} 