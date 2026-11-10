const rect = document.querySelector("#rect");

window.addEventListener("mousemove", function(details){
    let valX = gsap.utils.mapRange(
        0,
        this.window.innerWidth,
        50 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (50 + rect.getBoundingClientRect().width / 2),
        details.clientX
    )

    let valY = gsap.utils.mapRange(
        0,
        this.window.innerHeight,
        50 + rect.getBoundingClientRect().height / 2,
        this.window.innerHeight - (50 + rect.getBoundingClientRect().height / 2),
        details.clientY

    )

    gsap.to("#rect", {
        left: valX,
        top: valY,
        ease: "Power4.out",

    })
})