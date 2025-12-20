function addValues(obj) {
    const attributes = document.querySelectorAll(".results-sum__variable");
    const score = document.querySelector(".results-sum__result-number");
    const attName = document.querySelectorAll(".results-sum__attribute");
    if (!score || attributes.length === 0) return;
    if (!obj.every((ele, i) => {
      return ele.category === attName[i].textContent;
    })) {
      throw new Error('Something went wrong!');
    }
    attributes.forEach((att, i) => {
      if (obj[i]) {
        att.textContent = obj[i].score
      };
    });
    const scoreVal = obj.reduce((acc, val) => {
        return acc + val.score;
    }, 0);
    score.textContent = Math.round(scoreVal / obj.length);
}

async function displayData() {
  const url = './data.json';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Response failed!');
    }
    const data = await response.json();
    addValues(data);
  } catch(error) {
    console.log(error);
    console.log('Something went wrong!');
  }
}

displayData();
