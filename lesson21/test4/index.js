export function getTitle() {
  const tittle = document.querySelector('.title');
  // console.log(tittle);
  const titleText = tittle.textContent;
  return titleText;
}

export function getDescription() {
  const description = document.querySelector('.about');
  const descriptionText = description.innerText;
  return descriptionText;
}

export function getPlans() {
  const plans = document.querySelector('.plans');
  const plansContent = plans.innerHTML;
  return plansContent;
}

export function getGoal() {
  const goal = document.querySelector('.goal');
  const goalContent = goal.outerHTML;
  return goalContent;
}

// console.log(getTitle());
// console.log(getDescription());
// console.log(getPlans());
// console.log(getGoal());
