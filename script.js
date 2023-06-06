function setup() {
    createCanvas(windowWidth,windowHeight)
    
    create()
  }
  const rand = () => (random() - .5) * 2;
  
  const create = () => {
    var p = new PoissonDiskSampling({
      shape: [width, height],
      minDistance: random(13,20),
      maxDistance: random(45,55),
      tries: 10
    });
    var points = p.fill();
    
    stroke("hsl(0,90%,20%)");
    
    points.forEach((point,i) => {
    fill(`hsl(0,90%,${40 * (i/points.length)}%)`);
      push()
      
      translate(point)
      
      let rounds = floor(random()*3) + 3;
      
      for(var r = rounds; r > 0; r--) {
        const x = point[0] + rand();
        const y = point[1] + rand();
        ellipse(x,y,r*15,r*15)
      }
      
      pop()
    })
  }
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    create()
  }
  function mouseClicked () { create() }
  function touchEnded () { create() }