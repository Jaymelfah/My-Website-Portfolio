const hamburgerPopup = document.querySelector('.nav-toggle');
const menuIcons = document.querySelectorAll('.menu_icons > a');

hamburgerPopup.addEventListener('click', () => {
  document.body.classList.toggle('hamburger-open');
});

menuIcons.forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.remove('hamburger-open');
  });
});

// An array containing all properties of projects

const cardArray = [{
  name: 'Card1',
  title: 'Multi-Post Stories',
  description: `A daily section of privately personalized reads; no accounts or signups required.
                This has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a standard dummy text.`,
  image: './Images/Gym.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  technology4: 'ruby',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Card2',
  title: 'Data-Dashboard',
  title2: 'Healthcare',
  description: `A daily section of privately personalized reads; no accounts or signups
                required It has been the industry's standard.`,
  image: './Images/Card3-Card5-img.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Card3',
  title: 'Professional Art',
  title2: 'Printing Data More',
  description: `A daily section of privately personalized reads; no accounts or signups
                required It has been the industry's standard.`,
  image: './Images/Professional art printing.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Card4',
  title: 'Website Portfolio',
  description: `A daily section of privately personalized reads; no accounts or signups
                required It has been the industry's standard.`,
  image: './Images/Professional art printing.svg',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project5',
  title: 'Medical Illustration Sets',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Project 3.png',
  technology1: 'html',
  technology2: 'bootstrap',
  technology3: 'Ruby on rails',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project6',
  title: 'Website Portfolio',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Snapshoot Portfolio.png',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project7',
  title: 'Multi-post Stories',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Snapshoot Portfolio.png',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project8',
  title: 'Keeping track of hundreds of components website',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Project2.png',
  technology1: 'Ruby on rails',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
{
  name: 'Project9',
  title: 'Multi-post Stories',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ratione exercitationem laboriosam sequi quo,   voluptates ve ritatis iusto magni beatae, labore voluptatibus odit placeat perspiciatis vero voluptate quas debitis. Omnis provident quisquam illo qui, at eos excepturi nobis exercitationem est ratione molestiae, accusamus veritatis fugit. Iusto odit aspernatur nam quasi sequi ducimus quibusdam. Explicabo sint inventore fugit quis soluta voluptates accusantium',
  image: 'Images/Snapshoot Portfolio.png',
  technology1: 'css',
  technology2: 'html',
  technology3: 'bootstrap',
  'link to live version': 'https://jaymelfah.github.io/Mobile-Portfolio/',
  'link to source': 'https://github.com/Jaymelfah',
},
];
// Create first card using javascript
const firstCardDiv = document.createElement('div');
firstCardDiv.classList.add('card1');
const firstImage = document.createElement('img');
firstImage.classList.add('gymimg');
firstImage.src = cardArray[0].image;
firstImage.alt = 'Gym image';
const secondDiv = document.createElement('div');
secondDiv.classList.add('details_gyming');
const firstCardh3 = document.createElement('h3');
firstCardh3.classList.add('card1_title');
firstCardh3.textContent = cardArray[0].title;
const firstCardParagraph = document.createElement('p');
firstCardParagraph.classList.add('card1_paragraph');
firstCardParagraph.textContent = cardArray[0].description;
const firstCardUl = document.createElement('ul');
firstCardUl.classList.add('buttons1');
const firstCardUlList = document.createElement('li');
const firstCardButton = document.createElement('button');
firstCardButton.classList.add('li_buttons1');
firstCardButton.setAttribute('type', 'button');
firstCardButton.textContent = cardArray[0].technology1;
firstCardUlList.appendChild(firstCardButton);

const firstCardUlList2 = document.createElement('li');
const firstCardButton2 = document.createElement('button');
firstCardButton2.classList.add('li_buttons1');
firstCardButton2.setAttribute('type', 'button');
firstCardButton2.textContent = cardArray[0].technology2;
firstCardUlList2.appendChild(firstCardButton2);

const firstCardUlList3 = document.createElement('li');
const firstCardButton3 = document.createElement('button');
firstCardButton3.classList.add('li_buttons1');
firstCardButton3.setAttribute('type', 'button');
firstCardButton3.textContent = cardArray[0].technology3;
firstCardUlList3.appendChild(firstCardButton3);

const firstCardUlList4 = document.createElement('li');
const firstCardButton4 = document.createElement('button');
firstCardButton4.classList.add('li_buttons1');
firstCardButton4.setAttribute('type', 'button');
firstCardButton4.textContent = cardArray[0].technology4;
firstCardUlList4.appendChild(firstCardButton4);

firstCardUl.append(firstCardButton, firstCardButton2, firstCardButton3, firstCardButton4);

const seeProjectFirstCard = document.createElement('button');
seeProjectFirstCard.classList.add('card1button');
seeProjectFirstCard.setAttribute('type', 'button');
seeProjectFirstCard.textContent = 'See Project';
secondDiv.append(firstCardh3, firstCardParagraph, firstCardUl, seeProjectFirstCard);
firstCardDiv.append(firstImage, secondDiv);

const Cards = document.querySelector('.cards');
Cards.appendChild(firstCardDiv);

// Pop up for first card
const popUp = document.querySelector('.card1button');
popUp.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[6].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[6].technology1;
  tech[1].textContent = cardArray[6].technology2;
  tech[2].textContent = cardArray[6].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[6].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[6].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Pop up card 2 desktop
const popUp2 = document.querySelector('.desktop_card2button');
popUp2.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[3].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[6].technology1;
  tech[1].textContent = cardArray[6].technology2;
  tech[2].textContent = cardArray[6].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[6].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[6].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// second card(mobile)
const card2title = document.querySelector('.card2_title');
card2title.textContent = cardArray[2].title;
const card2title2 = document.querySelector('.card2_title2');
card2title2.textContent = cardArray[2].title2;
const card2Paragraph = document.querySelector('.card2_paragraph');
card2Paragraph.textContent = cardArray[2].description;
const buttons2 = document.querySelectorAll('.li_buttons2');
buttons2[0].textContent = cardArray[2].technology1;
buttons2[1].textContent = cardArray[2].technology2;
buttons2[2].textContent = cardArray[2].technology3;

// second card popup for mobile
const mpopUp2 = document.querySelector('.card2button');
mpopUp2.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[3].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[6].technology1;
  tech[1].textContent = cardArray[6].technology2;
  tech[2].textContent = cardArray[6].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[6].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[6].description;
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Card 3 desktop version
const card3card5 = document.querySelector('.card3_card5_title');
card3card5.textContent = cardArray[1].title;
const card3card5title35 = document.querySelector('.card3_card5_title35');
card3card5title35.textContent = cardArray[1].title2;
const card35Paragraph = document.querySelector('.card3_card5_paragraph');
card35Paragraph.textContent = cardArray[1].description;
const buttons35 = document.querySelectorAll('.li_buttons35');
buttons35[0].textContent = cardArray[1].technology1;
buttons35[1].textContent = cardArray[1].technology2;
buttons35[2].textContent = cardArray[1].technology3;

// Popup for card 3
const popUp3 = document.querySelector('.card3_desktop_button');
popUp3.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[7].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[7].technology1;
  tech[1].textContent = cardArray[7].technology2;
  tech[2].textContent = cardArray[7].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[7].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[7].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Card6 Desktop version (note that 6 was swapped with 5)
const card5card5 = document.querySelector('.card5_card5_title');
card5card5.textContent = cardArray[1].title;
const card5card5title55 = document.querySelector('.card5_card5_title55');
card5card5title55.textContent = cardArray[1].title2;
const card55Paragraph = document.querySelector('.card5_card5_paragraph');
card55Paragraph.textContent = cardArray[1].description;
const buttons55 = document.querySelectorAll('.li_buttons55');
buttons55[0].textContent = cardArray[1].technology1;
buttons55[1].textContent = cardArray[1].technology2;
buttons55[2].textContent = cardArray[1].technology3;

// Popup for card 6
const popUp6 = document.querySelector('.card5_desktop_button');
popUp6.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[8].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[8].technology1;
  tech[1].textContent = cardArray[8].technology2;
  tech[2].textContent = cardArray[8].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[8].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[8].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Card4 Desktop
const card4title = document.querySelector('.card4_desktop_title');
card4title.textContent = cardArray[3].title;
const card4Paragraph = document.querySelector('.card4_desktop_paragraph');
card4Paragraph.textContent = cardArray[3].description;
const buttons4 = document.querySelectorAll('.li_buttons_desktop4');
buttons4[0].textContent = cardArray[3].technology1;
buttons4[1].textContent = cardArray[3].technology2;
buttons4[2].textContent = cardArray[3].technology3;

// Popup for card 4
const popUp4 = document.querySelector('.card4_desktop_button');
popUp4.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[5].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[5].technology1;
  tech[1].textContent = cardArray[5].technology2;
  tech[2].textContent = cardArray[5].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[5].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[5].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Card5 Desktop
const card6title = document.querySelector('.card6_desktop_title');
card6title.textContent = cardArray[2].title;
const card6title6 = document.querySelector('.card6_desktop_title6');
card6title6.textContent = cardArray[2].title2;
const card6Paragraph = document.querySelector('.card6_desktop_paragraph');
card6Paragraph.textContent = cardArray[2].description;
const buttons6 = document.querySelectorAll('.li_buttons6_desktop');
buttons6[0].textContent = cardArray[2].technology1;
buttons6[1].textContent = cardArray[2].technology2;
buttons6[2].textContent = cardArray[2].technology3;

// Popup Card5
const popUp5 = document.querySelector('.card6_desktop_button');
popUp5.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[4].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[4].technology1;
  tech[1].textContent = cardArray[4].technology2;
  tech[2].textContent = cardArray[4].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[4].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[4].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Card7 Desktop
const card7title = document.querySelector('.card7_desktop_title');
card7title.textContent = cardArray[3].title;
const card7Paragraph = document.querySelector('.card7_desktop_paragraph');
card7Paragraph.textContent = cardArray[3].description;
const buttons7 = document.querySelectorAll('.li_buttons_desktop7');
buttons7[0].textContent = cardArray[3].technology1;
buttons7[1].textContent = cardArray[3].technology2;
buttons7[2].textContent = cardArray[3].technology3;

// Popup Card 7
const popUp7 = document.querySelector('.card7_desktop_button');
popUp7.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[4].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[4].technology1;
  tech[1].textContent = cardArray[4].technology2;
  tech[2].textContent = cardArray[4].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[4].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[4].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Mobile Versions Card 3
const mCard3title = document.querySelector('.card3_title');
mCard3title.textContent = cardArray[2].title;
const mCard3title3 = document.querySelector('.card3_title3');
mCard3title3.textContent = cardArray[2].title2;
const mCard3Paragraph = document.querySelector('.card3_paragraph');
mCard3Paragraph.textContent = cardArray[2].description;
const mButtons3 = document.querySelectorAll('.li_buttons3');
mButtons3[0].textContent = cardArray[2].technology1;
mButtons3[1].textContent = cardArray[2].technology2;
mButtons3[2].textContent = cardArray[2].technology3;

// Mobile Card 3 popup
const mpopUp3 = document.querySelector('.card3button');
mpopUp3.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[7].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[7].technology1;
  tech[1].textContent = cardArray[7].technology2;
  tech[2].textContent = cardArray[7].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[7].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[7].description;
  document.querySelector('.background-modal').style.display = 'block';
});

// Mobile Version Card 4
const mCard4title = document.querySelector('.card4_title');
mCard4title.textContent = cardArray[2].title;
const mCard4title4 = document.querySelector('.card4_title4');
mCard4title4.textContent = cardArray[2].title2;
const mCard4Paragraph = document.querySelector('.card4_paragraph');
mCard4Paragraph.textContent = cardArray[2].description;
const mButtons4 = document.querySelectorAll('.li_buttons4');
mButtons4[0].textContent = cardArray[2].technology1;
mButtons4[1].textContent = cardArray[2].technology2;
mButtons4[2].textContent = cardArray[2].technology3;

// Popup mobile version card 4
const mpopUp4 = document.querySelector('.card4button');
mpopUp4.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[5].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[5].technology1;
  tech[1].textContent = cardArray[5].technology2;
  tech[2].textContent = cardArray[5].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[5].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[5].description;
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Mobile Version Card 5
const mCard5title = document.querySelector('.card5_title');
mCard5title.textContent = cardArray[2].title;
const mCard5title5 = document.querySelector('.card5_title5');
mCard5title5.textContent = cardArray[2].title2;
const mCard5Paragraph = document.querySelector('.card5_paragraph');
mCard5Paragraph.textContent = cardArray[2].description;
const mButtons5 = document.querySelectorAll('.li_buttons5');
mButtons5[0].textContent = cardArray[2].technology1;
mButtons5[1].textContent = cardArray[2].technology2;
mButtons5[2].textContent = cardArray[2].technology3;

// Mobile Version Card 5 popup
const mpopUp5 = document.querySelector('.card5button');
mpopUp5.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[4].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[4].technology1;
  tech[1].textContent = cardArray[4].technology2;
  tech[2].textContent = cardArray[4].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[4].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[4].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Mobile Version Card 6
const mCard6title = document.querySelector('.card6_title');
mCard6title.textContent = cardArray[2].title;
const mCard6title6 = document.querySelector('.card6_title6');
mCard6title6.textContent = cardArray[2].title2;
const mCard6Paragraph = document.querySelector('.card6_paragraph');
mCard6Paragraph.textContent = cardArray[2].description;
const mButtons6 = document.querySelectorAll('.li_buttons6');
mButtons6[0].textContent = cardArray[2].technology1;
mButtons6[1].textContent = cardArray[2].technology2;
mButtons6[2].textContent = cardArray[2].technology3;

// Mobile card 6 pop-up
const mpopUp6 = document.querySelector('.card6button');
mpopUp6.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[8].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[8].technology1;
  tech[1].textContent = cardArray[8].technology2;
  tech[2].textContent = cardArray[8].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[8].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[8].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Mobile Version Card 7
const mCard7title = document.querySelector('.card7_title');
mCard7title.textContent = cardArray[2].title;
const mCard7title7 = document.querySelector('.card7_title7');
mCard7title7.textContent = cardArray[2].title2;
const mCard7Paragraph = document.querySelector('.card7_paragraph');
mCard7Paragraph.textContent = cardArray[2].description;
const mButtons7 = document.querySelectorAll('.li_buttons7');
mButtons7[0].textContent = cardArray[2].technology1;
mButtons7[1].textContent = cardArray[2].technology2;
mButtons7[2].textContent = cardArray[2].technology3;

// Mobile pop up for card 7
const mpopUp7 = document.querySelector('.card7button');
mpopUp7.addEventListener('click', () => {
  const modalHeader = document.querySelector('.modal-h2');
  modalHeader.textContent = cardArray[4].title;
  const tech = document.querySelectorAll('.butts1');
  tech[0].textContent = cardArray[4].technology1;
  tech[1].textContent = cardArray[4].technology2;
  tech[2].textContent = cardArray[4].technology3;
  const popImg = document.querySelector('.modal-img');
  popImg.src = cardArray[4].image;
  const modalParagraph = document.querySelector('.modal-par');
  modalParagraph.textContent = cardArray[4].description;
  const sourceLink = document.querySelector('.source-link');
  sourceLink.href = cardArray[6]['link to source'];
  const liveLink = document.querySelector('.live-link');
  liveLink.href = cardArray[6]['link to live version'];
  document.querySelector('.background-modal').style.display = 'block';
  document.body.style.overflow = 'hidden';
});

// Pop Up functions

// Close Pop up
const closePopup = document.querySelector('.close');
closePopup.addEventListener('click', () => {
  document.querySelector('.background-modal').style.display = 'none';
  document.body.style.overflow = 'scroll';
});

// Form validation

const form = document.getElementById('forms');

// eslint-disable-next-line no-unused-vars
function validate() {
  const email = document.getElementById('email').value;
  const checkEmail = email.toLowerCase();
  if (checkEmail === email) {
    document.querySelector('.error').textContent = '';
    document.getElementById('errortag').style.visibility = 'hidden';
    return true;
  }
  document.querySelector('.error').textContent = 'Email address should be in Lowercase.';
  document.getElementById('errortag').style.visibility = 'visible';
  return false;
}

form.addEventListener('submit', (e) => {
  if (validate() === false) {
    e.preventDefault();
  }
});

// local storage
const userData = [];
const submit = document.getElementById('forms');
submit.addEventListener('input', () => {
  const user = {
    fullname: document.querySelector('.fullname').value,
    email: document.getElementById('email').value,
    message: document.querySelector('.textbox').value,
  };
  userData.push(user);
  localStorage.setItem('userDataInfo', JSON.stringify(userData));
});
const userDatafromLocalstorage = JSON.parse(localStorage.getItem('userDataInfo'));
function showInputs() {
  document.querySelector('.fullname').value = userDatafromLocalstorage[userDatafromLocalstorage.length - 1].fullname;
  document.getElementById('email').value = userDatafromLocalstorage[userDatafromLocalstorage.length - 1].email;
  document.querySelector('.textbox').value = userDatafromLocalstorage[userDatafromLocalstorage.length - 1].message;
}
document.addEventListener('DOMContentLoaded', () => {
  showInputs();
});
