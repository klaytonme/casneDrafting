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
        if (event.target.id.includes("t1")) {
            document.getElementById("popupPopup").dataset.caller = type;
            document.getElementById("popupPopup").parentElement.dataset.forwardpop = "1";
        }
    });
});




document.getElementById("wizConfirm").addEventListener("click", (event) => {
    document.body.dataset.mainPopup = "0";
});

document.getElementById("wizCancel").addEventListener("click", (event) => {
    document.body.dataset.mainPopup = "0";
});



document.getElementById("popConfirm").addEventListener("click", (event) => {
    let pPop = document.getElementById("popupPopup");
    if (pPop.dataset.caller == "src") {document.getElementById("popupContainer").parentElement.dataset.srcc = "1";}
    if (pPop.dataset.caller == "end") {document.getElementById("popupContainer").parentElement.dataset.endc = "1";}
    if (pPop.dataset.caller == "srv") {document.getElementById("popupContainer").parentElement.dataset.srvc = "1";}
    pPop.parentElement.dataset.forwardpop = "0";
});

document.getElementById("popCancel").addEventListener("click", (event) => {
    let pPop = document.getElementById("popupPopup");
    pPop.parentElement.dataset.forwardpop = "0";
});
