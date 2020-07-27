import { getUser } from '../userUtils.js';

const user = getUser();
const restartButton = document.getElementById('play-again');

let lose = {
    title: 'You failed!',
    description: `${user.name}, you let Monsieur Bovarian escape, even with ${user.clue} clues! Poirot is so disappointed. Another rich old cortisan will probably be murdered now. Way to go.`,
    image: '../assets/fail.jpg'
};

let win = {
    title: 'You caught him!',
    description: `You did it, ${user.name}! You caught Monsieur Bovarian as he was trying to escape, and he's really put out about it. You found ${user.clue} clues and had ${user.hp} sleuth points. Poirot is most impressed.`,
    image: '../assets/winner.jpg'
};

function renderResult(result) {
    const resultDiv = document.getElementById('results');
    const section = document.createElement('section');
    resultDiv.append(section);

    const title = document.createElement('div');
    title.textContent = result.title;

    const img = document.createElement('img');
    img.src = result.image;

    const description = document.createElement('div');
    description.textContent = result.description;

    section.append(title, img, description);
}

if (user.hp <= 0) {
    renderResult(lose);
} else {
    renderResult(win);
}

restartButton.addEventListener('click', () => {
    localStorage.setItem('USER', 'fresh user');
    window.location = '../index.html';
});