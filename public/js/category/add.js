const form = document.querySelector("#addArticle");
const categoryName = document.getElementById("title");


form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("categoryName", categoryName.value);

  const res = await fetch("/category/add", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  if(data.success) {
    form.reset()
  }
});