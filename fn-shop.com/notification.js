const not_skins = [
    { name: 'Pakiet Wiktori', src: 'https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/273022165_120818970476926_7373656451181760057_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_ohc=AVCXapPRo_0AX_BJZ4U&_nc_ht=scontent-waw1-1.xx&oh=00_AT8MtQeodRnkgXrRqYuEqiFbJv9KETwWgzM2OS0YK_Jc6w&oe=61FC54A7', id: 0 },
    { name: 'Pakiet Dagmary', src: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/258842078_452534636520737_6620002543216131189_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=m1MC5P1jmagAX_2iXvX&_nc_ht=scontent-waw1-1.xx&oh=03_AVI5hm0MWRRtquoTTFrmKIk7H4KEDSt2CYq8ObGPTIZozA&oe=621D2918', id: 0 },
    { name: 'Pakiet Kingi', src: 'https://scontent-waw1-1.xx.fbcdn.net/v/t1.15752-9/272417351_698344957992284_222541421002714985_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=ae9488&_nc_ohc=xY0DUXWhBo0AX_tl3JH&_nc_ht=scontent-waw1-1.xx&oh=03_AVKf_MIDzLGFTdjt-REh4hdgvCgcv1OxKxk5syhjvOWijw&oe=621C6F00', id: 0 },
];

const not_locations = [
    'Polsce',
    'Polsce',
    'Polsce',
    'Polsce',
    'Niemczech',
    'Niemczech',
    'Niemczech',
    'Niemczech',
    'Niemczech',
    'Francji',
    'Ukrainie',
];

const notificationBox = document.querySelector('.notification');
const locationSpan = document.querySelector('.location');
const skinSpan = document.querySelector('.notification-skin');
const notimgs = document.querySelector('.notification-image');

function notify() {
    const delay = Math.floor(Math.random() * (9500 - 5000)) + 5000;
    let randomSkin = Math.floor(Math.random() * Math.floor(16));
    const randomLocation = Math.floor(Math.random() * Math.floor(13));

    setTimeout(() => {
        locationSpan.textContent = not_locations[randomLocation];
        randomSkin2 = not_skins[randomSkin];
        console.log(randomSkin2);
        skinSpan.textContent = randomSkin2['name'];
        notimgs.src = randomSkin2.src;
        notificationBox.style.display = 'flex';
        const skinId = randomSkin2.id;
        skinSpan.id = skinId;
        // slideInUp
        setTimeout(() => {
            notificationBox.classList.remove('tada');
            notificationBox.classList.add('zoomOut');
            //   notificationBox.style.display = 'none';
        }, 5000);
        notificationBox.classList.add('tada');
        notificationBox.classList.remove('zoomOut');
    }, delay);
}
setInterval(notify, 15000);