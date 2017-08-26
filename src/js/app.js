$(() => {
  const $ballon1 = $('.ballon1');
  const $ballon2 = $('.ballonG2');
  const $ballon3 = $('.ballonG3');
  const $ballon4 = $('.ballonG4');
  const $ballon5 = $('.ballonG5');
  // const $grid = $('.grid');
  const $startBtn = $('.startBtn');
  const $popBallon = $('ballon');
  const ballonWins = [];
  // build click function to press button
  $startBtn.on('click',() =>{
    // if player clicks on the start btn, he or she will activiate ballons
    $ballon1.animate(({bottom: '+=585px'}),10000);
    $ballon2.animate(({bottom: '+=585px'}),50000);
    $ballon3.animate(({bottom: '+=585px'}),20000);
    $ballon4.animate(({bottom: '+=585px'}),1000);
    $ballon5.animate(({bottom: '+=585px'}),40000);
  });

  // create a click to pop the ballons

  $popBallon.on('click',(e) =>{
    // if any of the ballons in the ballonWins array are click they should return to the bottom of the page
    if ($ballon2 === e.target){
      return $ballon2.remove();
    }else{
      $startBtn;
    }

  });





  // $ballon2.on('click', () =>{
  //   // have a lose ballon, and make it disapper when clicked
  //   // this is when a player will lose
  //   $ballon2.hide(1000);
  // });







}); // end of DOMContentLoaded
