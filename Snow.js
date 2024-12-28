// Select the snow container
const snowContainer = document.getElementById("snow-container");

// Generate 50 snowflakes with randomized properties
for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // Randomize size and position
    const size = (Math.random() * 1 + 0.2) + "vw";
    const leftIni = (Math.random() * 20 - 10) + "vw";
    const leftEnd = (Math.random() * 20 - 10) + "vw";
    const left = Math.random() * 100 + "vw";
    const duration = 5 + Math.random() * 10 + "s";
    const delay = -Math.random() * 10 + "s";

    // Apply styles to the snowflake
    snowflake.style.setProperty("--size", size);
    snowflake.style.setProperty("--left-ini", leftIni);
    snowflake.style.setProperty("--left-end", leftEnd);
    snowflake.style.left = left;
    snowflake.style.animation = `snowfall ${duration} linear infinite, fadeout ${duration} linear infinite`;
    snowflake.style.animationDelay = delay;

    // Append snowflake to the container
    snowContainer.appendChild(snowflake);
}
