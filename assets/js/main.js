var anim = {
  
  timeline: function(){
    var supportsTouch = 'ontouchstart' in document.documentElement;
    var tl = new TimelineMax();
    var tlm = new TimelineMax({repeat:-1, repeateDelay:.6});
    var l = 215;
    var counter = 0;
    var barsCount = 0;
    var moveAmount = 7;
    var waves = ['wave1', 'wave2', 'wave3'];
    var convo = false;
    var t1 = document.getElementById('text1');
    var t2 = document.getElementById('text2');
    var t3 = document.getElementById('text3');
    var t4 = document.getElementById('text4');
    var t5 = document.getElementById('text5');
    var t6 = document.getElementById('text6');
    var t7 = document.getElementById('text7');
    var t8 = document.getElementById('text8');
    var t9 = document.getElementById('text9');
    var t10 = document.getElementById('text10');
    var t11 = document.getElementById('text11');
    var t12 = document.getElementById('text12');
    var t13 = document.getElementById('text13');
    var t14 = document.getElementById('text14');
    var t15 = document.getElementById('text15');
    var click0 = document.getElementById('click0');
    click0.volume = 0;
    var click = document.getElementById('click');
    var swipe = document.getElementById('swipe');
    var call = document.getElementById('call');
    
    // Sounds
    var playClick = function(){
      click.play();
    }
    
    var playSwipe = function(){
      swipe.play();
    }
    
    var playCall = function(){
      call.play();
    }
    
    var clickDelay = function(){
      click0.play();
      setTimeout(playClick, 500);
    }
    
    var randomFromInterval = function(from,to){
        return Math.floor(Math.random()*(to-from+1)+from);
    }
    
    // Lobby conversation
    var startBars = function(){
      convo = true;
      blueBars();
      greenBars();
      pinkBars();
      TweenMax.to('wave1', .4, {opacity:1});
      TweenMax.to('wave2', .4, {opacity:1});
      TweenMax.to('wave3', .4, {opacity:1});
      setTimeout(stopBars, 7000);
    }
    
    var stopBars = function(){
      convo = false;
      TweenMax.to('wave1', .4, {opacity:0});
      TweenMax.to('wave2', .4, {opacity:0});
      TweenMax.to('wave3', .4, {opacity:0});
      handleReplay();
    }
    
    var blueBars = function(){
      var t1 = randomFromInterval(12,27);
      var t2 = randomFromInterval(12,27);
      var t3 = randomFromInterval(12,27);
      var t4 = randomFromInterval(12,27);
      var t = randomFromInterval(2,8);
      var wait = t+'00';
      
      if(convo){
        TweenMax.to('blue1', .2, {top:t1, ease:Cubic.easeOut});
        TweenMax.to('blue2', .2, {top:t2, ease:Cubic.easeOut});
        TweenMax.to('blue3', .2, {top:t3, ease:Cubic.easeOut});
        TweenMax.to('blue4', .2, {top:t4, ease:Cubic.easeOut});
        
        TweenMax.to('blue1', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('blue2', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('blue3', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('blue4', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        
        setTimeout(blueBars, Number(wait));
      }
    }
    
    var greenBars = function(){
      var t1 = randomFromInterval(12,27);
      var t2 = randomFromInterval(12,27);
      var t3 = randomFromInterval(12,27);
      var t4 = randomFromInterval(12,27);
      var t = randomFromInterval(2,8);
      var wait = t+'00';
      
      if(convo){
        TweenMax.to('green1', .2, {top:t1, ease:Cubic.easeOut});
        TweenMax.to('green2', .2, {top:t2, ease:Cubic.easeOut});
        TweenMax.to('green3', .2, {top:t3, ease:Cubic.easeOut});
        TweenMax.to('green4', .2, {top:t4, ease:Cubic.easeOut});
        
        TweenMax.to('green1', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('green2', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('green3', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('green4', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        
        setTimeout(greenBars, Number(wait));
      }
    }
    
    var pinkBars = function(){
      var t1 = randomFromInterval(12,27);
      var t2 = randomFromInterval(12,27);
      var t3 = randomFromInterval(12,27);
      var t4 = randomFromInterval(12,27);
      var t = randomFromInterval(2,8);
      var wait = t+'00';
      
      if(convo){
        TweenMax.to('pink1', .2, {top:t1, ease:Cubic.easeOut});
        TweenMax.to('pink2', .2, {top:t2, ease:Cubic.easeOut});
        TweenMax.to('pink3', .2, {top:t3, ease:Cubic.easeOut});
        TweenMax.to('pink4', .2, {top:t4, ease:Cubic.easeOut});
        
        TweenMax.to('pink1', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('pink2', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('pink3', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        TweenMax.to('pink4', .2, {top:27, ease:Cubic.easeOut, delay:.2});
        
        setTimeout(pinkBars, Number(wait));
      }
    }
    
    var getRandomArrayElements = function (arr, count) {
      var randoms = [], clone = arr.slice(0);
      for (var i = 0, index; i < count; ++i) {
          index = Math.floor(Math.random() * clone.length);
          randoms.push(clone[index]);
          clone[index] = clone.pop();
      }
      return randoms;
    }
    
    var waveSwitch = function(){
      if(convo){
        TweenMax.to('wave1', .4, {opacity:1});
        TweenMax.to('wave2', .4, {opacity:1});
        TweenMax.to('wave3', .4, {opacity:1});
        /*var waveCount = randomFromInterval(1,3);
        var w = getRandomArrayElements(waves, waveCount);
        var i;
        var t = randomFromInterval(0,6);
        var wait = '1'+t+'00';
        
        for(i = 0; i < w.length; i++){
          TweenMax.to(w[i], .1, {opacity:1});
          TweenMax.to(w[i], .1, {opacity:0, delay:1.2});
        }
        setTimeout(waveSwitch, Number(wait));*/
      }
    }
    
    // Notes type cursor
    var moveCursor = function(){
      if(counter === 1)moveAmount = 5;
      else if(counter === 2)moveAmount = 7;
      else if(counter === 3)moveAmount=9;
      else if(counter === 4)moveAmount=6;
      else if(counter === 5)moveAmount=4;
      else if(counter === 6)moveAmount=3;
      else if(counter === 7)moveAmount=5;
      else if(counter === 9)moveAmount=6;
      else if(counter === 10)moveAmount=5;
      else if(counter === 11)moveAmount=6;
      else if(counter === 12)moveAmount=3;
      else if(counter === 13)moveAmount=5;
      else if(counter === 14)moveAmount=3;
      
      l += moveAmount;
      
      if(counter < 15){
        TweenMax.to('cursor1', 0, {left:l});
        TweenMax.to('tom', 0, {left:l}); 
      }
      counter++;
    }
    
    // Replay handler
    var handleReplay = function(){
      l = 215;
      counter = 0;
      moveAmount = 7;
      TweenMax.to('cursor1', 0, {left:l});
      TweenMax.to('tom', 0, {left:l});
      TweenMax.to('lobby', .4, {opacity:0, delay:1.5, onComplete:restart});
    }
    
    var restart = function(){
      tl.restart();
      tlm.restart();
    }
    
    // ANIMATION ///////////////////////////////////////////////////////////////
    TweenMax.to('globals', .4, {opacity:1, delay:.4});
    TweenMax.to('laptop', .4, {opacity:1, delay:.4});
    TweenMax.to('overlay', .4, {opacity:1, delay:.4});
    TweenMax.to('pointer', .4, {opacity:1, delay:.4});
    
    // Presentation
    tl.to('home-btn', .4, {opacity:1, delay:1.1});
    tl.to('doc-title', .4, {left:-59, opacity:1, ease:Cubic.easeInOut});
    tl.to('doc-tools', .4, {top:-31, opacity:1, ease:Cubic.easeInOut});
    tl.to('st-img', .5, {opacity:1, top:0, ease:Cubic.easeOut});
    tl.to('blue-pin', .5, {opacity:1, top:46, ease:Bounce.easeOut});
    tl.to('blue-shadow', .3, {opacity:1});
    tl.to('blue-dots', .8, {width:259, ease:Cubic.easeOut});
    tl.to('comment1', .3, {opacity:1, left:282, ease:Cubic.easeOut});
    tl.to('green-pin', .5, {opacity:1, top:127, ease:Bounce.easeOut});
    tl.to('green-shadow', .3, {opacity:1});
    tl.to('green-dots', .8, {width:86, ease:Cubic.easeOut});
    tl.to('comment2', .3, {opacity:1, left:282, ease:Cubic.easeOut});
    tl.to('pointer', .8, {top:58, left:155, ease:Cubic.easeOut, onComplete:clickDelay});
    
    tl.to('ripple', 0, {opacity:.4, delay:.5});
    tl.to('rippleImg', .4, {width:44, height:44, ease:Cubic.easeOut});
    tl.to('ripple', .4, {opacity:0, top:40, left:136, ease:Cubic.easeOut}, '-=.4');
    
    tl.to('pointer', 1, {top:55, left:260, ease:Cubic.easeInOut, delay:1});
    tl.to('home-btn', .4, {opacity:0}, '-=1.2');
    tl.to('doc-tools', .4, {top:-37, opacity:0, ease:Cubic.easeInOut}, '-=.8');
    tl.to('doc-title', .4, {left:-63, opacity:0, ease:Cubic.easeInOut}, '-=.4');
    tl.to('storytelling', .3, {opacity:0, onStart:playSwipe});
    
    // Lobby
    tl.to('lobby', .2, {opacity:1});
    tl.to('lobby-title', .4, {left:-74, opacity:1, ease:Cubic.easeInOut}, '-=.2');
    tl.to('lobby-tools', .4, {opacity:1, top:-22, ease:Cubic.easeOut});
    tl.to('newdocument', .3, {opacity:1});
    tl.to('nextsteps', .3, {opacity:1}, '-=.3');
    tl.to('mockup', .3, {opacity:1}, '-=.3');
    tl.to('design', .3, {opacity:1}, '-=.3');
    tl.to('todo', .3, {opacity:1}, '-=.3');
    
    tl.to('nextsteps', .4, {opacity:0, delay:.5});
    tl.to('nextsteps', 0, {top:115, left:5});
    tl.to('newdocument', .4, {left:98}, '-=.3');    
    tl.to('nextsteps', .4, {left:13, opacity:1});
    tl.to('mockup', .4, {left:268}, '-=.3');
    tl.to('design', .4, {left:182}, '-=.3');
    tl.to('todo', .4, {left:98}, '-=.3');
    tl.to('presentation', .4, {left:13, opacity:1}, '-=.3');
    tl.to('pointer', .8, {top:225, left:260, ease:Cubic.easeInOut, onComplete:clickDelay});
    
    tl.to('ripple', 0, {opacity:.4, top:215, left:250, delay:.5});
    tl.to('rippleImg', 0, {width:22, height:22}, '-=.5');
    tl.to('rippleImg', .4, {width:44, height:44, ease:Cubic.easeOut});
    tl.to('ripple', .4, {opacity:0, top:205, left:240, ease:Cubic.easeOut}, '-=.4');
    
    tl.to('pointer', 1, {top:240, left:180, ease:Cubic.easeInOut, delay:.8});
    tl.to('lobby-title', .4, {left:-84, opacity:0, ease:Cubic.easeInOut}, '-=.8');
    tl.to('lobby-tools', .4, {opacity:0, top:-26, ease:Cubic.easeOut}, '-=.4');
    tl.to('lobby', .2, {opacity:0});
    tl.to('newdocument', 0, {opacity:0});
    tl.to('nextsteps', 0, {opacity:0});
    tl.to('mockup', 0, {opacity:0});
    tl.to('design', 0, {opacity:0});
    tl.to('todo', 0, {opacity:0});
    tl.to('presentation', 0, {opacity:0, onStart:playSwipe});
    
    // Notes
    tl.to('notes', .8, {opacity:1});
    tl.to('home-btn', .4, {opacity:1}, '-=.8');
    tl.to('note-title', .4, {left:-57, opacity:1, ease:Cubic.easeInOut});
    tl.to('note-tools', .4, {opacity:1, top:-20, ease:Cubic.easeOut});
    tl.to('copy', .4, {opacity:1});
    tl.to('top-text', .4, {opacity:.9}, '-=.4');
    tl.to('tom', .4, {opacity:1}, '-=.4');
    tl.to('clara', .4, {opacity:1}, '-=.4');
    tl.to('cursors', .4, {opacity:1}, '-=.4');
    tlm.to('cursor1',.3,{opacity:.9}, '-=.4');
    tlm.to('cursor2',.3,{opacity:.9}, '-=.4');
    tlm.to('cursor3',.3,{opacity:.9}, '-=.4');
    tl.to('highlight1', 1.3, {width:271});
    tl.to('clara', 1.3, {left:283}, '-=1.3');
    tl.to('cursor2', 1.3, {left:283}, '-=1.3');
    tl.to(t1, 0, {opacity:1, onComplete:moveCursor});
    tl.to(t2, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t3, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t4, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t5, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t6, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t7, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t8, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t9, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t10, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t11, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t12, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t13, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t14, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to(t15, 0, {opacity:1, onComplete:moveCursor, delay:.2});
    tl.to('highlight1', .1, {width:329, delay:.4}, '-=2.6');
    tl.to('highlight2', .1, {height:11}, '-=2.2');
    tl.to('clara', .1, {top:155}, '-=2.2');
    tl.to('cursor2', .1, {top:141}, '-=2.2');
    tl.to('highlight2', .9, {width:251}, '-=1.5');
    tl.to('clara', .9, {left:263}, '-=1.5');
    tl.to('cursor2', .9, {left:262}, '-=1.5');
    tl.to('pointer', .8, {top:58, left:155, ease:Cubic.easeInOut, onComplete:clickDelay});
    
    tl.to('ripple', 0, {opacity:.4, top:55, left:146, delay:.5});
    tl.to('rippleImg', 0, {width:22, height:22}, '-=.5');
    tl.to('rippleImg', .4, {width:44, height:44, ease:Cubic.easeOut});
    tl.to('ripple', .4, {opacity:0, top:40, left:136, ease:Cubic.easeOut}, '-=.4');
    
    tl.to('pointer', 1, {top:240, left:180, ease:Cubic.easeInOut, delay:.8});
    tl.to('home-btn', .4, {opacity:0}, '-=.8');
    tl.to('note-tools', .4, {opacity:0, top:-27, ease:Cubic.easeInOut}, '-=.4');
    tl.to('note-title', .4, {left:-60, opacity:0, ease:Cubic.easeInOut});
    tl.to('notes', .3, {opacity:0, onStart:playSwipe});
    
    // Lobby 
    tl.to('lobby', .2, {opacity:1});
    tl.to('lobby-title', .4, {left:-74, opacity:1, ease:Cubic.easeInOut});
    tl.to('lobby-tools', .4, {opacity:1, top:-22, ease:Cubic.easeOut});
    tl.to('newdocument', .3, {opacity:1});
    tl.to('nextsteps', .3, {opacity:1}, '-=.3');
    tl.to('mockup', .3, {opacity:1}, '-=.3');
    tl.to('design', .3, {opacity:1}, '-=.3');
    tl.to('todo', .3, {opacity:1}, '-=.3');
    tl.to('presentation', .3, {opacity:1}, '-=.3');
    
    tl.to('call-popup', .6, {opacity:1, delay: 1.5, onStart:playCall});
    tl.to('pointer', .8, {top:259, left:340, ease:Cubic.easeOut, onComplete:clickDelay});
    
    tl.to('ripple', 0, {opacity:.4, top:255, left:330, delay:.5});
    tl.to('rippleImg', 0, {width:22, height:22}, '-=.5');
    tl.to('rippleImg', .4, {width:44, height:44, ease:Cubic.easeOut});
    tl.to('ripple', .4, {opacity:0, top:240, left:320, ease:Cubic.easeOut}, '-=.4');
    
    tl.to('pointer', 1, {top:220, left:210, delay:.3});
    tl.to('call-popup', .4, {opacity:0, delay: .2, onComplete:startBars}, '-=.5');
  }
  
};

