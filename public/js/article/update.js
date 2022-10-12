const form = document.querySelector("#addArticle");
const title = document.getElementById("title");
const category = document.getElementById("category");
const content = document.getElementById("content");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { id } = form.dataset;
  const formData = new FormData();
  formData.append("title", title.value);
  formData.append("category", category.value);
  formData.append("content", content.value);

  const res = await fetch(`/blog/edit/${id}`, {
    method: "PUT",
    body: formData,
  });
  const data = await res.json();
  if (data.success) {
    window.location.href = "/dashboard/blogs";
  }
});
