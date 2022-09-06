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
  'link to live version': '#',
  'link to source': '#',
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
  'link to live version': '#',
  'link to source': '#',
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
  'link to live version': '#',
  'link to source': '#',
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
  'link to live version': '#',
  'link to source': '#',
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

// Card4 Desktop
const card4title = document.querySelector('.card4_desktop_title');
card4title.textContent = cardArray[3].title;
const card4Paragraph = document.querySelector('.card4_desktop_paragraph');
card4Paragraph.textContent = cardArray[3].description;
const buttons4 = document.querySelectorAll('.li_buttons_desktop4');
buttons4[0].textContent = cardArray[3].technology1;
buttons4[1].textContent = cardArray[3].technology2;
buttons4[2].textContent = cardArray[3].technology3;

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

// Card7 Desktop
const card7title = document.querySelector('.card7_desktop_title');
card7title.textContent = cardArray[3].title;
const card7Paragraph = document.querySelector('.card7_desktop_paragraph');
card7Paragraph.textContent = cardArray[3].description;
const buttons7 = document.querySelectorAll('.li_buttons_desktop7');
buttons7[0].textContent = cardArray[3].technology1;
buttons7[1].textContent = cardArray[3].technology2;
buttons7[2].textContent = cardArray[3].technology3;

// Mobile Versions Card 3
