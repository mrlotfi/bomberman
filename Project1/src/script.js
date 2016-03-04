function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

var number_of_items = 0;
var item_list_x = [];
var item_list_y = [];
var item_list_type = [];

var number_of_zombies = 0;
var zombies_list_x = [];
var zombies_list_y = [];

var walls_list_x = [];
var walls_list_y = [];

var board_width;
var board_height;

var playerx,playery,playerxx,playeryy;

var bomb_radius = 1;
var pass_walls = false;

var time;
var lang="fa";
var background_color;
var base_square_size;

//Here lies some constants
var bomb_key = 32;
var right_key = 39;
var left_key = 37;
var up_key = 38;
var down_key = 40;

function logSummary() {
  console.log('printing items');
  for(var i=0;i<item_list_type.length;i++) {
    console.log(item_list_x[i],item_list_y[i],'type',item_list_type[i]);
  }
  console.log('printing zombies');
  for(i=0;i<zombies_list_x.length;i++) {
    console.log(zombies_list_x[i],zombies_list_y[i]);
  }
  console.log('walls');
  for(i=0;i<walls_list_x.length;i++) {
    console.log(walls_list_x[i],walls_list_y[i]);
  }
  console.log('player',playerx,playery,playerxx,playeryy);
  console.log('chosen background color was '+background_color);
}


/*********board creation and initial setup************************/
function initGame() {
  time = 0;
  background_color = $('.colorpicker').val();
  //hide the startupmenu
  $('#startup_form').hide();
  $('.itemx').each(function(index , element) {
      item_list_x[index] = this.value;
  });
  $('.itemy').each(function(index , element) {
      item_list_y[index] = this.value;
  });
  $('.itemtype').each(function(index , element) {
      item_list_type[index] = this.value;
  });
  board_width = $('#startup_form div input').eq(0).val();
  board_height = $('#startup_form div input').eq(1).val();
  number_of_zombies = $('#startup_form div input').eq(2).val();

  //Now we are ready to create zombies
  for(var i=0;i<number_of_zombies;i++) {
    var zombie_x,zombie_y;
    do {
    zombie_x = Math.floor(Math.random() * board_width);
    zombie_y = Math.floor(Math.random() * board_height);
  } while((zombie_x==0 && zombie_y==0) || ((zombie_x % 2) == 1 && (zombie_y % 2) == 1) || (item_list_x.indexOf(zombie_x)!=-1 && item_list_y.indexOf(zombie_y)!=-1));
    zombies_list_x.push(zombie_x);
    zombies_list_y.push(zombie_y);
  }
  //Now create the walls. items should be covered. walls should not interfere with zombies.1/4 of area is wall?
  var temp = Math.floor(board_height * board_width / 4);
  for(i=0;i<item_list_type.length;i++) {
    if((item_list_x[i]%2==1) && (item_list_y[i]%2==1))
      continue;
    walls_list_x.push(item_list_x[i]);
    walls_list_y.push(item_list_y[i]);
  }
  for(i=0;i<temp;i++) {
    var wallx,wally;
    wallx = Math.floor(Math.random()*board_width);
    wally = Math.floor(Math.random()*board_height);
    if(zombies_list_x.indexOf(wallx) != -1 || zombies_list_y.indexOf(wally) != -1 || ((wallx%2 == 1) && (wally%2==1)) || (walls_list_x.indexOf(wallx)!=-1 && walls_list_y.indexOf(wally)!=-1) || (wallx==0 && wally==0))
      continue;
    walls_list_x.push(wallx);
    walls_list_y.push(wally);
  }
  playerx = playery = playerxx = playeryy = 0;
  logSummary();


  time_update();
  zombie_update();
  setInterval(time_update , 1000);
  setInterval(move_zombies, 1000);
  $('.game').show();
  $('.topbar').show();
  

  initBoard();
}


function initBoard() {
  var current_height = $(window).height();
  var current_width = $(window).width();
  var ratio = board_height / board_width;
  if(( current_height / board_height) < (current_width / board_width)) {
       $('.game').css('max-width',''+ (current_height*0.8/ratio)+'px');
       base_square_size = 100.0 * ratio / board_height;
  }
  else {
      $('.game').css('width','90%');
      base_square_size = 100.0 / board_width;
  }
  console.log(base_square_size);
  $('.board').css('padding-top', ratio*100+'%');
  $('.board').css('background', background_color);
  /*for(var i=0;i<board_width;i++) {
    for(var j=0;j<board_height;j++) {
      $('.board').append('<div style=\"' +
        'padding-top:'+ base_square_size+'%;'+
        'width:'+base_square_size+'%;'+
        'left:' + getLeft(i)+'%;'+
        'top:'+ getRight(j)+'%;\" ' +
        'class="base"><div class="wall"></div></div>');
    }
  }*/
  for(var i=1;i<board_width;i+=2) {
    for(var j=1;j<board_height;j+=2) {
      $('.board').append('<div style=\"' +
        'padding-top:'+ base_square_size+'%;'+
        'width:'+base_square_size+'%;'+
        'left:' + getLeft(i)+'%;'+
        'top:'+ getRight(j)+'%;\" ' +
        'class="base" style="z-index:1000;"><div class="concrete"><div style="width:100%;height:100%;background:gray"></div></div></div>');
    }
  }
  for(i=0;i<item_list_type.length;i++) {
      $('.board').append('<div style=\"' +
        'padding-top:'+ base_square_size+'%;'+
        'width:'+base_square_size+'%;'+
        'left:' + getLeft(item_list_x[i])+'%;'+
        'top:'+ getRight(item_list_y[i])+'%;\" ' +
        'class="base" style="z-index:1;" id=\"item'+i +'\"><div class=\"'+item_list_type[i]+'\"></div></div>');
  }
  for(i=0;i<zombies_list_x.length;i++) {
      $('.board').append('<div style=\"' +
        'padding-top:'+ base_square_size+'%;'+
        'width:'+base_square_size+'%;'+
        'left:' + getLeft(zombies_list_x[i])+'%;'+
        'top:'+ getRight(zombies_list_y[i])+'%;\" ' +
        'class="base" style="z-index:2;" id=\"zombie'+i +'\"><div class="zombie"></div></div>');
  }
  for(i=0;i<walls_list_x.length;i++) {
    $('.board').append('<div style=\"' +
        'padding-top:'+ base_square_size+'%;'+
        'width:'+base_square_size+'%;'+
        'left:' + getLeft(walls_list_x[i])+'%;'+
        'top:'+ getRight(walls_list_y[i])+'%;\" ' +
        'class="base" style="z-index:3;" id=\"wall'+i +'\"><div class="wall"></div></div>');
  }
  $('.board').append('<div class="base" id="girl" style=" background:sepia;' +
            'padding-top:'+ base_square_size+'%;'+
            'width:'+base_square_size+'%;'+
            'left:' + getLeft(playerx)+'%;'+
            'top:'+ getRight(playery)+'%;"> ' +
            '<div class="girl">'+
            '<div class="girlhair"></div>'+
            '<div class="girlhead">'+
                '<div class="girleyes"></div>'+
                '<div class="girleyes right"></div>'+
                '<div class="girlmouth"></div>'+
            '</div>'+
            '<div class="girlbody"> </div>'+
            '<div class="girlfoot"></div>'+
            '<div class="girlfoot right"></div>'+
            '<div class="girlhand"></div>'+
            '<div class="girlhand right"></div>'+
        '</div></div>'
    );
}


function getLeft(x) {
  return x*base_square_size;
}

function getRight(y) {
  return y*base_square_size *board_width/board_height;
}



/********************player movement, rendering, item eating,...***********************/
function movePlayer(x,y) {
  playerxx += x;
  playeryy += y;
  if(playerxx == 3) {
    playerxx = 0;
    playerx += 1;
  }
  if(playerxx == -1) {
    playerxx = 2;
    playerx -= 1;
  }
  if(playeryy == 3) {
    playeryy = 0;
    playery += 1;
  }
  if(playeryy == -1) {
    playeryy = 2;
    playery -= 1;
  }
}

function renderPlayer() {
  $('#girl').css('left',getLeft(playerx)+getLeft(1)*playerxx/3+'%');
  $('#girl').css('top',getRight(playery)+getRight(1)*playeryy/3+'%');
}

function validUp() {
  if((playery > 0 || (playery==0 && playeryy>0)) &&
      playerx%2 != 1 && playerxx ==0) {
    return true;
  }
  return false;
}
function validDown() {
  if(playery < board_height-1  && 
      playerx%2 != 1 && playerxx == 0) {
    return true;
  }
  return false;
}
function validLeft() {
  if((playerx > 0 || (playerx==0 && playerxx>0))  && 
      playery%2 != 1 && playeryy == 0) {
    return true;
  }
  return false;
}
function validRight() {
  if(playerx < board_width-1  && 
      playery%2 != 1 && playeryy == 0) {
    return true;
  }
  return false;
}

function validWalls() {
  if(pass_walls)
    return true;
  for(var i=0;i<walls_list_x.length;i++) {
    if((walls_list_x[i] == playerx && walls_list_y[i] == playery) ||
        (walls_list_x[i] == playerx+1 && playerxx>0 && walls_list_y[i] == playery) ||
        (walls_list_x[i] == playerx && walls_list_y[i] == playery+1 && playeryy>0))
      return false;
  }
  return true;
}

/************* movement of zombies ******************************************************/
function move_zombies() {
  for(var i=0;i<zombies_list_x.length;i++)
    move_zombie(i);
}
function move_zombie(index) {
  if(zombies_list_x[index] == -1)
    return;
  var prob = Math.random();
  if(prob<0.25) {
    if(valid_for_zombie(zombies_list_x[index]+1,zombies_list_y[index])) {
        move_and_render_zombie(1,0,index);
    }
  }
  else if(prob<0.5) {
    if(valid_for_zombie(zombies_list_x[index]-1,zombies_list_y[index])) {
        move_and_render_zombie(-1,0,index);
    }
  }
  else if(prob<0.75) {
    if(valid_for_zombie(zombies_list_x[index],zombies_list_y[index]+1)) {
        move_and_render_zombie(0,1,index);
    }
  }
  else {
    if(valid_for_zombie(zombies_list_x[index],zombies_list_y[index]-1)) {
        move_and_render_zombie(0,-1,index);
    }
  }
}

function valid_for_zombie(x,y) {
  if(x%2==1 && y%2==1)
    return false;
  if(x<0 || y<0 || x>=board_width || y>=board_height)
    return false;
  for(var i=0;i<walls_list_x.length;i++) {
    if(walls_list_y[i] == y && walls_list_x[i] == x)
      return false;
  }
  return true;
}

function move_and_render_zombie(x,y,index) {
  /*$('#zombie'+index).css('left', (getLeft(x+zombies_list_x[index]))+'%');
  $('#zombie'+index).css('top', (getRight(y+zombies_list_y[index]))+'%');*/
  $('#zombie'+index).animate({
    left: ''+getLeft(x+zombies_list_x[index])+'%',
    top: ''+getRight(y+zombies_list_y[index]) +'%' },
    50, function() {
    /* stuff to do after animation is complete */
  });
  zombies_list_x[index]+=x;
  zombies_list_y[index]+=y;
}
/*************this part is related to updating game stat in topbar***********************/
function time_string() {
  if(lang=='en'){
    return 'Time: ' + time + 's';
  }
  else {
    return 'زمان: '+time+' ثانیه';
  }
}
function zombie_string() {
  if(lang == "en") {
    return "Zombies: " + number_of_zombies;
  }
  else {
    return "تعداد زامبی ها: " + number_of_zombies;
  }
}
function time_update() {
  time++;
  $('.passedtime').text(time_string());
}
function zombie_update() {
   $('.numberofzombies').text(zombie_string());
}


/******************  for adding elements to startup form, event listeners ***************/
$(document).ready(function() {
  $('#additem_btn').on('click',function() {
    var txt1 = '<div class="itemadder" style="margin:10px;">itemx <input class="itemx" type="text" value="0"> itemy <input class="itemy" type="text" value="0"> <select class="itemtype"><option value="bomb">bomb++</option><option value="wallpass">Wall passer</option></select></div>';
    $('#startup_form #finalize_btn').before(txt1);
    number_of_items++;
  });
  $('.topbar').click(function() {
    if(lang == "en")
      lang = "fa";
    else
      lang = "en";
    time_update();
    zombie_update();
    $('.topbar').toggleClass('persian');
  });
  $('.game').hide();
  $('.topbar').hide();

  $(window).resize(function() {
    var current_height = $(window).height();
    var current_width = $(window).width();
    var ratio = board_height / board_width;
    if(( current_height / board_height) < (current_width / board_width)) {
         $('.game').css('max-width',''+ (current_height*0.8/ratio)+'px');
         base_square_size = 100.0 * ratio / board_height;
    }
    else {
        $('.game').css('width','90%');
        base_square_size = 100.0 / board_width;
    }
    console.log(base_square_size);
    $('.board').css('padding-top', ratio*100+'%');
  
  });

  $(document).keydown(function(event) {
    switch (event.which) {
      case up_key:
        $('.girl').addClass('topgoing');
        $('.girl').removeClass('leftgoing');
        $('.girl').removeClass('rightgoing');
        if(!validUp())
          return;
        movePlayer(0 , -1);
        if(!validWalls())
          movePlayer(0,1);
        renderPlayer();
        break;
      case down_key:
        $('.girl').removeClass('rightgoing');
        $('.girl').removeClass('leftgoing');
        $('.girl').removeClass('topgoing');
        if(!validDown())
          return;
        movePlayer(0 , 1);
        if(!validWalls())
          movePlayer(0,-1);
        renderPlayer();
        break;
      case left_key:
        $('.girl').addClass('leftgoing');
        $('.girl').removeClass('rightgoing');
        $('.girl').removeClass('topgoing');
        if(!validLeft())
          return;
        movePlayer(-1, 0);
        if(!validWalls())
          movePlayer(1,0);
        renderPlayer();
        break;
      case right_key:
        $('.girl').addClass('rightgoing');
        $('.girl').removeClass('leftgoing');
        $('.girl').removeClass('topgoing');
        if(!validRight())
          return;
        movePlayer(1 , 0);
        if(!validWalls())
          movePlayer(-1,0);
        renderPlayer();
        break;
      case bomb_key:
        break;
    }
  });
});


