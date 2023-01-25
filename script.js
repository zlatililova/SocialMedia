fetch("http://localhost:3000/posts")
  .then((data) => data.json())
  .then((data) => {
    data.forEach((tweet) => {
      const { content } = tweet;
      const toDoTask = createAPost(content);
      const postColumn = document.querySelector(".post-column");
      postColumn.appendChild(toDoTask);
    });
  });

function createAPost(description) {
  const content = document.createElement("p");
  content.textContent = description;
  const toDoTask = document.createElement("li");
  toDoTask.appendChild(card_title);
  toDoTask.appendChild(content);
  toDoTask.classList.add("post_item");
  return toDoTask;
}

function requestToServer(url, method, body, callback) {
  fetch(url, {
    method: method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((data) => {
      if (!data.ok) {
        throw "Cannot fetch data";
      } else {
        return data.json();
      }
    })
    .finally((data) => {
      if (data !== undefined) {
        callback(data);
      }
    });
}
