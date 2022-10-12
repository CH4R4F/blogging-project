const form = document.querySelector("#addArticle");
const title = document.getElementById("title");
const category = document.getElementById("category");
const content = document.getElementById("content");
const image = document.getElementById("image");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("categoryId", category.value);
  formData.append("content", content.value);
  formData.append("image", image.files[0]);

  const res = await fetch("/blog/add", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();
  if(data.success) {
    form.reset()
  }
});
