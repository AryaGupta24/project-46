var bg1
var ease, med, dif, levels;
var nemo, nemoimg;
var cup, cupimg;
var screen, screenimg;
var boundary1, boundary2, boundary3, boundary4;
var cb1, cb2, cb3, cb4, cb5;
var back;
var ease1,ease2,ease3,ease4,ease5;
var flag = "start"
var txt = 0;
function preload(){
  //load images
  bg1 = loadImage("back.png");
  level = loadAnimation("easy.png");
  level1 = loadAnimation("medium.png");
  level2 = loadAnimation("difficult.png");

  //easy levels(_5_)
  ease1 = loadImage("1.png");
  ease2 = loadImage("2.png");
  ease3 = loadImage("3.png");
  ease4 = loadImage("4.png");
  ease5 = loadImage("5.png");
  //for every level of easy
  screenimg = loadImage("step14.jpg");
  backimg = loadImage("nextbt.png")
  //e1 cup, player
  cupimg = loadImage("cup.png");
  nemoimg = loadImage("nemo.png");
  //e2 cup, player
  loraximg = loadImage("e2player.png");
  e2cupimg = loadImage("e2cup.png");

  //m1 cup,player
  sisuimg = loadImage("sisu.png");
  m1cupimg = loadImage("raya.png");
  //m2 cup,player
  babyimg = loadImage("bbaby.png");
  m2cupimg =loadImage("tim.png");

  //medium levels(_5_)
  med1 = loadImage("1.png");
  med2 = loadImage("2.png");
  med3 = loadImage("3.png");
  med4 = loadImage("4.png");
  med5 = loadImage("5.png");

  //difficult levels(_5_)
  dif1 = loadImage("1.png");
  dif2 = loadImage("2.png");
  dif3 = loadImage("3.png");
  dif4 = loadImage("4.png");
  dif5 = loadImage("5.png");
}

function setup(){
  createCanvas(windowWidth-10, windowHeight-10);
  //Difficulties
  ease = createSprite(300, 500, 50 ,50);
  ease.addAnimation("easy.png", level)
  med = createSprite(650, 500, 50 ,50);
  med.addAnimation("medium.png", level1)
  dif = createSprite(1000, 500, 50 ,50);
  dif.addAnimation("difficult.png", level2)

  //levels for easy
  e1 = createSprite(windowWidth/4,200, 50, 50);
  e1.addImage(ease1);
  e1.visible=false;
  e2 = createSprite(windowWidth/4+200,200, 50, 50);
  e2.addImage(ease2);
  e2.visible=false;
  e3 = createSprite(windowWidth/4+400,200, 50, 50);
  e3.addImage(ease3);
  e3.visible=false;
  e4 = createSprite(windowWidth/4+600,200, 50, 50);
  e4.addImage(ease4)
  e4.visible=false;
  e5 = createSprite(windowWidth/4+800,200, 50, 50);
  e5.addImage(ease5);
  e5.visible=false;

  //levels for Medium
  m1 = createSprite(windowWidth/4,200, 50, 50);
  m1.addImage(med1);
  m1.visible=false;
  m2 = createSprite(windowWidth/4+200,200, 50, 50);
  m2.addImage(med2);
  m2.visible=false;
  m3 = createSprite(windowWidth/4+400,200, 50, 50);
  m3.addImage(med3);
  m3.visible=false;
  m4 = createSprite(windowWidth/4+600,200, 50, 50);
  m4.addImage(med4)
  m4.visible=false;
  m5 = createSprite(windowWidth/4+800,200, 50, 50);
  m5.addImage(med5);
  m5.visible=false;

  //levels for difficult
  d1 = createSprite(windowWidth/4,200, 50, 50);
  d1.addImage(dif1);
  d1.visible=false;
  d2 = createSprite(windowWidth/4+200,200, 50, 50);
  d2.addImage(dif2);
  d2.visible=false;
  d3 = createSprite(windowWidth/4+400,200, 50, 50);
  d3.addImage(dif3);
  d3.visible=false;
  d4 = createSprite(windowWidth/4+600,200, 50, 50);
  d4.addImage(dif4)
  d4.visible=false;
  d5 = createSprite(windowWidth/4+800,200, 50, 50);
  d5.addImage(dif5);
  d5.visible=false;
}

function draw(){
  background(bg1);

  ////////////////////////First screen//////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  if(flag === "start"){
    fill("black")
    textSize(60)
    stroke(0 , 255, 255)
    strokeWeight(10)
    text("WELCOME! To The Maze Runner Game", windowWidth/2-550, 200 )
    textSize(40)
    fill("white")
    stroke(0)
    strokeWeight(10)
    text("Choose Difficulty", windowWidth/2-140, windowHeight/2 ) 
    console.log("flag===start");
  }

  ////////////////////////////////////////////////////////////////////////////
  ////////////////easy level///////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////
  if(mousePressedOver(ease) && flag==="start"){
    med.visible = false;
    dif.visible = false;
    ease.visible = false;
    e1.visible=true;
    e2.visible=true;
    e3.visible=true;
    e4.visible=true;
    e5.visible=true;
    flag="easy";
    console.log("flag===easy");
  }

  //////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(e1) && flag ==="easy"){
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e1pressed")
    flag="e1pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="e1pressed"){
    //create sprites only one time when flag is e1pressed and after creating sprites change flag immediately
    //to maze1created so that it exits this block
    console.log("flag===e1pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    nemo = createSprite(450 ,580, 20, 20);//main object
    nemo.addImage(nemoimg);
    nemo.scale = 0.033; 

    cup = createSprite(975,440,50,60);
    cup.addImage(cupimg);
    cup.scale = 0.298;

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    cb1 = createSprite(930, 310, 10, 150)
    cb1.shapeColor= "black"
    
    cb2 = createSprite(750, 570, 10, 120)
    cb2.shapeColor= "black"
      
    cb3 = createSprite(730, 510, 320, 10)
    cb3.shapeColor= "black"
    
    cb4 = createSprite(450, 310, 10, 180)
    cb4.shapeColor= "black"
    
    cb5 = createSprite(610, 260, 320, 10)
    cb5.shapeColor= "black"
      
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze1created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  if(flag==="maze1created"){

    if (keyDown("right") && flag === "maze1created") {
      nemo.x = nemo.x + 4;
      console.log("right")
    }

    if (keyDown("left") && flag === "maze1created") {
      nemo.x = nemo.x -4 ;
      console.log("left")
    }

    if (keyDown("up") && flag === "maze1created") {
      nemo.y = nemo.y - 4;
      console.log("up")
    }

    if (keyDown("down") && flag === "maze1created") {
      nemo.y = nemo.y + 4;
      console.log("down")
    }

    if ((nemo.isTouching(cb1)||nemo.isTouching(cb2)||nemo.isTouching(cb3)||nemo.isTouching(cb4)||nemo.isTouching(cb5)||nemo.isTouching(boundary1)||nemo.isTouching(boundary2)||nemo.isTouching(boundary3)||nemo.isTouching(boundary4)) && flag==="maze1created" ) {
      nemo.velocityX=0;
      nemo.velocityY=0;
      nemo.x = 450;
      nemo.y = 580;
      console.log("Istouching")
    } 
  
    if (nemo.isTouching(cup) && flag === "maze1created") {
      nemo.velocityX=0;
      nemo.velocityY=0;
      nemo.scale = 0.020;
      nemo.x =975;
      nemo.y = 500;
      flag = "win1"
      console.log("istouchingcup")
    } 
  }
  
  ///////////////////////////////////////////////////////////////////////////////////////
  //level 2
  //////////////////////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(e2) && flag ==="easy"){   
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e2pressed")
    flag="e2pressed";
  }

  if(flag === "e2pressed"){
    console.log("flag===e2pressed");
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35;

    lorax = createSprite(980 ,180, 20, 20);//main object
    lorax.addImage(loraximg);
    lorax.scale = 0.15;
      
    cup2 = createSprite(975,540,50,60);
    cup2.addImage(e2cupimg);
    cup2.scale = 0.49;

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black"
      
    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
        
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    cb1 = createSprite(930, 200, 10, 150)
    cb1.shapeColor= "black"
    
    cb2 = createSprite(750, 590, 10, 60)
    cb2.shapeColor= "black"
      
    cb3 = createSprite(790, 440, 480, 10)
    cb3.shapeColor= "black"
    
    cb4 = createSprite(540, 190, 10, 130)
    cb4.shapeColor= "black"
    
    cb5 = createSprite(775, 280, 320, 10)
    cb5.shapeColor= "black"

    cb6 = createSprite(580, 470, 10, 60)
    cb6.shapeColor= "black"

    back = createSprite(701, 410,100 ,50)
    back.visible = false;
    back.addImage(backimg);
    back.scale = 0.2;

    flag="maze2created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  if(flag==="maze2created"){

    if (keyDown("right") && flag === "maze2created") {
      lorax.x = lorax.x + 4;
      console.log("right")
    }

    if (keyDown("left") && flag === "maze2created") {
      lorax.x = lorax.x -4 ;
      console.log("left")
    }

    if (keyDown("up") && flag === "maze2created") {
      lorax.y = lorax.y - 4;
      console.log("up")
    }

    if (keyDown("down") && flag === "maze2created") {
      lorax.y = lorax.y + 4;
      console.log("down")
    }

    if ((lorax.isTouching(cb1)||lorax.isTouching(cb2)||lorax.isTouching(cb3)||lorax.isTouching(cb4)||lorax.isTouching(cb5)||lorax.isTouching(cb6)||lorax.isTouching(boundary1)||lorax.isTouching(boundary2)||lorax.isTouching(boundary3)||lorax.isTouching(boundary4)) && flag==="maze2created" ) {
      lorax.velocityX=0;
      lorax.velocityY=0;
      lorax.x = 980;
      lorax.y = 180;
      console.log("loraxistouching")
    }     
  
    if (lorax.isTouching(cup2) && flag === "maze2created") {
      lorax.velocityX=0;
      lorax.velocityY=0;
      lorax.scale = 0.15;
      lorax.x =875;
      lorax.y = 500;
      flag = "win2"
      console.log("istouchingcup2")
    } 
  }


    //////////////////////////////////////////////////////////
    //level 3///////////////////////////////////////////////////
  if(mousePressedOver(e3) && flag ==="easy"){  
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e3pressed")
    flag="e3pressed";
  }

  if(flag==="e3pressed"){
    console.log("flag===e3pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze3created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  ///////////////////////////////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(e4) && flag ==="easy"){  
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e4pressed")
    flag="e4pressed";
  }

  if(flag==="e4pressed"){
    console.log("flag===e4pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze4created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  /////////////////////////////////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(e5) && flag ==="easy"){  
    e1.visible=false;
    e2.visible=false;
    e3.visible=false;
    e4.visible=false;
    e5.visible=false;
    console.log("e5pressed")
    flag="e5pressed";
  }

  if(flag==="e5pressed"){
    console.log("flag===e5pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze5created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  ///////////////////////////////////////////////////////////
  //Medium///////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  if(mousePressedOver(med) && flag==="start"){
    med.visible = false;
    dif.visible = false;
    ease.visible = false;
    m1.visible=true;
    m2.visible=true;
    m3.visible=true;
    m4.visible=true;
    m5.visible=true;
    flag="medium";
    console.log("flag===medium");
  }

  //////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(m1) && flag ==="medium"){
    m1.visible=false;
    m2.visible=false;
    m3.visible=false;
    m4.visible=false;
    m5.visible=false;
    console.log("m1pressed")
    flag="m1pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="m1pressed"){
    console.log("flag===m1pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35;
    
    sisu = createSprite(850 ,180, 20, 20);//main object
    sisu.addImage(sisuimg);
    sisu.scale = 0.2; 

    cup = createSprite(990 ,480, 20, 20);//main object
    cup.addImage(m1cupimg);
    cup.scale = 0.066; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    cb1 = createSprite(930, 180, 10, 100)
    cb1.shapeColor= "black"

    cb2 = createSprite(780, 180, 10, 100)
    cb2.shapeColor= "black"

    cb3 = createSprite(550, 180, 10, 100)
    cb3.shapeColor= "black"

    cb4 = createSprite(800, 330, 300, 10)
    cb4.shapeColor= "black"

    cb5 = createSprite(945, 300, 10, 60)
    cb5.shapeColor= "black"
    
    cb6 = createSprite(430, 305, 10, 60)
    cb6.shapeColor= "black"
    
    cb7 = createSprite(400, 330, 60, 10)
    cb7.shapeColor= "black"

    cb8 = createSprite(540, 380, 10, 100)
    cb8.shapeColor= "black"

    cb9 = createSprite(565, 435, 60, 10)
    cb9.shapeColor= "black"

    cb10= createSprite(450, 580, 10, 100)
    cb10.shapeColor= "black"

    cb11 = createSprite(565, 335, 60, 10)
    cb11.shapeColor= "black"

    cb12 = createSprite(565, 535, 60, 10)
    cb12.shapeColor= "black"

    cb13 = createSprite(680, 540, 10, 170)
    cb13.shapeColor= "black"

    cb14 = createSprite(780, 410, 10, 170)
    cb14.shapeColor= "black"

    cb15 = createSprite(930, 610, 10, 170)
    cb15.shapeColor= "black"

    cb16 = createSprite(805, 490, 60, 10)
    cb16.shapeColor= "black"

    cb17 = createSprite(850, 400, 150, 10)
    cb17.shapeColor= "black"


    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze6created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  if(flag==="maze6created"){

    if (keyDown("right") && flag === "maze6created") {
      sisu.x = sisu.x + 4;
      console.log("right")
    }

    if (keyDown("left") && flag === "maze6created") {
      sisu.x = sisu.x -4 ;
      console.log("left")
    }

    if (keyDown("up") && flag === "maze6created") {
      sisu.y = sisu.y - 4;
      console.log("up")
    }

    if (keyDown("down") && flag === "maze6created") {
      sisu.y = sisu.y + 4;
      console.log("down")
    }

    if ((sisu.isTouching(cb1)||sisu.isTouching(cb2)||sisu.isTouching(cb3)||sisu.isTouching(cb4)||sisu.isTouching(cb5)||sisu.isTouching(cb6)||sisu.isTouching(cb7)||sisu.isTouching(cb8)||sisu.isTouching(cb9)||sisu.isTouching(cb10)||sisu.isTouching(cb11)||sisu.isTouching(cb12)||sisu.isTouching(cb13)||sisu.isTouching(cb14)||sisu.isTouching(cb15)||sisu.isTouching(cb16)||sisu.isTouching(cb17)||sisu.isTouching(boundary1)||sisu.isTouching(boundary2)||sisu.isTouching(boundary3)||sisu.isTouching(boundary4)) && flag==="maze6created" ) {
      sisu.velocityX=0;
      sisu.velocityY=0;
      sisu.x = 850;
      sisu.y = 180;
      console.log("sisuistouching")
    }     
  
    if (sisu.isTouching(cup) && flag === "maze6created") {
      sisu.velocityX=0;
      sisu.velocityY=0;
      sisu.scale = 0.3;
      sisu.x =895;
      sisu.y = 450;
      flag = "win6"
      console.log("istouchingcup")
    } 
  }

  ///////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(m2) && flag ==="medium"){
    m1.visible=false;
    m2.visible=false;
    m3.visible=false;
    m4.visible=false;
    m5.visible=false;
    console.log("m2pressed")
    flag="m2pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="m2pressed"){
    console.log("flag===m2pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    bossb = createSprite(750 ,480, 20, 20);//main object
    bossb.addImage(babyimg);
    bossb.scale = 0.2; 

    cup2 = createSprite(820 ,180, 20, 20);//main object
    cup2.addImage(m2cupimg);
    cup2.scale = 0.045; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    cb1 = createSprite(865, 180, 10, 100)
    cb1.shapeColor= "black"

    cb2 = createSprite(665, 150, 10, 60)
    cb2.shapeColor= "black"

    cb3 = createSprite(475, 272, 10, 60)
    cb3.shapeColor= "black"

    cb4 = createSprite(620, 300, 300, 10)
    cb4.shapeColor= "black"

    cb5 = createSprite(865, 345, 10, 80)
    cb5.shapeColor= "black"

    cb6 = createSprite(980, 300, 100, 10)
    cb6.shapeColor= "black"

    cb7 = createSprite(645, 340, 10, 80)
    cb7.shapeColor= "black"

    cb8 = createSprite(750, 380, 220, 10)
    cb8.shapeColor= "black"

    cb9 = createSprite(450, 430, 160, 10)
    cb9.shapeColor= "black"

    cb10 = createSprite(475, 476, 10, 100)
    cb10.shapeColor= "black"

    cb11 = createSprite(565, 550, 10, 140)
    cb11.shapeColor= "black"

    cb12 = createSprite(835, 415, 10, 80)
    cb12.shapeColor= "black"

    cb14 = createSprite(665, 450, 10, 130)
    cb14.shapeColor= "black"

    cb13 = createSprite(933, 450, 195, 10)
    cb13.shapeColor= "black"

    cb15= createSprite(903, 540, 195, 10)
    cb15.shapeColor= "black"
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze7created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }
 
  if(flag==="maze7created"){

    if (keyDown("right") && flag === "maze7created") {
      cup2.x = cup2.x + 4;
      console.log("right")
    }

    if (keyDown("left") && flag === "maze7created") {
      cup2.x = cup2.x -4 ;
      console.log("left")
    }

    if (keyDown("up") && flag === "maze7created") {
      cup2.y = cup2.y - 4;
      console.log("up")
    }

    if (keyDown("down") && flag === "maze7created") {
      cup2.y = cup2.y + 4;
      console.log("down")
    }

    if ((cup2.isTouching(cb1)||cup2.isTouching(cb2)||cup2.isTouching(cb3)||cup2.isTouching(cb4)||cup2.isTouching(cb5)||cup2.isTouching(cb6)||cup2.isTouching(cb7)||cup2.isTouching(cb8)||cup2.isTouching(cb9)||cup2.isTouching(cb10)||cup2.isTouching(cb11)||cup2.isTouching(cb12)||cup2.isTouching(cb13)||cup2.isTouching(cb14)||cup2.isTouching(cb15)||cup2.isTouching(boundary1)||cup2.isTouching(boundary2)||cup2.isTouching(boundary3)||cup2.isTouching(boundary4)) && flag==="maze7created" ) {
      cup2.velocityX=0;
      cup2.velocityY=0;
      cup2.x = 820;
      cup2.y = 180;
      console.log("bossistouching")
    }     
  
    if (cup2.isTouching(bossb) && flag === "maze7created") {
      cup2.velocityX=0;
      cup2.velocityY=0;
      cup2.x =780 
      cup2.y = 480;
      flag = "win7"
      console.log("istouchingboss")
    } 
  }
  
  //////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(m3) && flag ==="medium"){
    m1.visible=false;
    m2.visible=false;
    m3.visible=false;
    m4.visible=false;
    m5.visible=false;
    console.log("m3pressed")
    flag="m3pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="m3pressed"){
    console.log("flag===m3pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze8created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  /////////////////////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(m4) && flag ==="medium"){
    m1.visible=false;
    m2.visible=false;
    m3.visible=false;
    m4.visible=false;
    m5.visible=false;
    console.log("m4pressed")
    flag="m4pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="m4pressed"){
    console.log("flag===m4pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze9created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  ////////////////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(m5) && flag ==="medium"){
    m1.visible=false;
    m2.visible=false;
    m3.visible=false;
    m4.visible=false;
    m5.visible=false;
    console.log("m5pressed")
    flag="m5pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="m5pressed"){
    console.log("flag===m5pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze10created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  ////////////////////////////////////////
  ///Difficult////////////////////////////
  ////////////////////////////////////////
  if(mousePressedOver(dif) && flag==="start"){
    med.visible = false;
    dif.visible = false;
    ease.visible = false;
    d1.visible=true;
    d2.visible=true;
    d3.visible=true;
    d4.visible=true;
    d5.visible=true;
    flag="difficult";
    console.log("flag===difficult");
  }

  //////////////////////////////////////////////////////////////////////
  if(mousePressedOver(d1) && flag ==="difficult"){
    d1.visible=false;
    d2.visible=false;
    d3.visible=false;
    d4.visible=false;
    d5.visible=false;
    console.log("d1pressed")
    flag="d1pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="d1pressed"){
    console.log("flag===d1pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;
    
    flag="maze11created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  //////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(d2) && flag ==="difficult"){
    d1.visible=false;
    d2.visible=false;
    d3.visible=false;
    d4.visible=false;
    d5.visible=false;
    console.log("d2pressed")
    flag="d2pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="d2pressed"){
    console.log("flag===d2pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze12created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  /////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(d3) && flag ==="difficult"){
    d1.visible=false;
    d2.visible=false;
    d3.visible=false;
    d4.visible=false;
    d5.visible=false;
    console.log("d3pressed")
    flag="d3pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="d3pressed"){
    console.log("flag===d3pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;
    
    flag="maze13created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  ////////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(d4) && flag ==="difficult"){
    d1.visible=false;
    d2.visible=false;
    d3.visible=false;
    d4.visible=false;
    d5.visible=false;
    console.log("d4pressed")
    flag="d4pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="d4pressed"){
    console.log("flag===d4pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2; 

    flag="maze14created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }

  ///////////////////////////////////////////////////////////////////////////
  if(mousePressedOver(d5) && flag ==="difficult"){
    d1.visible=false;
    d2.visible=false;
    d3.visible=false;
    d4.visible=false;
    d5.visible=false;
    console.log("d5pressed")
    flag="d5pressed";
  }

  /////////////////////////////////////////////////////////////////////////////
  if(flag==="d5pressed"){
    console.log("flag===d5pressed")
    screen = createSprite(701, 380, 50, 50);
    screen.addImage(screenimg);
    screen.scale = 0.35; 

    boundary1 = createSprite(701, 125, 674, 10);
    boundary1.shapeColor = "black" 

    boundary2 = createSprite(369, 380, 10, 505);
    boundary2.shapeColor = "black";
      
    boundary3 = createSprite(701, 628, 674, 10);
    boundary3.shapeColor = "black"
      
    boundary4 = createSprite(1033, 380, 10, 505);
    boundary4.shapeColor = "black"
    
    back = createSprite(701, 410,100 ,50)
    back.addImage(backimg);
    back.visible = false;
    back.scale = 0.2;

    flag="maze15created";//exit this block immediately after creating sprites so that it dont get updated everytime   
  }
    drawSprites();

  if(flag === "win1"){

    textSize(35);
    fill("green");
    textFont(" italic small-caps bold 12px/30px Georgia, serif");
    text("Congratulations!!!!!!!!!",  500, 330);
    text("You cleared this level!!",  500, 380);
    back.visible = true;
    if (mousePressedOver(back) && flag === "win1"){       
        
      back.destroy();

      screen.destroy();   
      nemo.destroy();    
      cup.destroy();    
      boundary1.destroy()   
      boundary2.destroy();   
      boundary3.destroy()    
      boundary4.destroy();   
      cb1.destroy();
      cb2.destroy();    
      cb3.destroy();    
      cb4.destroy();    
      cb5.destroy();
      e1.visible=true;
      e2.visible=true;
      e3.visible=true;
      e4.visible=true;
      e5.visible=true;       
    
      flag = "easy"
    
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
  if(flag === "win2"){

    textSize(35);
    fill("green");
    textFont(" italic small-caps bold 12px/30px Georgia, serif");
    text("Congratulations!!!!!!!!!",  500, 330);
    text("You cleared this level!!",  500, 380);
    back.visible = true;
    if (mousePressedOver(back) && flag === "win2"){       
       
      back.destroy();
      screen.destroy();   
      lorax.destroy();    
      cup2.destroy();    
      boundary1.destroy()   
      boundary2.destroy();   
      boundary3.destroy()    
      boundary4.destroy();   
      cb1.destroy();
      cb2.destroy();    
      cb3.destroy();    
      cb4.destroy();    
      cb5.destroy();
      cb6.destroy();


      e1.visible=true;
      e2.visible=true;
      e3.visible=true;
      e4.visible=true;
      e5.visible=true;       
    
      flag = "easy"
    
    }
  }

  /////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////////////////////////////////
  if(flag === "win6"){

    textSize(35);
    fill("green");
    textFont(" italic small-caps bold 12px/30px Georgia, serif");
    text("Congratulations!!!!!!!!!",  500, 330);
    text("You cleared this level!!",  500, 380);
    back.visible = true;
    if (mousePressedOver(back) && flag === "win6"){       
        
      back.destroy();

      screen.destroy();   
      sisu.destroy();    
      cup.destroy();    
      boundary1.destroy()   
      boundary2.destroy();   
      boundary3.destroy()    
      boundary4.destroy();   
      cb1.destroy();
      cb2.destroy();    
      cb3.destroy();    
      cb4.destroy();    
      cb5.destroy();
      cb6.destroy();
      cb7.destroy();
      cb8.destroy();
      cb9.destroy();
      cb10.destroy();
      cb11.destroy();
      cb12.destroy();
      cb13.destroy();
      cb14.destroy();
      cb15.destroy();
      cb16.destroy();
      cb17.destroy();
     
      e1.visible=true;
      e2.visible=true;
      e3.visible=true;
      e4.visible=true;
      e5.visible=true;       
    
      flag = "medium"
    
    }
  }
  
  textSize(60)
  fill("white")
  stroke(0)
  strokeWeight(10)
  text("MAZE RUNNER", windowWidth/2-250, 100 )
   
}





/////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////ROUGH WORK///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////