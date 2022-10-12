const form = document.getElementById("comment-form");
const comment = document.getElementById("comment");
const post = document.getElementById("article");
const register = document.getElementById("modal");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    register.classList.remove("hidden");
    return;
  }
  const {id} = post.dataset;
  const username = user.username;
  const data = await fetch(`/comment/add/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      comment: comment.value,
      username,
    }),
  })

  const result = await data.json();

  if (result.success) {
    window.location.reload();
  }
  
})