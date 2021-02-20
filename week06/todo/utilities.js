// Trello steps

function qs(selector) {}

export default function onTouch(label) {
  console.log(label);
  let checkId = parseInt(label);

  let checkbox = document.getElementById(checkId);
  let labelValue = document.getElementById(parseInt(label) + 1).innerText;

  console.log(checkbox);

  // save the checkbox to local storage when it is checked
  let isChecked;
  let LSObj = {};
  if (checkbox.checked) {
    isChecked = true;
    LSObj[label - 1] = labelValue;
    LSObj[label] = isChecked;
    //localStorage.setItem(checkId, isChecked);
    localStorage.setItem(parseInt(label) + 3, JSON.stringify(LSObj));
    console.log(checkId + " is checked");
  } else {
    console.log(checkId + " is not checked");
    isChecked = false;
    //localStorage.setItem(checkId, isChecked);
    LSObj[label - 1] = labelValue;
    LSObj[label] = isChecked;
    console.log(JSON.stringify(LSObj));

    localStorage.setItem(parseInt(label) + 3, JSON.stringify(LSObj));
  }
  console.log(localStorage);
}

/**
 * call this function when the page loads or when a checkbox is clicked directly
 * @param {checkboxID} checkbox id
 */
