/*
Created by Gilles Manzato
The code is wanted simple and pure javascript, no need of jquery, mvc frameworks or ES2015.
No need of a bazooka to kill a fly :)
*/

// Helpers
var forEach = function (array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

var getWindowWidth = function(){
  var w=window,
  d=document,
  e=d.documentElement,
  g=d.getElementsByTagName('body')[0];
  return w.innerWidth||e.clientWidth||g.clientWidth;
}

var getWindowHeight = function(){
  var w=window,
  d=document,
  e=d.documentElement,
  g=d.getElementsByTagName('body')[0];
  return w.innerHeight||e.clientHeight||g.clientHeight;
}

// Vars

var video;

// background video functions

var resize = function() {
  var width = getWindowWidth(),
      pWidth, // player width, to be defined
      height = getWindowHeight(),
      pHeight, // player height, tbd
      video = document.getElementById('video');
  // when screen aspect ratio differs from video, video must center and underlay one dimension
  if (width / (16/9) < height) { // if new video height < window height (gap underneath)
      pWidth = Math.ceil(height * (16/9)); // get new player width
      video.height = height;
      video.width = pWidth;
      video.style.marginLeft = (-(pWidth - width) / 2)+"px";
      video.style.top = 0;
  } else { // new video width < window width (gap to right)
      pHeight = Math.ceil(width / (16/9)); // get new player height
      video.height = pHeight;
      video.width = width;
      video.style.marginLeft = 0;
      video.style.top = (height - pHeight) / 2;
  }
}


function onYouTubePlayerReady(){
  video = new YT.Player('video', {events: {'onReady': onPlayerReady, 'onStateChange': onPlayerStateChange}});
}

function onPlayerStateChange(data){
  if(data.data){
    isReady();
  }
}
function onPlayerReady() {
  resize();
}

// Common function

function isReady(){
  document.getElementById('loader').classList.add('hide');
  document.getElementById('fullpage').classList.add('ready');
}

// Init
var md = new MobileDetect(window.navigator.userAgent);
var fontObserver = new FontFaceObserver('Roboto', {
  weight: 300
});

// Events
window.onresize = resize;


// Use fullscreen and youtube video only
if(!(md.mobile() || md.tablet())){
  // Init Fullpage
  onePageScroll('#fullpage');

  // This code loads the IFrame Player API code asynchronously.
  var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // This function creates an <iframe> (and YouTube player)
  //    after the API code downloads.
  var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('video', {
      width: window.innerWidth,
      height : '100%',
      videoId: 'ioqLNhZXwFY',
      playerVars: {
        autoplay: 1,
        controls: 0 ,
        mute: true,
        rel:0,
        loop: 1,
        enablejsapi : 1,
        relatedVideos: 0,
        modestbranding : 0,
        showinfo: 0,
        playlist: 'ioqLNhZXwFY'

      },
      events: {
        'onReady': onPlayerReady,
        'onStateChange': onPlayerStateChange
      }
    });
  }
}
//
else {
  var list = document.querySelectorAll('section');
  fontObserver.check().then(
      function() {
        // JavaScript to execute when fonts start loading
        isReady();

        forEach(list, function(index, el){
          console.log(el)
          el.classList.add('active');
        });
      },
      function() {
      }
    );
}





