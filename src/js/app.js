$(() => {
  const $ballon1 = $('.ballon1');
  const $ballon2 = $('.ballon2');
  const $ballon3 = $('.ballon3');
  const $ballon4 = $('.ballon4');
  const $ballon5 = $('.ballon5');

  // build click function to press button

  const $grid = $('.grid');
  const $startBtn = $('.startBtn');

  $startBtn.on('click',() =>{
    // if player clicks on the start btn, he or she will activiate ballons
    // make ballon randamize color and postion
    $ballon1.animate(({bottom: '+=400px'}),10000);
    $ballon2.animate(({bottom: '+=400px'}),50000);
    $ballon3.animate(({bottom: '+=400px'}),20000);
    $ballon4.animate(({bottom: '+=400px'}),10000);
    $ballon5.animate(({bottom: '+=400px'}),40000);
    // this will make player win

  });

  // $ballon2.on('click', () =>{
  //   // have a lose ballon, and make it disapper when clicked
  //   // this is when a player will lose
  //   $ballon2.hide(1000);
  // });







}); // end of DOMContentLoaded
