const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

const imgFileNames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']
const imgAltTexts = [
  'Closeup of a human eye', 
  'Rock that looks like a wave',
  'Purple and white pansies',
  'Section of wall from a pharoah\'s tomb',
  'Large moth on a leaf',
]


for (let i = 0; i < imgFileNames.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `./images/${imgFileNames[i]}`);
  newImage.setAttribute('alt', imgAltTexts[i]);
  thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', (e) => {
  const target = e.target
  if(!target) return
  displayedImage.setAttribute('src', target.getAttribute('src'))
  displayedImage.setAttribute('alt', target.getAttribute('alt'))
})


btn.addEventListener('click', () => {
  overlay.classList.toggle('dark')
})
