function setup() {
  createCanvas(400, 400);

  for(let i = 0; i < width ; i = i + 20){
    line(i, 0, i, height);
  }
  for(let i = 0; i < height ; i = i + 20){
    line(0, i, width, i);
  }
}
