  var gameState = "start";

  var bg,bgImg,bgSprite;
  var nextbutton,nextbuttonimg,nextbuttonsprite;
  var like,likeimg,likesprite,dislike,dislikeimg,dislikesprite,neutral,neutralimg,neutralsprite;
  var start,startgif,startsprite;
  var q1, q1Sprite;
  
  function preload(){
    bgImg=loadImage("assets/pic.jpg");
    nextbuttonimg=loadImage("assets/nextbutton.png");
    likeimg=loadImage("assets/like.png");
    dislikeimg=loadImage("assets/dislike.png");
    neutralimg=loadImage("assets/neutral.png");
    q1 = loadImage("assets/Question1.png");
  }
    
  function setup() {
    createCanvas(windowWidth, windowHeight);
  
    bgSprite=createSprite(windowWidth, windowHeight);
    bgSprite.addImage("abc",bgImg);
  
    nextbuttonsprite=createSprite(width/2,(height/2)+20,60,30);
    nextbuttonsprite.addImage("def",nextbuttonimg);
    nextbuttonsprite.scale=0.3;
    
    likesprite=createSprite(200,(height/2)+30,60,30);
    likesprite.addImage("der",likeimg);
    likesprite.scale=0.2;
  
    neutralsprite=createSprite(400,(height/2)+30,60,30);
    neutralsprite.addImage("ref",neutralimg);
    neutralsprite.scale=0.2;
  
    dislikesprite=createSprite(600,(height/2)+30,60,30);
    dislikesprite.addImage("reg",dislikeimg);
    dislikesprite.scale=0.2;
  
    q1Sprite = createSprite(450,(height/2)-100,100,30);
    q1Sprite.addImage("abc",q1);
    q1Sprite.scale=0.7;

  /*var button = createButton('Next');
    button.position(width/2,(height/2) + 20);*/

  }
  
  function draw(){
    
    background(bgImg);
  
    likesprite.visible=false;
    dislikesprite.visible=false;
    neutralsprite.visible=false;
    q1Sprite.visible = false;
  
    
    drawSprites();
  
        if(gameState==="start"){


          startSlide();

          if(mousePressedOver(nextbuttonsprite)){
            Slide1();
            gameState = play;
          }
  
        }
        
            if (gameState === "play"){
             

              likesprite.visible=true;
              dislikesprite.visible=true;
              neutralsprite.visible=true; 
              q1Sprite.visible = true;

          }
  
   
              else if (gameState === "end") {
                textSize(40);
                text("Thank You, please find your score in section below.",width/2,height/2);
              }
  
    }
  
    function startSlide(){
      
          fill("purple");
          stroke("yellow");
          strokeWeight(4);
          textSize(35);

          text("Hello Student, Welcome to Career Councellor",370,(height/2)-200);
          text("Let's explore your area of interests!",450,(height/2)-100);

          likesprite.visible=false;
          dislikesprite.visible=false;
          neutralsprite.visible=false;
  
          nextbuttonsprite.visible = true;
     }
  
     function Slide1(){
      

      /* textSize(35);
       fill("maroon");
       stroke("yellow");
       strokeWeight(4);
       text("Like to study the structure of the human body ?",width/2,(height/2)-30); */

       nextbuttonsprite.visible = true;
  
       likesprite.visible=true;
       dislikesprite.visible=true;
       neutralsprite.visible=true; 
       q1Sprite.visible = true;
     }
  
   /* function slide2(){
      nextbuttonsprite.visible = true;
       textSize(35);
       fill("maroon");
       stroke("yellow");
       strokeWeight(4);
       text("Enjoy working with numbers ?",width/2,(height/2)-30);
       likesprite.visible=true;
       dislikesprite.visible=true;
       neutralsprite.visible=true;
    } */
  

















