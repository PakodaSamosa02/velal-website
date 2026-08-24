/* =========================================
   WANKU'S KART
   FUTURISTIC SYSTEM INTERFACE
   ========================================= */


/* =========================================
   SYSTEM STATUS
   ========================================= */

const systemStatusText = document.getElementById("systemStatusText");

const statusMessages = [
    "SYSTEM ONLINE",
    "SCANNING COFFEE DATA",
    "LAB READY",
    "MONITORING EXTRACTION"
];

let statusIndex = 0;

function updateSystemStatus() {

    statusIndex++;

    if (statusIndex >= statusMessages.length) {
        statusIndex = 0;
    }

    systemStatusText.textContent = statusMessages[statusIndex];
}

setInterval(updateSystemStatus, 4000);


/* =========================================
   COFFEE LAB
   ========================================= */

const labButton = document.getElementById("labButton");
const labMessage = document.getElementById("labMessage");

labButton.addEventListener("click", function () {

    labMessage.innerHTML = `
        <h3>☕ COFFEE EXPERIMENT #01</h3>

        <p>
            Initialising experiment parameters...
        </p>

        <p>
            <strong>DOSE</strong><br>
            18.0 g
        </p>

        <p>
            <strong>TEMPERATURE</strong><br>
            92°C
        </p>

        <p>
            <strong>TARGET YIELD</strong><br>
            36.0 g
        </p>

        <p>
            <strong>EXTRACTION RATIO</strong><br>
            1 : 2
        </p>

        <p>
            <strong>STATUS</strong><br>
            READY FOR BREW
        </p>
    `;

    labButton.textContent = "EXPERIMENT LOADED";
});


/* =========================================
   HERO BUTTON
   ========================================= */

const exploreButton = document.getElementById("exploreButton");

exploreButton.addEventListener("click", function () {

    document.getElementById("lab").scrollIntoView({
        behavior: "smooth"
    });

});