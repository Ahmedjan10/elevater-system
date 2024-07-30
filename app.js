document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".controls button");
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const floor = parseInt(event.target.textContent);
            moveElevator(floor);
        });
    });
});

function moveElevator(floor) {
    const elevator = document.querySelector(".lift");
    const building = document.querySelector("#building");
    const floorHeight = building.clientHeight / 5; 
    const targetPosition = (floor -1 ) * floorHeight;

    elevator.style.transform = `translatey(-${targetPosition}px)`;
}


