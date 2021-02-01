var cat1,mouse,backGround,cat2,cat3,cat4,mouse2,mouse3,mouse4;
var catImg1,mouseImg,backgroundImg,catImg2,catImg3,catImg4,mouseImg2,mouseImg3,mouseImg4;

function preload() {
cat1=loadAnimation("cat1.png");
mouse=loadAnimation("mouse4.png");
backGround=loadAnimation("garden.png");
cat2=loadAnimation("cat2.png");
cat3=loadAnimation("cat3.png");
cat4=loadAnimation("cat4.png");
mouse2=loadAnimation("mouse2.png");
mouse3=loadAnimation("mouse3.png");
mouse4=loadAnimation("mouse4.png");

}

function setup(){
    createCanvas(1000,800);

     cat1=createSprite(870,600);
     cat1.addAnimation=("cat",catImg1);
     cat1.scale=0.2;

    mouse=createSprite(200,600);
    mouse.addAnimation=("mouse",mouseImg);
    mouse.scale=0.15;


    


}

function draw() {
background(backGround);

if(cat1.x-mouse.x<(cat1.width-mouse.width)/2){
    cat1.velocityX=0;
    cat1.addAnimation("cat1",catImg3);
    cat1.x=300;
    cat1.scale=0.2;
    cat1.changeAnimation("catImg4");
    mouse.addAnimation("mouse",mouseImg3);
    mouse.scale=0.15;

}

 
 
 


 
    if(keyCode===LEFT_ARROW){
        cat1.velocityX=-5;
        cat1.addAnimation("catRunning",catImg2);
        cat1.changeAnimation("catRunning");

       mouse.addAnimation("mouse2",mouseImg2);
       mouse.frameDelay=25;
       mouse.changeAnimation("mouse2");
    }






drawSprites();
}



