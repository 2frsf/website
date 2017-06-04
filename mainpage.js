var btn;
var statement;
function setup() {
  btn = select('#drpdwn');
}

function hide() {
  console.log("Hide!");
  if(statement==0) statement = 1;
  else {
    statement = 0;
  }
  console.log(statement);
  if(statement==0){
    console.log("hide the things!");
  } else {
    console.log("show the things");
  }
}

function draw() {

}
