"use strict";

$(document).ready(function() {
$('body').append('<div>1</div>');
var counter = 1;
var interval;

       //These two functions start the animation chain
       $('div').click(function() {
           $(this).css('position', 'absolute');
           move();
            interval = setInterval(function() {
                if (counter < 4) {
                    ++counter;
                    $('div').html(counter);
                    move();
                } else {
                    ++counter;
                    $('div').html(counter + '<br><br>');
                    clearInterval(interval);
                    createSentence()
                }
                console.log(counter)
        }, 2000)

});
function move() {
    $('div')
        .animate({ left: "+=200" }, 500)
        .animate({ top: "+=200" }, 500)
        .animate({ left: "-=200" }, 500)
        .animate({ top: "-=200" }, 500);
}

// This fires after the chain is complete, entering the sentence one letter at a time
var test = "Intervals can get frustrating. But also do some pretty neat stuff like this. ";
var test2 = 0;
var intervalID;
function fade() {
    $('body').children().append(test[test2]).fadeIn(150);
    test2++;
    console.log(test2);
    if (test2 === test.length) {
        clearInterval(intervalID);
        setTimeout(circles, 2000)
    }
}

function createSentence() {
intervalID = setInterval(fade, 150);
}

//And this fires after the sentence is complete for 2 seconds

    function circles() {
        $('body').html("");
        $('body').html('<div class="circle-container">' + '<div class="circle" id="circleOne"></div>' + '<div class="circle" id="circleTwo"></div>' + '<div class="circle" id="circleThree"></div>' + '<div>Click A Light</div><br>' + '<div><img id="carGif1" class="carGif" src="cargif.gif" alt="carGif"></div></div>')


        $('#circleOne').click(function () {
            $('#carGif1')
                .animate({left: "+=600"}, 700)
                .queue(function () {
                    $(this).toggleClass("flip").dequeue();
                })
                .animate({left: "-=600"}, 700)
                .queue(function () {
                    $(this).toggleClass("flip").dequeue();
                })
        });

        $('#circleTwo').click(function () {
            $('#carGif1')
                .animate({left: "+=600"}, 700)
                .queue(function () {
                    $(this).toggleClass("flip").dequeue();
                })
                .animate({left: "-=600"}, 2000)
                .queue(function () {
                    $(this).toggleClass("flip").dequeue();
                })
        });

        $('#circleThree').click(function () {
            $('#carGif1')
                .animate({left: '+=600'}, 700)
                .queue(function () {
                    $(this).toggleClass("flip").dequeue();
                });

            setTimeout(createCarTwo, 700);

            $('#carGif1').animate({left: '-=285'}, 500);

            setTimeout(reset, 1200)
        });

        function reset() {
            $('div').last().append('<img id="explosion" src="explosion.gif" alt="explosionGif">');
            setTimeout(function () {
            $('div').last().html('<div><img id="carGif1" class = "carGif" src="cargif.gif" alt="carGif"></div>')
            }, 2000)

        }

        function createCarTwo() {
            $('div').last().append('<img id="carGif2" class = "carGif" src="cargif.gif" alt="carGif">')
            $('#carGif2')
                .animate({left: '+=285'}, 500)
        }
    }




});



