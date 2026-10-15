const countText = document.querySelector("#appointmentCount");
const incrementButton = document.querySelector("#incrementButton");
const decrementButton = document.querySelector("#decrementButton");
const resetButton = document.querySelector("#resetButton");

if (!countText || !incrementButton || !decrementButton || !resetButton) {
    throw new Error("Add the appointment counter and its three buttons to the page.");
}

let appointmentCount = 0;
countText.textContent = appointmentCount;

incrementButton.addEventListener("click", function () {
    appointmentCount++;
    countText.textContent = appointmentCount;
});

decrementButton.addEventListener("click", function () {
    if (appointmentCount > 0) {
        appointmentCount--;
        countText.textContent = appointmentCount;
    }
});

resetButton.addEventListener("click", function () {
    appointmentCount = 0;
    countText.textContent = appointmentCount;
});
