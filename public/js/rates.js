const stars = document.querySelectorAll(".rating input[type=radio]");
const article = document.getElementById("article");
const popup = document.getElementById("modal");

stars.forEach((star) => {
  star.addEventListener("change", handleCheck);
});

async function handleCheck(e) {
  const { rate } = e.target.dataset;
  const articleId = article.dataset.id;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    const { id } = user;
    const info = {
      userId: id,
      rate: rate,
      articleId: articleId,
    };
    const req = await fetch("/rates/add", {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const res = await req.json();
    console.log(res);
  } else {
    popup.classList.remove("hidden");
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    const { id } = user;
    const articleId = article.dataset.id;

    const req = await fetch(`/rates/all/${id}/${articleId}/`);
    const res = await req.json();
    if (res.length > 0) {
      const { rating } = res[0];
      const star = document.querySelector(`.rating input[data-rate="${rating}"]`);
      star.checked = true;
    }
  }
});
