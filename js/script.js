$(document).ready(function () {

    $("#home-section-title").css('transform', 'scale(1)');

    const skillsPos = $("#skills_section").position().top - 50;
    const expPos = $("#exp_section").position().top - 50;
    const educPos = $("#educ_section").position().top - 50;
    const projPos = $("#projects_section").position().top - 50;
    const aboutPos = $("#about_sect").position().top - 50;


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();

        if (window.screen.width < 500) {
            $("#navbar").css('height', '60px');
            $("#navbar").css('background', 'transparent');
            $("#navbar_links a").css('display', 'none');
        }

        if (scroll > 100) {
            $("#navbar").css('background', 'rgb(23, 25, 29)');
        }

        if (scroll < 100) {
            $("#navbar").css('background', 'transparent');
        }

        if (scroll < skillsPos) {
            $("#navbar_links a").removeClass('position');
        }

        if (scroll > skillsPos) {
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(2)").first().addClass('position');
        }
        if (scroll > expPos) {
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(3)").first().addClass('position');
        }
        if (scroll > educPos) {
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(4)").first().addClass('position');
        }
        if (scroll > projPos) {
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(5)").first().addClass('position');
        }
        if (scroll > aboutPos) {
            $("#navbar_links a").removeClass('position');
            $("#navbar_links a:nth-child(6)").first().addClass('position');
        }
    });

    $("#arrow_skills").on('click', function () {
        $('html,body').animate({ scrollTop: skillsPos + 20 }, 1000);
    })

    $("#navbar_links a").on('click', function () {
        if ($(this).html() == "Skills") {
            $('html,body').animate({ scrollTop: skillsPos + 20 }, 1000);
        }
        if ($(this).html() == 'Experience') {
            $('html,body').animate({ scrollTop: expPos + 20 }, 1000);
        }
        if ($(this).html() == 'Education') {
            $('html,body').animate({ scrollTop: educPos + 20 }, 1000);
        }
        if ($(this).html() == 'Projects') {
            $('html,body').animate({ scrollTop: projPos + 20 }, 1000);
        }
        if ($(this).html() == 'About') {
            $('html,body').animate({ scrollTop: aboutPos + 20 }, 1000);
        }
    })

    $("#hamburger_menu").click(function () {
        if ($("#navbar_links a").css('display') == 'none') {
            $("#navbar").css('height', '400px');
            $("#navbar").css('background', 'rgb(23, 25, 29)');
            $("#navbar_links a").css('display', 'block');
        }
        else {
            $("#navbar").css('height', '60px');
            $("#navbar").css('background', 'transparent');
            $("#navbar_links a").css('display', 'none');
        }

    })
})