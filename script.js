const input = document.querySelector("input");
const plusBtn = document.querySelector(".plus-btn");
const newTasks = document.querySelector(".new-tasks");
const addingTask = document.querySelector(".adding-task");
const innerDiv = document.querySelector(".inner-div");
const newDate = document.querySelector(".date");
const greeting = document.querySelector(".greeting");
const moonLogo = document.querySelector("#moon");
const sunLogo = document.querySelector("#sun");
// const priority = newTab.querySelector("priority-order");

// if (priority.value === "High") {
//   input.style.color = "red";
// } else if (priority.value === "Medium") {
//   input.style.color = "orange";
// } else if (priority.value === "Low") {
//   input.style.color = "yellow";
// } else {
//   input.style.color = "black";
// }

//Date is object
const todayDate = new Date();
newDate.innerHTML = todayDate.toDateString();
const hour = todayDate.getHours();

if (hour < 12) {
  greeting.textContent = "Good Morning!!";
  sunLogo.style.display = "inline-block";
  moonLogo.style.display = "none";
} else if (hour < 17) {
  greeting.textContent = "Good Afternoon!!";
  sunLogo.style.display = "inline-block";
  moonLogo.style.display = "none";
} else {
  greeting.textContent = "Good Evening!!";
  moonLogo.style.display = "inline-block";

  sunLogo.style.display = "none";
}

plusBtn.addEventListener("click", () => {
  console.log("Button was clicked");

  addingTask.style.display = "none";

  const newTab = newTasks.cloneNode(true);
  console.log(newTab);
  innerDiv.append(newTab);

  const Btn = newTab.querySelector(".button");
  const input = newTab.querySelector("input");
  const addTask = newTab.querySelector(".add-task");
  const img = newTab.querySelector("img");
  const deleteBtn = newTab.querySelector(".bin");

  newTab.style.marginLeft = "2rem";
  newTab.style.marginTop = "0.9rem";

  const priority = newTab.querySelector("#priority-order");

  priority.addEventListener("change", (e) => {
    let selectedPriority = e.target.value;
    if (selectedPriority === "High") {
      input.style.color = "red";
    } else if (selectedPriority === "Medium") {
      input.style.color = "orange";
    } else if (selectedPriority === "Low") {
      input.style.color = "yellow";
    } else {
      input.style.color = "black";
    }
  });

  Btn.addEventListener("click", () => {
    console.log("btn was clicked");

    Btn.disabled = true;

    if (input.value === "") {
      input.style.textDecoration = "none";
      img.style.display = "none";
    } else {
      input.style.textDecoration = "line-through";
      img.style.display = "block";
    }
  });

  deleteBtn.addEventListener("click", () => {
    newTab.remove();
  });
});
