//  - метод click назначаем на .arena
//  - делаем проверку на (td) и возвращаем его (id)
//  - по этому (td) находим его родителя (tr) и возвращаем его (id)
//  - по этому (tr) находим его родителя (table) и возвращаем его (id)

// -----------------------------render block

const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const getLineSeats = () =>
  generateNumbersRange(1, 10)
    .map(
      (seatsNumber) => `
<div
  class = "sector__seat"
  data-sector-number='${seatsNumber}'
  ></div>`,
    )
    .join('');

const getSectorLines = () => {
  const seatsString = getLineSeats();

  return generateNumbersRange(1, 10)
    .map(
      (sectorLines) => `
    <div
      class = "sector__line"
      data-sector-number='${sectorLines}'
      >${seatsString}</div>
    `,
    )
    .join('');
};

const renderArena = () => {
  const arenaElement = document.querySelector('.arena');
  const linesString = getSectorLines();

  const sectorsString = generateNumbersRange(1, 3)
    .map(
      (sectorNumbers) => `
    <div
      class = "sector"
      data-sector-number='${sectorNumbers}'
      >${linesString}</div>
    `,
    )
    .join('');

  arenaElement.innerHTML = sectorsString;
};

renderArena();

// ------------------------logical block

const boardSpan = document.querySelector('.board__selected-seat');
const arena = document.querySelector('.arena');

const seatsNumber = (event) => {
  let seat;
  let line;
  let sector;
  if (event.target.className !== 'sector__seat') {
    console.log(event.target);
    return;
  }
  seat = event.target.dataset.sectorNumber;
  // console.log(event.target);

  let lineOfSeat = event.target.closest('.sector__line');
  line = lineOfSeat.dataset.sectorNumber;
  // console.log(line);

  let sectorOfLine = lineOfSeat.closest('.sector');
  sector = sectorOfLine.dataset.sectorNumber;
  // console.log(sector);

  boardSpan.textContent = `S ${sector} - L ${line} - S ${seat}`;
};

arena.addEventListener('click', seatsNumber);
// console.log(seat);
