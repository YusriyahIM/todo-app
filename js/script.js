document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("form");

  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addTodo();
  });
});

function makeTodo() {
  const textTitle = document.createElement("h2");
  textTitle.innerText = "Tugas Android";

  const textTimestamp = document.createElement("p");
  textTimestamp.innerText = "2021-05-01";

  const textContainer = document.createElement("div");
  textContainer.classList.add("inner");
  textContainer.append(textTitle, textTimestamp);

  const container = document.createElement("div");
  container.classList.add("item", "shadow");
  container.append(textContainer);

  return container;
}
