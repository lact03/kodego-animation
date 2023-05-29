const femaleImg = document.querySelector(".female");
const headline1Img = document.querySelector(".headline-1");
const headline2Img = document.querySelector(".headline-2");
const logoImg = document.querySelector(".logo");
const subHeadlineImg = document.querySelector(".sub-headline");
const learnMoreImg = document.querySelector(".learn-more");
const replayImg = document.querySelector(".replay");

replayImg.addEventListener("click", () => {
    femaleImg.classList.remove("female");
    headline1Img.classList.remove("headline-1");
    headline2Img.classList.remove("headline-2");
    logoImg.classList.remove("logo");
    subHeadlineImg.classList.remove("sub-headline");
    learnMoreImg.classList.remove("learn-more");
    replayImg.classList.remove("replay");
    void femaleImg.offsetWidth;
    femaleImg.classList.add("female");
    headline1Img.classList.add("headline-1");
    headline2Img.classList.add("headline-2");
    logoImg.classList.add("logo");
    subHeadlineImg.classList.add("sub-headline");
    learnMoreImg.classList.add("learn-more");
    replayImg.classList.add("replay");
});
