const rect = document.querySelector("#center")

rect.addEventListener("mousemove", function (details) {
    // console.log(rect.getBoundingClientRect()); // this the location of rectange in a screen

    const rectlocation = rect.getBoundingClientRect();
    let insiderectange = Math.round(details.clientX - rectlocation.left)

    //left side of rectange = 336
    // right side of rectange = 736

    //center will be = 336 + 200 = 536;
    let half =  rectlocation.width / 2;
    if(insiderectange < half){
        let redcolor = gsap.utils.mapRange(
            0,
            half,
            255, 
            0, 
            insiderectange
        );

        gsap.to(rect, {
            backgroundColor: `rgb(${Math.round(redcolor)}, 0, 0)`,
            ease: Power4,
        })
    }else{

        let bluecolor = gsap.utils.mapRange(
            half,
            rectlocation.width,
            0,
            255,
            insiderectange
        )

        gsap.to(rect, {
            backgroundColor: `rgb(0,0,${Math.round(bluecolor)} )`,
            ease: 0,
        })
    }
})


// //(left side of rectange, center, highest color density at left side, lowest at center, value of curse)
// console.log(gsap.utils.mapRange(0, 336, 255, 0, 337));

rect.addEventListener("mouseleave", function(){
    gsap.to(rect,{
       backgroundColor: "white",    
    })
})