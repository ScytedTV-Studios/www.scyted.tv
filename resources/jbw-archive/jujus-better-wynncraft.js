// ARCHIVE VERSION DOWNLOAD
    
function updateArchiveOptions() {
    var majorVersion = document.getElementById("majorVersion").value;

    // Enable or disable sections based on the selected major version
    var packSection = document.getElementById("archivePack");
    var shaderSection = document.getElementById("archiveShader");
    var versionSection = document.getElementById("version");
    var modLoaderSection = document.getElementById("archiveModLoader");
    var majorVersionCheck = document.getElementById("majorVersion")

    packSection.disabled = true;
    shaderSection.disabled = true;
    versionSection.disabled = true;
    modLoaderSection.disabled = true;

    if (majorVersion === "version1") {

        packSection.options.length = 0;
        packSection.options[packSection.options.length] = new Option("No Packs Available", "");

        shaderSection.options.length = 0;
        shaderSection.options[shaderSection.options.length] = new Option("No Shaders Available", "");

        versionSection.options.length = 0;
        versionSection.options[versionSection.options.length] = new Option("Select Version", "");
        versionSection.options[versionSection.options.length] = new Option("v1.0", "v1.0");
        versionSection.options[versionSection.options.length] = new Option("v1.1", "v1.1");
        versionSection.options[versionSection.options.length] = new Option("v1.2", "v1.2");
        versionSection.options[versionSection.options.length] = new Option("v1.3", "v1.3");
        versionSection.options[versionSection.options.length] = new Option("v1.4", "v1.4");

        modLoaderSection.options.length = 0;
        modLoaderSection.options[modLoaderSection.options.length] = new Option("Select Mod Loader", "");
        modLoaderSection.options[modLoaderSection.options.length] = new Option("CurseForge", "CurseForge");
        modLoaderSection.options[modLoaderSection.options.length] = new Option("Modrinth", "Modrinth");

        versionSection.disabled = false;
        modLoaderSection.disabled = false;

    } else if (majorVersion === "version2") {

        packSection.options.length = 0;
        packSection.options[packSection.options.length] = new Option("Select Pack", "");
        packSection.options[packSection.options.length] = new Option("Essentials", "Essentials");
        packSection.options[packSection.options.length] = new Option("Extras", "Extras");
        packSection.options[packSection.options.length] = new Option("Extreme", "Extreme");

        shaderSection.options.length = 0;
        shaderSection.options[shaderSection.options.length] = new Option("Select a Version", "");

        versionSection.options.length = 0;
        versionSection.options[versionSection.options.length] = new Option("Select Version", "");
        versionSection.options[versionSection.options.length] = new Option("v2.0", "v2.0");
        versionSection.options[versionSection.options.length] = new Option("v2.1", "v2.1");
        versionSection.options[versionSection.options.length] = new Option("v2.2", "v2.2");
        versionSection.options[versionSection.options.length] = new Option("v2.3", "v2.3");

        modLoaderSection.options.length = 0;
        modLoaderSection.options[modLoaderSection.options.length] = new Option("Select Mod Loader", "");
        modLoaderSection.options[modLoaderSection.options.length] = new Option("CurseForge", "CurseForge");
        modLoaderSection.options[modLoaderSection.options.length] = new Option("Modrinth", "Modrinth");

        packSection.disabled = false;
        shaderSection.disabled = true;
        versionSection.disabled = false;
        modLoaderSection.disabled = false;

    } else if (majorVersionCheck.selectedIndex == 0) {

        packSection.options.length = 0;
        packSection.options[packSection.options.length] = new Option("Select a Major Version", "");

        shaderSection.options.length = 0;
        shaderSection.options[shaderSection.options.length] = new Option("Select a Major Version", "");

        versionSection.options.length = 0;
        versionSection.options[versionSection.options.length] = new Option("Select a Major Version", "");

        modLoaderSection.options.length = 0;
        modLoaderSection.options[modLoaderSection.options.length] = new Option("Select a Major Version", "");

    }
}

function updateArchiveOptionsVersions() {
    var versionSection = document.getElementById("version").value;

    // Enable or disable sections based on the selected major version
    var packSection = document.getElementById("archivePack");
    var shaderSection = document.getElementById("archiveShader");
    var majorVersion = document.getElementById("majorVersion");
    var modLoaderSection = document.getElementById("archiveModLoader");
    var versionSectionCheck = document.getElementById("version");

    if (versionSection === "v2.0") {

        shaderSection.options.length = 0;
        shaderSection.options[shaderSection.options.length] = new Option("Select Shader", "");
        shaderSection.options[shaderSection.options.length] = new Option("No Shaders", "No Shaders");
        shaderSection.options[shaderSection.options.length] = new Option("Sildurs Medium", "Sildurs Medium");
        shaderSection.options[shaderSection.options.length] = new Option("Sildurs Extreme", "Sildurs Extreme");

        shaderSection.disabled = false;

    } else if (versionSectionCheck.selectedIndex === 0 && majorVersion.selectedIndex !== 0 && majorVersion.selectedIndex !== 1) {

        shaderSection.options.length = 0;
        shaderSection.options[shaderSection.options.length] = new Option("Select a Version", "");

        shaderSection.disabled = true;

    } else if (versionSection !== "v2.0" && versionSectionCheck.selectedIndex !== 0 && majorVersion.selectedIndex !== 0) {

        shaderSection.options.length = 0;
        shaderSection.options[shaderSection.options.length] = new Option("No Shaders Available", "");

        shaderSection.disabled = true;

    }
}

var versionOptions = ["v1.0", "v1.1", "v1.2", "v1.3", "v1.4"];
var archiveModLoaderOptions = ["CurseForge", "Modrinth"];

window.onload = function () {
    var versionSel = document.getElementById("version");
    var archiveModLoaderSel = document.getElementById("archiveModLoader");
    var majorVersionSel = document.getElementById("majorVersion");
    var packSel = document.getElementById("archivePack");
    var shaderSel = document.getElementById("archiveShader");

    // Populate version options
    for (var i = 0; i < versionOptions.length; i++) {
        versionSel.options[versionSel.options.length] = new Option(versionOptions[i], versionOptions[i]);
    }

    // Populate mod loader options
    for (var i = 0; i < archiveModLoaderOptions.length; i++) {
        archiveModLoaderSel.options[archiveModLoaderSel.options.length] = new Option(archiveModLoaderOptions[i], archiveModLoaderOptions[i]);
    }

    // Populate major version options
    majorVersionSel.options.length = 1;
    majorVersionSel.options[majorVersionSel.options.length] = new Option("Version 1", "version1");
    majorVersionSel.options[majorVersionSel.options.length] = new Option("Version 2", "version2");

    // Set selected values for major version, pack, and shader
    var urlParams = new URLSearchParams(window.location.search);
    var majorVersionValue = urlParams.get("majorVersion") || "";
    majorVersionSel.value = majorVersionValue;

    // Trigger the updateArchiveOptions function to set the dependent options based on major version
    updateArchiveOptions();
    updateArchiveOptionsVersions();

    // Set selected values for pack and shader
    packSel.value = urlParams.get("archivePack") || "";
    shaderSel.value = urlParams.get("archiveShader") || "";

    // Set selected values for version and archiveModLoader
    versionSel.value = urlParams.get("version") || "";
    archiveModLoaderSel.value = urlParams.get("archiveModLoader") || "";
};

function validateArchiveForm() {
    var versionValue = document.getElementById("version").value.replace(/\s+/g, ''); // Remove spaces
    var archiveModLoaderValue = document.getElementById("archiveModLoader").value.replace(/\s+/g, ''); // Remove spaces
    var packValue = document.getElementById("archivePack").value.replace(/\s+/g, ''); // Remove spaces
    var shaderValue = document.getElementById("archiveShader").value.replace(/\s+/g, ''); // Remove spaces

    if (versionValue === "" || archiveModLoaderValue === "") {
        alert("Please select one option from each menu.");
        return false;
    }

    // Build the download link dynamically based on selected values
    var archiveDownloadLink = "https://github.com/ScytedTV-Studios/JuJus-Better-Wynncraft/releases/download/" + versionValue + "/JuJus-Better-Wynncraft" +
        "+" + versionValue +
        (packValue ? "+" + packValue : "") +
        (shaderValue ? "+" + shaderValue : "") +
        "+" + archiveModLoaderValue
        

    // Append the appropriate file extension based on the selected "archiveModLoader" option
    if (archiveModLoaderValue === "CurseForge") {
        archiveDownloadLink += ".zip";
    } else if (archiveModLoaderValue === "Modrinth") {
        archiveDownloadLink += ".mrpack";
    }

    // Open the archive download link in a new tab
    window.open(archiveDownloadLink, "_blank");

    return true;
}

function viewArchiveChangelogs() {
    var versionValue = document.getElementById("version").value.replace(/\s+/g, ''); // Remove spaces

    if (versionValue === "") {
        alert("Please select a version.");
        return false;
    }

    var changelogsLink = "https://github.com/ScytedTV-Studios/JuJus-Better-Wynncraft/releases/tag/" + versionValue;

    // Redirect to the changelogs link
    window.open(changelogsLink, "_blank");
}

function viewChangelogs() {

    var changelogsLink = "https://github.com/ScytedTV-Studios/JuJus-Better-Wynncraft/releases/latest/";

    window.open(changelogsLink, "_blank");
}