var FXManager = {
    snd_certo : new Audio("objetos/snd/acerto.mp3"),
    snd_erro : new Audio("objetos/snd/erro.mp3"),
    snd_aplauso : new Audio("objetos/snd/aplauso.mp3")
}


jQuery("document").ready(function($){

    $('#modal-audio_agua').modal('show');

    var audioAgua = document.getElementById("audio-agua");
    var btnAgua = '0';

    $(".btn-audio_agua").click(function(){
        audioAgua.volume = 0.3;
    });
    $(".btn-play_audio").click(function(){
        if(btnAgua == '0'){
            audioAgua.play();
            btnAgua = '1';
        }else if(btnAgua == '1'){
            audioAgua.pause();
            btnAgua = '0';
        }
    });
});
