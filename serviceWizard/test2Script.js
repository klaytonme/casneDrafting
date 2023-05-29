document.getElementById("t1OnButton").addEventListener("click", (event) => {
    document.body.dataset.mainPopup = "1";
});


[].forEach.call(document.getElementsByClassName("frameContainer"), (element) => {
    element.addEventListener("click", (event) => {
        event.target.parentElement.dataset.mainPopup = "0";
    });
});

[].forEach.call(document.getElementsByClassName("diagramButton"), (element) => {
    element.addEventListener("click", (event) => {
        let type = event.target.id.includes("Source") ? "src" : (event.target.id.includes("Endpoint") ? "end" : "srv");
        let pop = document.getElementById("popupContainer");

        if (event.target.id.includes("t1")) {
            pop.dataset.active = type;
        }
    });
});



[].forEach.call(document.querySelectorAll("input"), (element) => {
    element.addEventListener("input", (event) => {
        let type = event.target.parentElement.parentElement.classList.contains("srcBody") ? "src" : (event.target.parentElement.parentElement.classList.contains("endBody") ? "end" : "srv");
        let pop = document.getElementById("popupContainer");
        if (type == "src") {pop.parentElement.dataset.srcc = event.target.value != "" ? "1" : "0"};
        if (type == "end") {pop.parentElement.dataset.endc = event.target.value != "" ? "1" : "0"};
        if (type == "srv") {pop.parentElement.dataset.srvc = event.target.value != "" ? "1" : "0"};

    });
});




document.getElementById("wizConfirm").addEventListener("click", (event) => {
    document.body.dataset.mainPopup = "0";
});

document.getElementById("wizCancel").addEventListener("click", (event) => {
    document.body.dataset.mainPopup = "0";
});
