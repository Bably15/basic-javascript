const form = document.querySelector(".taskName");
console.log(form);

form.addEventListener =
    ("submit",
    (e) => {
        e.preventDefault();
        const taskData = document.querySelector("#exampleInputEmail1").value;
        console.log(taskData);
    });
