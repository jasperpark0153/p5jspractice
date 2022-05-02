
// Circle Objects
var circle_1;
var circle_2;
var mouseCircle;

var radiusLimit = 100;

const circles = [];



class Circle{
  constructor(radius, horizontal_speed, vertical_speed, color) {
    this.radius = radius;
    this.horizontal_speed = horizontal_speed;
    this.vertical_speed = vertical_speed;
    this.xaxis = random(0 + this.radius, windowWidth - this.radius);
    this.yaxis = random(0 + this.radius, windowHeight - this.radius);
    this.color = color
  }

  create(){
    strokeWeight(4);
    stroke(0, 0, 0);
    fill(this.color);
    ellipse(this.xaxis, this.yaxis, this.radius);
  }

  move(){
    this.xaxis = this.xaxis + this.horizontal_speed;
    this.yaxis = this.yaxis + this.vertical_speed;
  }

  bounceRandomly(){

    if (this.xaxis + this.radius / 2 > windowWidth || this.xaxis - this.radius / 2 < 0){
      this.horizontal_speed = this.horizontal_speed * -1;
    }

    if (this.yaxis + this.radius / 2 > windowHeight || this.yaxis - this.radius / 2 < 0){
      this.vertical_speed = this.vertical_speed * -1;
    }
  }

  increaseSize(){
    this.radius += 1;
  }

  disappear(){
    this.radius = 0;
  }
  
}


function setup() {
  
  createCanvas(windowWidth, windowHeight); 

}

function draw() {

  background(105,105,105);

  // creating new circles each time (each frame)
  circle_1 = new Circle(10, 6, 6, ('yellow'));
  circle_2 = new Circle(25, 6, 6, ('lime'));

  circles.push(circle_1);
  circles.splice(1);


  // debugging source
  console.log(circles.length);
  console.log(circles);
  console.log(circle_1.xaxis);

  
  text((frameCount / 60).toFixed(2) , width/2,height/2);

  // Make circle appear and dissapear every 2 second
  if (0 < frameCount % 240 && frameCount % 240 < 119){
    circles[0].create();
    circles[0].increaseSize();
  } else {
    circles.splice(0);
    circles.splice(0, 0, circle_1);
  }


  
  

  
  /* HOMEWORK */
  /* 1. Every two seconds you must create a circle in a random position. The radius, and color does not matter 
  2. Every circle's radii should increase.
  3. For each circle, when the radius reaches its maximum size (100), the circle must stop growing. */
  
  // if (circles[0].radius < radiusLimit){
    //   circles[0].increaseSize()
    // }
    
  // if (circles[1].radius < radiusLimit){
    //   circles[1].increaseSize()
    // }
      
  // if (circles[2].radius < radiusLimit){
    //   circles[2].increaseSize()
      // }
        
  // if (circles[3].radius < radiusLimit){
    //   circles[3].increaseSize()
      // }
          
  // if (circles[4].radius < radiusLimit){
    //   circles[4].increaseSize()
  // }
  
  
  
  // if (circle_1.radius < radiusLimit){
    //   circle_1.increaseSize();
    // }
    
    
  // for(let i = 0; i < circles.length; i++){
  //   circles[i].create();
  //   if (circles[i].radius < radiusLimit){
  //     circles[i].increaseSize();
  //   } else {
  //     circles.splice(i);
  //   }
  // }
    
    
    
    
    // if (dist(mouseX, mouseY, circle_1.xaxis, circle_1.yaxis) <= circle_1.radius){
      //   console.log("hehexd");
      // }
      
  
  // for(let i = 0; i < circles.length; i++){
    //   circles[i].create();
    //   if (circles[i].radius < radiusLimit){
      //     circles[i].increaseSize();
      //   } else {
        //     circles.splice(i);
        //   }
        // }
        
        
}
      
      