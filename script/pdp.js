$(document).ready(function(){

$(".wrapping li").click(function(){
    var currentele = $(this).html();
    
    $(".default-option li").html(currentele);
    
    $(this).parents(".wrapping").toggleClass("active");
})



});


///////////////////////////////////////////////////////////////
const num= document.querySelector("#number");
const plus = document.querySelector("#increment");
const minus = document.querySelector("#decrement");


plus.addEventListener("click", function() {
    valueCount = num.value;
    valueCount ++;
    num.value = valueCount;
}
)

minus.addEventListener("click", function() {

    valueCount = num.value;
    if(num.value > 0) {
    valueCount --;
    num.value = valueCount;
    } else {
        num.value = 0;
    }
}
)

////////validation

const validateInput = () => {
    var regex = /^[0-9]*$/;

    if(!regex.test(num.value))alert("not a number");
     
    
}

///////////////////////////////////
const addCart = document.querySelector(".cart");
const cartCount = document.querySelector("#counter");
const cartCountMobile = document.querySelector("#counterCell");
const addingNum = () => {
    cartCount.innerHTML = num.value;
    cartCountMobile.innerHTML = num.value;

}

addCart.addEventListener("click", addingNum);

//////////////////////////////////read more
const str = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo.Nemo enim ipsam voluptatem quia voluptas."
const readMore = document.querySelector("#read");
const test = document.getElementById("showed-text");

test.innerHTML=str.substring(0,100);

const showMore = () => {
    test.innerHTML = str;
    readMore.style.display = "none";
}

readMore.addEventListener("click", showMore);


//////////////////////////////////////////TAB CONTENT
/*const firstButton = document.querySelector("#firstButton");
const secondButton = document.querySelector("#secondButton");
const thirdButton = document.querySelector("#thirdButton");

const firstContent = document.querySelector("#firstContent");
const secondContent = document.querySelector("#secondContent");
const thirdContent = document.querySelector("#thirdContent");

const showfirstContent = () => {
secondContent.style.display ="none";
thirdContent.style.display ="none";
firstButton.classList.add("active");
secondButton.classList.remove("active");
thirdButton.classList.remove("active");
}

firstButton.addEventListener("click", showfirstContent);


const showsecondContent = () => {
    firstContent.style.display ="block";
thirdContent.style.display ="none";

secondButton.classList.add("active");
thirdButton.classList.remove("active");
firstButton.classList.remove("active");
}*/

let tabs = document.querySelectorAll(".tab-links");
let contents = document.querySelectorAll(".tab-content");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        contents.forEach((content) => {
content.classList.remove("active");
        })
tabs.forEach((tab) => {

    tab.classList.remove("active");
})

    contents[index].classList.add("active");
    tabs[index].classList.add("active");
})
        })

        const showbefore = () => {
            document.querySelector("#firstButton").classList.add("active");
            document.querySelector("#first-content").classList.add("active");
        }
    window.addEventListener("load", showbefore);

    ///////////////////////////////////////////images on change

    $(document).ready(function(){
        $('.big-section .pictures > img').click(function(){

            var $smallImages = $(this).attr("src");
            $('.big-section .picture > img').attr("src", $smallImages);
        })
    })

    /////////////////////////////////scroll to top
    const scroll = document.querySelector("#scroll");
    function topScroll() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    scroll.addEventListener("click", topScroll);

    ///////////////////////////ZOOM IMG
    
    const buttonClick = document.querySelector("#focusClick")
    const focusPic = document.querySelector("#picToZoom");
 


function openFullscreen() {
  if (focusPic.requestFullscreen) {
    focusPic.requestFullscreen();
  } else if (focusPic.webkitRequestFullscreen) { 
    focusPic.webkitRequestFullscreen();
  } else if (focusPic.msRequestFullscreen) {
    focusPic.msRequestFullscreen();
  }
}

buttonClick.addEventListener('click', openFullscreen);

    /////////////////////////////////
    const printing = document.querySelector("#printButton");

    const printer = () => {

     window.print();
    }

    printing.addEventListener("click", printer );


    /////////////////////////////////////
  