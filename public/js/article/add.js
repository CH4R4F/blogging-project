const form = document.querySelector("#addArticle");
const title = document.getElementById("title");
const category = document.getElementById("category");
const content = document.getElementById("content");
const image = document.getElementById("image");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const article = {
    title: title.value,
    category: category.value,
    content: content.value,
    image: image.files[0],
  };

  const formData = new FormData();
  formData.append("title", article.title);
  formData.append("category", article.category);
  formData.append("content", article.content);
  formData.append("image", article.image);

  const res = await fetch("/blog/add", {
    method: "POST",
    body: formData,
  });
  const data = await res.json();

  console.log(data);
});
