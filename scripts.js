const valueObj = [
  {
    "category": "Reaction",
    "score": 80,
    "icon": "./assets/images/icon-reaction.svg"
  },
  {
    "category": "Memory",
    "score": 92,
    "icon": "./assets/images/icon-memory.svg"
  },
  {
    "category": "Verbal",
    "score": 61,
    "icon": "./assets/images/icon-verbal.svg"
  },
  {
    "category": "Visual",
    "score": 72,
    "icon": "./assets/images/icon-visual.svg"
  }
];

function addValues() {
    const attributes = document.querySelectorAll(".results-sum__variable");
    const score = document.querySelector(".results-sum__result-number");
    attributes.forEach((att, i) => att.innerHTML = valueObj[i].score);
    const scoreVal = valueObj.reduce((acc, val) => {
        return acc + val.score;
    }, 0);
    score.innerHTML = Math.round(scoreVal / valueObj.length);
}

addValues();