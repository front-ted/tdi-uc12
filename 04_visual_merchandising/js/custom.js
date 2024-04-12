var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
}

$(".menu label.menu-toggle").click(function(){
    $(".bg-fundo").toggleClass("mod");
    $('body').toggleClass('overflow');
    $('.menu').toggleClass('fade-check');
});

$(".bg-fundo").click(function(){
    $(this).removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});

$(".fundo-item").click(function(){
    $(".bg-fundo").removeClass("mod");
    $('body').removeClass('overflow');
    $('.menu').removeClass('fade-check');
});


function horaCerta(){

    var data = new Date();

    var h = data.getHours() <= 9 ? "0"+data.getHours() : data.getHours();
    var m = data.getMinutes() <= 9 ? "0"+data.getMinutes() : data.getMinutes();
    var s = data.getSeconds() <= 9 ? "0"+data.getSeconds() : data.getSeconds();
    var hora = h+":"+m;
    var horaCerta = hora.toLocaleString();
    document.getElementById('hora-certa').innerHTML = horaCerta;

    setTimeout('horaCerta()',500);
};

$(document).ready(function(){
    $('.btn-wifi').click(function(){
        $(".conteudo-wifi").css("display", "block");
        $(".conteudo-terminais").css("display", "none");
        $(".conteudo-chatbots").css("display", "none");
        $(".conteudo-aplicativo").css("display", "none");
    });

    $('.btn-terminais').click(function(){
        $(".conteudo-wifi").css("display", "none");
        $(".conteudo-terminais").css("display", "block");
        $(".conteudo-chatbots").css("display", "none");
        $(".conteudo-aplicativo").css("display", "none");
    });

    $('.btn-chatbots').click(function(){
        $(".conteudo-wifi").css("display", "none");
        $(".conteudo-terminais").css("display", "none");
        $(".conteudo-chatbots").css("display", "block");
        $(".conteudo-aplicativo").css("display", "none");
    });

    $('.btn-aplicativo').click(function(){
        $(".conteudo-wifi").css("display", "none");
        $(".conteudo-terminais").css("display", "none");
        $(".conteudo-chatbots").css("display", "none");
        $(".conteudo-aplicativo").css("display", "block");
    });
});