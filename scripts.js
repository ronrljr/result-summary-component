
function createStatBox(category) {
  const box = document.createElement("div");
  box.className = "results-sum__stat-box";
  box.setAttribute("role", "listitem");

  box.innerHTML = `
    <div class="results-sum__summary-half results-sum__summary-half--attributes">
      <img class="results-sum__icon" alt="" aria-hidden="true" />
      <h3 class="results-sum__attribute">${category}</h3>
    </div>
    <div class="results-sum__summary-half results-sum__summary-half--score">
      <p class="results-sum__score" aria-label="${category} score out of 100">
        <span class="results-sum__variable">0</span> / 100
      </p>
    </div>
  `;

  return box;
}

function buildStatBoxes(count) {
  const container = document.querySelector(".results-sum__half--summary");
  const button = container.querySelector(".results-sum__continue-button");

  for (let i = 0; i < count; i++) {
    const box = createStatBox();
    container.insertBefore(box, button);
  }
}


function addValues(obj) {
    const attributes = document.querySelectorAll(".results-sum__variable");
    const score = document.querySelector(".results-sum__result-number");
    const attName = document.querySelectorAll(".results-sum__attribute");
    const box = document.querySelectorAll(".results-sum__stat-box");

     if (!score || attributes.length === 0) return;
    
    attributes.forEach((att, i) => {
      if (obj[i]) {
        att.textContent = obj[i].score;
        attName[i].textContent = obj[i].category;
        box[i].classList.add(`results-sum__stat-box--${obj[i].category}`);
        attName[i].classList.add(`results-sum__attribute--${obj[i].category}`);
      }
    });

    const scoreVal = obj.reduce((acc, val) => {
        return acc + val.score;
    }, 0);
    score.textContent = Math.round(scoreVal / obj.length);
};

async function displayData() {
  const url = './data.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response failed!');
    }
    const data = await response.json();

    buildStatBoxes(data.length);

    addValues(data);
  } catch(error) {
    console.log(error);
    console.log('Something went wrong!');
  }
};

displayData();

function resetPage() {
  const continueButton = document.querySelector(".results-sum__continue-button");
  continueButton.addEventListener('click', function() {
    window.location.reload();
  });
};

resetPage();

