console.clear();

document.getElementById("test1Button").addEventListener("click", (event) => {
    document.getElementById("mainContainer").dataset.selected = "1";
});

document.getElementById("test2Button").addEventListener("click", (event) => {
    document.getElementById("mainContainer").dataset.selected = "2";
});

