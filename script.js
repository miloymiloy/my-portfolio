

var changedtheme = localStorage.getItem("darkmode") // GET THE STORED CLICKED EVENT BY LOCALSTORAGE

function themeDarkmode() {
    $("#changeBG").removeClass("bx bxs-moon bx-sm");
    $("#changeBG").addClass("bx bxs-sun bx-rotate-90 bx-sm");
    $("#changeBG").css({ 'background-color': 'white', 'color': 'gray' });
    $("#container").css('background-color', 'black');
    $(".changebg").css('color', 'white');
    $(".popupbg").css('background-color', 'black');
    $(".changebgimg").css('border', '1px solid white');
    $(".nav-active-menu").css('border-top', '1px solid white');
    $(".about-header, .mysocials-header").css('border-bottom', '1px solid white');
    $(".popupBG").css({ 'background-color': 'black', 'color': 'white', 'border': '1px solid white' });
    $(".content-category-title").css({ 'background-color': '#404443', 'color': 'white' });
    $(".icons").css({ 'color': 'black', '-webkit-box-shadow': ' -1px 0px 26px -1px rgba(255,255,255,1)', '-moz-box-shadow': '-1px 0px 26px -1px rgba(255,255,255,1);', 'box-shadow': '-1px 0px 26px -1px rgba(255,255,255,1)' });
}
function themeNormalmode() {
    $("#changeBG").removeClass("bx bxs-sun bx-rotate-90 bx-sm");
    $("#changeBG").addClass("bx bxs-moon bx-sm");
    $("#changeBG").css({ 'background-color': 'gray', 'color': 'white' });
    $("#container").css('background-color', 'white');
    $(".changebg").css('color', 'black');
    $(".nav-active-menu").css('border-top', '1px solid black');
    $(".about-header, .mysocials-header").css('border-bottom', '1px solid black');
    $(".content-category-title").css({ 'background-color': '#f2f2f2', 'color': 'black' });
    $(".popupBG").css({ 'background-color': 'white', 'color': 'black' });
    $(".icons").css({ '-webkit-box-shadow': '-1px 0px 26px -1px rgba(0,0,0,0.75)', '-moz-box-shadow': '-1px 0px 26px -1px rgba(0,0,0,0.75)', 'box-shadow': '-1px 0px 26px -1px rgba(0,0,0,0.75)' });
}

$(document).ready(function () {

    AOS.init();

    //ONLOAD CHECK IF DARK MODE CLICKED
    var changetheme = "no";
    if (changedtheme == "yes") {
        themeDarkmode();
    }
    else {
        themeNormalmode();
    }

    //PROJECT IMAGE HOVER SHOW DETAILS
    $('.proj1').mouseenter(function () {
        $('.projshow1').css('display', 'block');
    })
    $('.proj1').mouseleave(function () {
        $('.projshow1').css('display', 'none');
    })

    $('.proj2').mouseenter(function () {
        $('.projshow2').css('display', 'block');
    })
    $('.proj2').mouseleave(function () {
        $('.projshow2').css('display', 'none');
    })

    $('.proj3').mouseenter(function () {
        $('.projshow3').css('display', 'block');
    })
    $('.proj3').mouseleave(function () {
        $('.projshow3').css('display', 'none');
    })


    //PROJECTS MENU CLICK
    $('.projects-menu').click(function () {
        window.location = "index.html";
    })

    // PHOTOS MENU CLICK
    $('.photos-menu').click(function () {
        window.location = "photos.html";
    })

    // OTHERS MENU CLICK
    $('.others-menu').click(function () {
        window.location = "other.html";
    })


    //MESSAGE CLICK
    $('.messageBtn').click(function () {
        window.location = "message-me.html";
    })

    //VIEW PROFILE CLICK
    $('.viewprofileBtn').click(function () {
        window.location = "profile.html";
    })


    // CHANGE THEME COLOR
    changetheme = changedtheme;
    $('.icon-box').click(function () {
        if (changetheme == "no") {
            themeDarkmode();
            changetheme = "yes";
            localStorage.setItem("darkmode", changetheme);
        }
        else {
            themeNormalmode();
            changetheme = "no";
            localStorage.setItem("darkmode", changetheme); //STORE CLICKED EVENT BY LOCALSTORAGE
        }
    })


    //GET YEAR
    let date = new Date();
    let year = date.getFullYear();

    let time = 0;
    let hrs = date.getHours();
    $(".footer-year").text(year);

    if (hrs <= 11 && hrs >= 4) {
        $('.greetchange').text('OHAYO');
    }
    else if (hrs <= 17 && hrs >= 12) {
        $('.greetchange').text('KONNICHIWA');
    }
    else {
        $('.greetchange').text('KONBANWA');
    }



    // ABOUT ME ONCLICK SHOW DETAILS
    var messclicked = "no";
    $('.titleabout').click(function (e) {
        if (messclicked == "no") {
            e.preventDefault();
            messclicked = "yes";
            $(this).closest('.titleabout').find('.aboutmenu').css('border-bottom', '1px solid gray');
            $(this).closest('.titleabout').find('.toggleinfo').toggle();
        }
        else {
            $(this).closest('.titleabout').find('.aboutmenu').css('border-bottom', 'unset');
            $(this).closest('.titleabout').find('.toggleinfo').hide();
            messclicked = "no";
        }
    })


    // PHOTOS CATEGORY CLICK SHOW IMAGE
    var contentCategoryclick = "no";
    $('.content-category-title').click(function (e) {
        if (contentCategoryclick == "no") {
            e.preventDefault();
            contentCategoryclick = "yes";
            $(this).closest('.content-category').find('.content-box').css('display', 'flex');
            AOS.init();
        }
        else {
            $(this).closest('.content-category').find('.content-box').hide();
            contentCategoryclick = "no";
        }
    })


    // PROJECTS IMAGE HOVER
    $('.content-box').mouseenter(function (e) {
        e.preventDefault();
        $(this).closest('.content-box').find('.content-details-show').css('display', 'block');
    })
    $('.content-box').mouseleave(function (e) {
        e.preventDefault();
        $(this).closest('.content-box').find('.content-details-show').css('display', 'none');
    })



    // SHOW FULL IMAGE ON SCREEN
    $('.content-box').click(function () {
        var imgshow = $(this).closest('.content-box').find('.changebgimg').attr('src');
        var idName = $(this).closest('.content-box').find('.changebgimg').attr('id');
        if (idName == ('id', 'milo3')) {
            $('.showImgsrc').attr('src', imgshow);
        }
        else if (idName == ('id', 'milo3')) {
            $('.showImgsrc').attr('src', imgshow);
        }
        else {
            $('.showImgsrc').attr('src', imgshow);
        }

        $('#showImg').modal('toggle');
    })

    // CLOSE FULL IMAGE MODAL
    $('.showImgclose').click(function () {
        $('#showImg').modal('hide');
    })

    $("body").on("contextmenu", "img", function(e) {
        return false;
      });

})