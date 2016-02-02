$(function(){

  // Init Plugins
  $('#fullpage').fullpage();

  function addVideoEvents(){
    var bgVideo = $('#video').data('ytPlayer').player;
    bgVideo.addEventListener('onStateChange',function(data){
      if(data.data){
        isReady();
      }
    });
  }

  function isReady(){
    $('#loader').fadeOut();
    $('#fullpage').addClass('ready');
  }

  $('#video').YTPlayer({
    fitToBackground: true,
    videoId: 'r86NuFLqqi8',
    playerVars: {
      modestbranding: 0,
      showinfo: 0,
      branding: 0
    },
    callback: function(){
      addVideoEvents()
    }
  });
//isReady();
});

