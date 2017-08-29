$(() => {
  const $ballons = $('.ballon');
  let greenCount = 0;
  const $startBtn = $('.startBtn');
  const $resetBtn = $('.resetBtn');
  const $result = $('.result');
  // const ballonWins = [$ballonG2, $ballonG3, $ballonG4, $ballonG5];
  // build click function to press button
  $startBtn.on('click',() =>{
    // if player clicks on the start btn, he or she will activiate ballons
    $ballons.each((i, ballon) => {
      $(ballon).animate(({top: '-20%'}), Math.floor(Math.random() * 6000) + 6000);
    });
  });
  // on click of the green ballon then $(e.target).css({top: '100%'});
  $ballons.on('click', (e) => {
    if($(e.target).hasClass('red')) {
      if(greenCount < 4) $result.text('You lose');
      else $result.text('You Win');
    }
    if($(e.target).hasClass('green')) greenCount++;
    $(e.target).stop();
    $(e.target).css({top: '100%'});
  });

  // if result is a win, give point and start game

    if($result === 'You Win'){
      
    }

  });



  // $green.on('click',() =>{
  //   if($green === true){
  //     return $ballon1.stop();
  //     $ballon1.css(({top: '100%'}),0);
  //   }
  // })
  // create a click to pop the ballons
  // if any of the ballons in the ballonWins array are click they should return to the bottom of the page





  // $ballon2.on('click', () =>{
  //   // have a lose ballon, and make it disapper when clicked
  //   // this is when a player will lose
  //   $ballon2.hide(1000);
  // });







}); // end of DOMContentLoaded
