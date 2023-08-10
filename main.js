leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
  
   canvas = createCanvas(550,450);
   canvas.position(560,120);
  
   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded(){
    console.log('PoseNet Is Initialized!');
  }
  
  
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);

      leftWristX = results[0].pose.leftWrist.x;
      rightWristX = results[0].pose.rightWrist.x;
      difference = floor(leftWristX - rightWristX);
      textSize(difference);
      console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
  }
  function draw(){
    background('#969A97');
    textSize(15);
    fill('#F90093');
    text('Deshna', 30,200);
  }


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  function draw(){
    background('#969A97');
  
  }