var md = new MobileDetect(window.navigator.userAgent);
var fontObserver = new FontFaceObserver('Roboto', {
  weight: 300
});


$(function(){
   console.log(md.mobile());
  // Don't use Fullpage and Background Video when it's a mobile (take too much resources and it's not really usable)
  if(!md.mobile()){
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
  } else {
    // For the mobile we just wait that the font are ready !
    fontObserver.check().then(
      function() {
        // JavaScript to execute when fonts start loading
        console.log('font ready');
        isReady();
        $('.section').addClass('active');
      },
      function() {
        console.log('font fail');
        // JavaScript to execute when fonts become active

      }
    );
  }

  function isReady(){
    $('#loader').fadeOut();
    $('#fullpage').addClass('ready');

  }
//isReady();
});

