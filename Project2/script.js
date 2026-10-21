const rect = document.querySelector("#rect");

window.addEventListener("mousemove", function(details){
    let valX = gsap.utils.mapRange(
        0,
        this.window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX
    )

    gsap.to("#rect", {
        left: valX,
        ease: Power4
    })
})