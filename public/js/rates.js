const stars = document.querySelectorAll(".rating input[type=radio]");

stars.forEach((star) => {
  star.addEventListener("change", handleCheck);
});

async function handleCheck(e) {
  const { rate } = e.target.dataset;
  const { article } = e.target.dataset;
  const user = localStorage.getItem("user");

  if (user) {
    const { id } = user;
    const req = await fetch("/rates/add", {
      method: "POST",
      body: {
        userId: id,
        rate: rate,
        articleId: 10,
      },
    });

    const res = await req.json();
  }
}
