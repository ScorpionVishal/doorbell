

document.getElementById("press-img").addEventListener("click",function(){
    var randomNumber= Math.floor(Math.random()*2)+1;
    var audio=new Audio("audio1.mp3");
    audio.play();

    var randomImage="image-"+randomNumber+".jpg";
    
    var imageSource="images/"+randomImage;
    
    var image1 = document.querySelectorAll("img")[0];
    
    image1.setAttribute("src", imageSource);

    if(randomNumber%2===0){
        document.getElementById("text").innerHTML="Please come in and have a cup of tea!";
    }else{
        document.getElementById("text").innerHTML="Sorry for the inconvieneance";
    }
   


});


