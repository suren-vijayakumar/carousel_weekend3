//var gammaArray=[];
//var ajaxCall = function () {
//
//    $.ajax({
//        type: "GET",
//        url: "/data",
//        dataType: 'json',
//        success: function (data) {
//            for(var i= 1; i<=22; i++) {
//                gammaArray.push(data[i]);
//            }
//            //return gammaArray;
//            console.log(gammaArray);
//        }
//    });
//
//};



//var nextButton = function(gammaArray,i){
//
//    $("body").on('click', '.nextButton', function() {
//        console.log("nextButton clicked!");
//        i++;
//        if (i==21){
//            i=0;
//            console.log("i= " + i);
//            cohortAppend(gammaArray,i);
//
//        }
//        else {
//            i;
//            console.log("i= " + i);
//            cohortAppend(gammaArray,i);
//        }
//
//    });
//};
//
//var prevButton = function(gammaArray,i) {
//    $("body").on('click', '.prevButton', function() {
//        console.log("prevButton clicked!");
//        i= parseInt(i);
//        i--;
//        if (i<0){
//            i=21;
//            console.log("i= " + i);
//            cohortAppend(gammaArray,i);
//
//        }
//        else {
//            i;
//            cohortAppend(gammaArray,i);
//        }
//
//
//    });
//
//};
var cohortAppend = function(myArray, i) {
    var k = i+1; //cohort number starts at 0

    $(".cohortDiv").children().remove();
    $(".cohortDiv").append("<div class='indexNo'></div>");
    $(".indexNo").append("<p>Let's hear more about Gamma cohort number " + k + "</p>");
    $(".cohortDiv").append("<div class='name'></div>");
    $(".name").append("<p> " + myArray[i].name + "</p>");
    $(".cohortDiv").append("<div class='desc'></div>");
    $(".desc").append("<p> " + myArray[i].name + " says, " + myArray[i].desc + "</p>");
    $(".cohortDiv").append("<div class='thanks'></div>");
    $(".thanks").append("<p>Other's say, " + myArray[i].thanks + "</p>");
    $('.cohortDiv').append("<button class='prevButton btn btn-warning btn-lg'>Prev Person</button>");
    $('.cohortDiv').append("<button class='nextButton btn btn-success btn-lg '>Next Person</button>");
};


$(document).ready(function(){
    var gammaArray=[];
    var i = parseInt(-1);
        $.ajax({
            type: "GET",
            url: "/data",
            dataType: 'json',
            success: function (data) {
                for(var i= 1; i<=22; i++) {
                    gammaArray.push(data[i]);
                }
                console.log(gammaArray);
            }

    });
        $(".cohortDiv").append("<div class='portrait'></div>");
        $('.portrait').append("<p><img src=/views/Gamma.jpg alt'Gamma Cohort'/></p>");
        $('.cohortDiv').prepend("<button class='nextButton btn btn-success btn-block'>Click this button to find out more about us!</button>");
     //   $('.cohortDiv').prepend("<button class='prevButton btn btn-primary'>Prev Button</button>");

        //nextButton(gammaArray,i);
        $("body").on('click', '.nextButton', function() {
            console.log("nextButton clicked!");

            if (i==21){
                i=0;
                console.log("i= " + i);
                cohortAppend(gammaArray,i);

            }
            else {
                i++;
                console.log("i= " + i);

                cohortAppend(gammaArray,i);
            }

        });

    $("body").on('click', '.prevButton', function() {
        console.log("prevButton clicked!");
          //i= parseInt(i);
        if (i<=0){
            i=21;
            console.log("i= " + i);
            cohortAppend(gammaArray,i);
        }
        else {
            i--;
            console.log("i= " + i);

            cohortAppend(gammaArray,i);
        }


    });


});