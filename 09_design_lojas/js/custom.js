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

jQuery("document").ready(function($){

    var pg_number = parseInt(window.location.href.split('?')[1].split('=')[1]);
  
    document.body.style.backgroundImage = "url('imgs/bg_01.jpg')";

    if(pg_number == 1){
        document.body.style.backgroundImage = "url('imgs/bg_01.jpg')";
    }else if(pg_number == 2){
        document.body.style.backgroundImage = "url('imgs/bg_02.jpg')";
    }else if(pg_number == 3){
        document.body.style.backgroundImage = "url('imgs/bg_03.jpg')";
    }else{
        document.body.style.backgroundImage = "url('imgs/bg_01.jpg')";
    }
    
});


$(".btn-prateleiras").click(function(){
    $(this).addClass("visitado");
});
$(".btn-balcoes").click(function(){
    $(this).addClass("visitado");
});
$(".btn-vitrines").click(function(){
    $(this).addClass("visitado");
});
$(".btn-araras").click(function(){
    $(this).addClass("visitado");
});
$(".btn-gondolas_centrais").click(function(){
    $(this).addClass("visitado");
});
$(".btn-ponta_gondola").click(function(){
    $(this).addClass("visitado");
});
$(".btn-gondolas_inclinada").click(function(){
    $(this).addClass("visitado");
});
$(".btn-gondolas_checkout").click(function(){
    $(this).addClass("visitado");
});
$(".btn-moveis_caixa").click(function(){
    $(this).addClass("visitado");
});
$(".btn-provadores").click(function(){
    $(this).addClass("visitado");
});
$(".btn-quiosques_interativos").click(function(){
    $(this).addClass("visitado");
});
$(".btn-bancadas").click(function(){
    $(this).addClass("visitado");
});
$(".btn-manequins").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_giratorios").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_livros").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_joias").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_aquecidos").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_refrigerados").click(function(){
    $(this).addClass("visitado");
});


$(".btn-prateleiras_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-balcoes_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-vitrines_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-araras_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-gondolas_centrais_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-ponta_gondola_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-gondolas_inclinada_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-gondolas_checkout_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-moveis_caixa_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-provadores_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-quiosques_interativos_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-bancadas_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-manequins_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_giratorios_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_livros_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_joias_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_aquecidos_mobile").click(function(){
    $(this).addClass("visitado");
});
$(".btn-expositores_refrigerados_mobile").click(function(){
    $(this).addClass("visitado");
});