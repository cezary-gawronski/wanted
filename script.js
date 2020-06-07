const hairInput = document.getElementById("hair-color");

hairInput.addEventListener("input", () => {
    let hairColor = hairInput.value;
    document.documentElement.style.setProperty('--hair-color', hairColor);
});