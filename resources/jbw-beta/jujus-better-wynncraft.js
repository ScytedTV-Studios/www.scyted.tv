// LATEST VERSION DOWNLOAD
const latestVersion = "v2.4";
    
document.addEventListener('DOMContentLoaded', function () {
    var packOptions = ["Essentials", "Extras", "Extreme"];
    var shaderOptions = ["No Shaders", "Sildurs Medium", "Sildurs Extreme"];
    var modLoaderOptions = ["CurseForge", "Modrinth"];

    var packSel = document.getElementById("pack");
    var shaderSel = document.getElementById("shader");
    var modLoaderSel = document.getElementById("modLoader");

    // Populate pack options
    for (var i = 0; i < packOptions.length; i++) {
        packSel.options[packSel.options.length] = new Option(packOptions[i], packOptions[i]);
    }

    // Populate shader options
    for (var i = 0; i < shaderOptions.length; i++) {
        shaderSel.options[shaderSel.options.length] = new Option(shaderOptions[i], shaderOptions[i]);
    }

    // Populate mod loader options
    for (var i = 0; i < modLoaderOptions.length; i++) {
        modLoaderSel.options[modLoaderSel.options.length] = new Option(modLoaderOptions[i], modLoaderOptions[i]);
    }

    // Set selected values based on URL parameters
    var urlParams = new URLSearchParams(window.location.search);
    packSel.value = urlParams.get("pack") || "";
    shaderSel.value = urlParams.get("shader") || "";
    modLoaderSel.value = urlParams.get("modLoader") || "";
});

function validateForm() {
    var packValue = document.getElementById("pack").value.replace(/\s+/g, ''); // Remove spaces
    // var shaderValue = document.getElementById("shader").value.replace(/\s+/g, ''); // Remove spaces
    var modLoaderValue = document.getElementById("modLoader").value.replace(/\s+/g, ''); // Remove spaces

    // if (packValue === "" || shaderValue === "" || modLoaderValue === "") {
    if (packValue === "" || modLoaderValue === "") {
        alert("Please select one option from each menu.");
        return false;
    }

    // var downloadLink = `https://github.com/ScytedTV-Studios/JuJus-Better-Wynncraft/releases/download/${latestVersion}` + "/JuJus-Better-Wynncraft" + "+" + latestVersion + "+" + packValue + "+" + shaderValue + "+" + modLoaderValue;
    var downloadLink = `https://github.com/ScytedTV-Studios/JuJus-Better-Wynncraft/releases/download/${latestVersion}` + "/JuJus-Better-Wynncraft" + "+" + latestVersion + "+" + packValue + "+" + modLoaderValue;

    // Append the appropriate file extension based on the selected "modLoader" option
    if (modLoaderValue === "CurseForge") {
        downloadLink += ".zip";
    } else if (modLoaderValue === "Modrinth") {
        downloadLink += ".mrpack";
    }

    window.open(downloadLink, "_blank");

    return true;
}