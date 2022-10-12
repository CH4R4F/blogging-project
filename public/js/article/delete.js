const deleteBtns = document.querySelectorAll('[data-role="delete"]');

deleteBtns.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    const { id } = btn.dataset;
    const res = await fetch(`/blog/delete/${id}`, {
      method: "DELETE",
    });

    if (res.status === 200) {
      window.location.href = "/dashboard/blogs";
    }
  });
});
