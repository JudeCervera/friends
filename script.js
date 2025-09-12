document.addEventListener('DOMContentLoaded', () => {

    const you = {
        name: "Jude Cervera",
        bio: "A passionate developer creating interactive and meaningful web experiences. Let's connect!",
        imageUrl: "images/you.jpg",
        facebookUrl: "https://www.facebook.com/judeanthonycervera/",
        websiteUrl: "https://judecervera.ct.ws"
    };

    const friends = [
        {
            id: 1,
            name: "Alice",
            imageUrl: "images/alice.svg",
            bio: "Alice is a creative designer who loves photography and hiking on weekends. She's the heart of the group.",
            facebookUrl: "https://www.facebook.com/alice-profile"
        },
        {
            id: 2,
            name: "Bob",
            imageUrl: "images/Bob.svg",
            bio: "Bob is a software engineer with a passion for gaming and building complex Lego sets. The logical one.",
            facebookUrl: "https://www.facebook.com/bob-profile"
        },
        {
            id: 3,
            name: "Charlie",
            imageUrl: "images/charlie.svg",
            bio: "Charlie is a musician who can play five instruments. He brings the rhythm and good vibes everywhere.",
            facebookUrl: "https://www.facebook.com/charlie-profile"
        },
        {
            id: 4,
            name: "Diana",
            imageUrl: "images/diana.svg",
            bio: "Diana is a travel blogger exploring the world one city at a time. She has the best stories to tell.",
            facebookUrl: "https://www.facebook.com/diana-profile"
        },
        {
            id: 5,
            name: "Evan",
            imageUrl: "images/evan.svg",
            bio: "Evan is a chef who loves experimenting with new recipes. He hosts the best dinner parties.",
            facebookUrl: "https://www.facebook.com/evan-profile"
        },
        {
            id: 6,
            name: "Fiona",
            imageUrl: "images/fiona.svg",
            bio: "Fiona is a fitness coach and a marathon runner. She motivates everyone to stay active and healthy.",
            facebookUrl: "https://www.facebook.com/fiona-profile"
        }
    ];

    const facebookIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>`;
    const websiteIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.045 18.001c-1.144-.393-2.126-1.129-2.88-2.079l.501-1.31c.362.435.768.835 1.201 1.189.832.68 1.833 1.143 2.956 1.348-1.077.565-2.298.914-3.593 1.055-.06-.115-.113-.234-.185-.303zm-1.655-3.619c-.432-.693-.735-1.463-.902-2.279h4.379c-.218.847-.611 1.62-1.144 2.279-1.011 1.259-2.459 1.956-3.791 1.956.126-.411.233-.832.325-1.259.043-.203.078-.409.111-.617.295-.084.582-.191.859-.319.497-.228.956-.525 1.365-.898.199-.179.39-.371.565-.576.456-.519.825-1.103 1.096-1.748-.024.015 0 0 0 0zm.049-4.382c-.139-.773-.424-1.503-.842-2.152.193 1.011.026 2.059-.496 2.923-.538.895-1.35 1.583-2.316 2.02-.638.291-1.328.463-2.029.511.05-.519.208-1.019.463-1.474.341-.589.789-1.118 1.32-1.554.417-.354.896-.649 1.417-.881.018-.008.037-.016.056-.024zm3.763-3.692c.319.539.554 1.123.693 1.748h-2.924c.261-.599.646-1.139 1.127-1.564.444-.389.957-.696 1.511-.902-.271.218-.521.455-.749.722-.128.151-.252.308-.368.471zm-2.112-2.308c1.119.388 2.091 1.121 2.825 2.079l-.538 1.282c-.372-.459-.806-.856-1.268-1.203-.822-.68-1.815-1.143-2.919-1.348 1.109-.544 2.34-.874 3.655-1.011.036.06.071.12.106.182.026.046.052.092.078.139.009.017.018.033.027.05zm-.105 14h2.106c1.141-.393 2.125-1.128 2.87-2.079l-.512-1.291c-.352.433-.748.825-1.173 1.171-.84.693-1.859 1.161-3.003 1.366 1.071.572 2.29.929 3.614 1.073-.024.088-.057.171-.088.256-.051.138-.106.273-.169.404h.001zm3.899-3.619c1.033-1.272 1.637-2.879 1.637-4.639h-3.79c.28.611.458 1.265.518 1.944.381 0 .74-.038 1.073-.111.428-.094.832-.244 1.206-.445.545-.292 1.021-.692 1.373-1.189l1.246.565c-.808 1.242-1.921 2.204-3.266 2.829zm2.259-3.381c.081-.663.049-1.332-.088-1.983.824 1.258 1.003 2.768.513 4.148-.711 1.993-2.522 3.424-4.666 3.424.12-.423.216-.856.286-1.297.026-.164.053-.327.072-.493.578-.179 1.119-.481 1.603-.898.663-.563 1.201-1.309 1.571-2.179.124-.291.229-.59.325-.892.016-.051.03-.102.046-.153l.036-.12zm.482-3.618h3.337c-.313 1.175-.898 2.263-1.688 3.193l-1.178-.713c.484-.565.845-1.258 1.034-2.021.121-.49.186-1 .186-1.517.037-.481-.048-1.463-.691-2.459zm-1.168-3.085l-1.196.697c.501.815.792 1.758.825 2.744h3.374c-.066-1.23-.429-2.399-1.038-3.483l-1.16.63c.451.621.79 1.319.988 2.053-.02-.128-.052-.255-.093-.382zm-8.307 5.085c0-2.333 1.657-4.283 3.824-4.659.278-1.243.914-2.378 1.838-3.313 1.266-1.282 2.923-2.029 4.704-2.029s3.438.747 4.704 2.029c.924.935 1.56 2.07 1.838 3.313 2.167.376 3.824 2.326 3.824 4.659s-1.657 4.283-3.824 4.659c-.278 1.243-.914 2.378-1.838-3.313-1.266-1.282-2.923 2.029-4.704 2.029s-3.438-.747-4.704-2.029c-.924-.935-1.56-2.07-1.838-3.313-2.167-.376-3.824-2.326-3.824-4.659z"/></svg>`;

    const container = document.getElementById('cof-container');
    const centerNode = document.querySelector('.center-node');
    const modal = document.getElementById('friend-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalBio = document.getElementById('modal-bio');
    const modalLinks = document.getElementById('modal-links');
    const closeButton = document.querySelector('.close-button');

    const numFriends = friends.length;
    const angleIncrement = 360 / numFriends;

    friends.forEach((friend, index) => {
        const angle = angleIncrement * index;
        const animationDelay = index * 0.15;

        const path = document.createElement('div');
        path.className = 'friend-path';
        path.style.transform = `rotate(${angle}deg)`;

        const orbitDuration = getComputedStyle(document.documentElement).getPropertyValue('--animation-duration');
        path.style.animationDelay = `-${(index / numFriends) * parseFloat(orbitDuration)}s`;

        const line = document.createElement('div');
        line.className = 'line';
        line.style.animationDelay = `${animationDelay}s`;

        const node = document.createElement('div');
        node.className = 'friend-node';
        node.dataset.id = friend.id;

        node.style.transform = `translate(-50%, -50%) translateX(var(--orbit-radius)) rotate(${-angle}deg)`;
        node.style.animationDelay = `${animationDelay}s`;

        const img = document.createElement('img');
        img.src = friend.imageUrl;
        img.alt = friend.name;

        const name = document.createElement('span');
        name.className = 'friend-name';
        name.textContent = friend.name;

        node.appendChild(img);
        node.appendChild(name);
        path.appendChild(line);
        path.appendChild(node);
        container.appendChild(path);
    });

    const openModal = (data) => {
        modalImg.src = data.imageUrl;
        modalName.textContent = data.name;
        modalBio.textContent = data.bio;

        modalLinks.innerHTML = '';
        if (data.facebookUrl) {
            const fbLink = document.createElement('a');
            fbLink.href = data.facebookUrl;
            fbLink.target = '_blank';
            fbLink.rel = 'noopener noreferrer';
            fbLink.title = 'Facebook';
            fbLink.innerHTML = facebookIconSVG;
            modalLinks.appendChild(fbLink);
        }
        if (data.websiteUrl) {
            const webLink = document.createElement('a');
            webLink.href = data.websiteUrl;
            webLink.target = '_blank';
            webLink.rel = 'noopener noreferrer';
            webLink.title = 'Personal Website';
            webLink.innerHTML = websiteIconSVG;
            modalLinks.appendChild(webLink);
        }

        modal.classList.add('active');
    };
    
    const closeModal = () => {
        modal.classList.remove('active');
    };

    container.addEventListener('click', (e) => {
        const friendNode = e.target.closest('.friend-node');
        if (friendNode) {
            const friendId = parseInt(friendNode.dataset.id, 10);
            const friendData = friends.find(f => f.id === friendId);
            if (friendData) {
                openModal(friendData);
            }
        }
    });

    centerNode.addEventListener('click', () => {
        openModal(you);
    });

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});