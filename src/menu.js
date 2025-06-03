function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('section');

    const title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = 'Our Menu';

    const menuItems = document.createElement('div');
    menuItems.classList.add('menu-items');

    // Sample menu items
    const items = [
        { name: 'Classic Burger', price: '$12.99', description: 'Juicy beef patty with fresh vegetables' },
        { name: 'Margherita Pizza', price: '$14.99', description: 'Fresh tomatoes, mozzarella, and basil' },
        { name: 'Caesar Salad', price: '$8.99', description: 'Crisp romaine lettuce with our special dressing' }
    ];

    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <h3>${item.name}</h3>
            <p class="price">${item.price}</p>
            <p class="description">${item.description}</p>
        `;
        menuItems.appendChild(menuItem);
    });

    menu.appendChild(title);
    menu.appendChild(menuItems);

    return menu;
}

export default createMenu; 