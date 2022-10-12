const form = document.querySelector("#addArticle");
const categoryName = document.getElementById("title");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const { id } = form.dataset;
  const formData = new FormData();
  formData.append("categoryName", categoryName.value);

  const res = await fetch(`/category/${id}`, {
    method: "PUT",
    body: formData,
  });
  const data = await res.json();
  if (data.success) {
    window.location.href = "/dashboard/categories";
  }
});
