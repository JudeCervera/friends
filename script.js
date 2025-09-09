document.addEventListener('DOMContentLoaded', () => {

    const friends = [
        {
            id: 1,
            name: "Alice",
            imageUrl: "https://placehold.co/100x100/E4007C/white?text=A",
            bio: "Alice is a creative designer who loves photography and hiking on weekends. She's the heart of the group."
        },
        {
            id: 2,
            name: "Bob",
            imageUrl: "https://placehold.co/100x100/00E5FF/black?text=B",
            bio: "Bob is a software engineer with a passion for gaming and building complex Lego sets. The logical one."
        },
        {
            id: 3,
            name: "Charlie",
            imageUrl: "https://placehold.co/100x100/FFC700/black?text=C",
            bio: "Charlie is a musician who can play five instruments. He brings the rhythm and good vibes everywhere."
        },
        {
            id: 4,
            name: "Diana",
            imageUrl: "https://placehold.co/100x100/6A00FF/white?text=D",
            bio: "Diana is a travel blogger exploring the world one city at a time. She has the best stories to tell."
        },
        {
            id: 5,
            name: "Evan",
            imageUrl: "https://placehold.co/100x100/00A86B/white?text=E",
            bio: "Evan is a chef who loves experimenting with new recipes. He hosts the best dinner parties."
        },
        {
            id: 6,
            name: "Fiona",
            imageUrl: "https://placehold.co/100x100/FF6B00/white?text=F",
            bio: "Fiona is a fitness coach and a marathon runner. She motivates everyone to stay active and healthy."
        }
    ];

    const container = document.getElementById('cof-container');
    const numFriends = friends.length;
    const angleIncrement = 360 / numFriends;

    friends.forEach((friend, index) => {
        const angle = angleIncrement * index;

        const path = document.createElement('div');
        path.className = 'friend-path';
        path.style.transform = `rotate(${angle}deg)`;
        
        path.style.animationDelay = `-${(index / numFriends) * parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--animation-duration'))}s`;

        const line = document.createElement('div');
        line.className = 'line';

        const node = document.createElement('div');
        node.className = 'friend-node';
        node.dataset.id = friend.id;

        const img = document.createElement('img');
        img.src = friend.imageUrl;
        img.alt = friend.name;

        const name = document.createElement('span');
        name.className = 'friend-name';
        name.textContent = friend.name;
        
        node.style.transform = `translate(-50%, -50%) translateX(var(--orbit-radius)) rotate(${-angle}deg)`;
        node.style.setProperty('--hover-rotate-angle', `${-angle}deg`);

        node.addEventListener('mouseover', () => {
           node.style.transform = `translate(-50%, -50%) translateX(var(--orbit-radius)) rotate(${-angle}deg) scale(1.2)`;
        });
        node.addEventListener('mouseout', () => {
           node.style.transform = `translate(-50%, -50%) translateX(var(--orbit-radius)) rotate(${-angle}deg) scale(1)`;
        });

        node.appendChild(img);
        node.appendChild(name);
        path.appendChild(line);
        path.appendChild(node);
        container.appendChild(path);
    });

    const modal = document.getElementById('friend-modal');
    const modalImg = document.getElementById('modal-img');
    const modalName = document.getElementById('modal-name');
    const modalBio = document.getElementById('modal-bio');
    const closeButton = document.querySelector('.close-button');

    container.addEventListener('click', (e) => {
        const friendNode = e.target.closest('.friend-node');
        if (friendNode) {
            const friendId = parseInt(friendNode.dataset.id, 10);
            const friendData = friends.find(f => f.id === friendId);
            
            if (friendData) {
                modalImg.src = friendData.imageUrl;
                modalName.textContent = friendData.name;
                modalBio.textContent = friendData.bio;
                modal.classList.add('active');
            }
        }
    });

    const closeModal = () => {
        modal.classList.remove('active');
    };

    closeButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
});