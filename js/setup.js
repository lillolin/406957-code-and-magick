'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var wizardName = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var family = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizards = [
    {
      name: wizardName[Math.floor(Math.random() *wizardName.length)] + ' ' + family[Math.floor(Math.random() *8)],
      coatColor: coatColor[Math.floor(Math.random() *coatColor.length)], 
      eyesColor: eyesColor[Math.floor(Math.random() *eyesColor.length)],
    },
    {
      name: wizardName[Math.floor(Math.random() *wizardName.length)] + ' ' + family[Math.floor(Math.random() *8)],
      coatColor: coatColor[Math.floor(Math.random() *coatColor.length)], 
      eyesColor: eyesColor[Math.floor(Math.random() *eyesColor.length)],
    },
    {
      name: wizardName[Math.floor(Math.random() *wizardName.length)] + ' ' + family[Math.floor(Math.random() *8)],
      coatColor: coatColor[Math.floor(Math.random() *coatColor.length)], 
      eyesColor: eyesColor[Math.floor(Math.random() *eyesColor.length)],
    },
    {
      name: wizardName[Math.floor(Math.random() *wizardName.length)] + ' ' + family[Math.floor(Math.random() *8)],
      coatColor: coatColor[Math.floor(Math.random() *coatColor.length)], 
      eyesColor: eyesColor[Math.floor(Math.random() *eyesColor.length)],
    },
];

for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  
  similarListElement.appendChild(wizardElement);
}
