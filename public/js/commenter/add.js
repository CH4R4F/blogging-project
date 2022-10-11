const form = document.getElementById("form_commentaire")
const com = document.getElementById("commenter");

form.addEventListener("submit", async(e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("commenter", com.value);
    console.log(com.value);

    const data = await fetch("/commenter/add", {
        method: "post",
        body: formData
    })

    const response = await data.json()

    console.log(response);
})