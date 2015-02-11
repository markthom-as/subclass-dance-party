$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $('body').on('mouseover', '.dancer', function(){
    $(this).animate({'opacity':'0.1'}, 1000);
    $(this).animate({'opacity':'1'}, 1000);
  });

  $('.bump-it').on('click', function(){
    var dancer1 = window.dancers[Math.floor(Math.random() * window.dancers.length - 1)];
    var dancer2 = window.dancers[Math.floor(Math.random() * Math.random() * window.dancers.length - 1)];

    console.log('dancer1', dancer1);
    console.log('random', Math.floor(Math.random() * window.dancers.length - 1));
    console.log('length', window.dancers.length);
    // while (dancer1 === dancer2) {
    //   dancer2 = window.dancers[Math.floor(Math.random * window.dancers.length)];
    // }

    dancer1.setPosition(500, 497);
    dancer2.setPosition(500, 503);

    dancer1.$node.animate({transform: "rotate(360deg)"}, 2000);
    dancer2.$node.animate({transform: "rotate(360deg)"}, 2000);

    dancer1.$node.animate({left: "100px"}, 2500);
    dancer2.$node.animate({left: "600px"}, 2500);

    var rand1 = Math.floor(Math.random()*1000);
    var rand2 = Math.floor(Math.random()*1000);
    dancer1.$node.animate({top: rand1 + "px"}, 2500);
    dancer2.$node.animate({top: rand2 + "px"}, 2500);




  });
});

