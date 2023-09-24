const container = document.querySelector(".container")

container.addEventListener("mousemove", (event) => {
    let boxcordinate = container.getBoundingClientRect();
    let mousepointinbox = event.clientX - boxcordinate.left;
    // console.log(mousepointinbox)

    if (mousepointinbox < boxcordinate.width / 2) {
        console.log("at left");
        console.log(mousepointinbox)
        let persentage = Math.floor((mousepointinbox / (boxcordinate.width / 2)) * 100)

        container.style.background = `hwb(0 ${0 + persentage}% 0% / 1)`;


    } else {
        console.log("at right");
        let rigthMouspoint = mousepointinbox - (boxcordinate.width / 2);
        let persentage = Math.floor((rigthMouspoint / (boxcordinate.width / 2)) * 100)
        container.style.background = `hwb(237.93deg ${100 - persentage}% 0%)`;
    }


});

container.addEventListener("mouseout", () => {
    container.style.background = "white";
})