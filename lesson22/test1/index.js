const spanEl = document.querySelector('.rect_span');
const pEl = document.querySelector('.rect_p');
const divEl = document.querySelector('.rect_div');

const newSpan = document.querySelector('.events-list');
const clearBtn = document.querySelector('.clear-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');

function addSpan(text, color) {
  newSpan.innerHTML += `<span style='color: ${color}; margin-left: 8px;'>${text}</span>`;
}

const logGreenDiv = addSpan.bind(null, 'DIV', 'green');
const logGreenP = addSpan.bind(null, 'P', 'green');
const logGreenSpan = addSpan.bind(null, 'SPAN', 'green');

const logGreyDiv = addSpan.bind(null, 'DIV', 'grey');
const logGreyP = addSpan.bind(null, 'P', 'grey');
const logGreySpan = addSpan.bind(null, 'SPAN', 'grey');

divEl.addEventListener('click', logGreyDiv, true); // <=== зачем true?
divEl.addEventListener('click', logGreenDiv);

pEl.addEventListener('click', logGreyP, true); // <=== зачем true?
pEl.addEventListener('click', logGreenP);

spanEl.addEventListener('click', logGreySpan, true); // <=== зачем true?
spanEl.addEventListener('click', logGreenSpan);

function clear() {
  newSpan.innerHTML = '';
}

function attach() {
  divEl.addEventListener('click', logGreyDiv, true); // <=== зачем true?
  divEl.addEventListener('click', logGreenDiv);

  pEl.addEventListener('click', logGreyP, true); // <=== зачем true?
  pEl.addEventListener('click', logGreenP);

  spanEl.addEventListener('click', logGreySpan, true); // <=== зачем true?
  spanEl.addEventListener('click', logGreenSpan);
}

function remove() {
  divEl.removeEventListener('click', logGreyDiv, true); // <=== зачем true?
  divEl.removeEventListener('click', logGreenDiv);

  pEl.removeEventListener('click', logGreyP, true); // <=== зачем true?
  pEl.removeEventListener('click', logGreenP);

  spanEl.removeEventListener('click', logGreySpan, true); // <=== зачем true?
  spanEl.removeEventListener('click', logGreenSpan);
}

clearBtn.addEventListener('click', clear);
attachBtn.addEventListener('click', attach);
removeBtn.addEventListener('click', remove);
