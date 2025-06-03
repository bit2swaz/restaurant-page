function createHome() {
    const home = document.createElement('div');
    home.classList.add('section');

    const title = document.createElement('h1');
    title.classList.add('page-title');
    title.textContent = 'Welcome to Our Restaurant';

    const description = document.createElement('p');
    description.textContent = 'Experience the finest dining in town. Our restaurant offers a perfect blend of traditional and modern cuisine in a cozy atmosphere.';

    home.appendChild(title);
    home.appendChild(description);

    return home;
}

export default createHome; 