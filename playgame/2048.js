console.log("i am working");
//
blocks= [];
decider = [];
ndecider = [];
//
window.addEventListener("load",function(event){
  console.log("I am loaded");
  maparray();
  startup(8);
  window.onkeyup = function(event){
    console.log(event.keyCode);
    if(event.keyCode == "38")
      slide(-1,0);
    else if(event.keyCode == "39")
      slide(0,1);
    else if(event.keyCode == "40")
      slide(1,0);
    else if(event.keyCode == "37")
      slide(0,-1);
  };
});

function maparray(){
  myarray = document.getElementsByClassName('col');

  console.log(myarray.length);

  for(i = 0; i<5; i++){
    blocks.push([]);
    for(j=0; j<5; j++){
      blocks[i].push(document.getElementsByClassName('col')[5*i+j]);
      blocks[i][j].innerHTML = "";
    }
  }
}

function startup(y){
  //fill 8 random places
  for(i = 0; i<y; i++){

    decider = [];
    for(j = 0; j<25; j++){
      if(blocks[Math.floor(j/5)][j%5].innerHTML=="")
        decider.push(j);
    }
    if(decider.length == 0){
      filllose();
      return;
    }
    var p = genRandom(decider.length);
    p = decider[p];
    console.log("i am " + p);
    value = Math.pow(2,1+genRandom(2));
    blocks[Math.floor(p/5)][p%5].innerHTML = value;
    console.log(Math.floor(p/5) + " "+ p%5 + " "+ value);
  }
  ndecider = [];
  for(j = 0; j<25; j++){
    if(blocks[Math.floor(j/5)][j%5].innerHTML!="")
      ndecider.push(j);
  }

  console.log(ndecider);
}

function genRandom(x){
  return Math.floor(Math.random()*x);
}

function slide(x,y){
  console.log(x+" "+y);
  if(x == -1 || y == -1){
    for(i=0; i<ndecider.length;i++){
      p = Math.floor(ndecider[i]/5);
      q = ndecider[i]%5;
      console.log("p is "+p + " q is "+ q);
      while(p+x>=0 && q+y>=0){

        if(blocks[p+x][q+y].innerHTML==""){
          blocks[p+x][q+y].innerHTML=blocks[p][q].innerHTML;
          blocks[p][q].innerHTML="";
        }

        else{
          if(blocks[p+x][q+y].innerHTML==blocks[p][q].innerHTML){
            blocks[p+x][q+y].innerHTML=2*parseInt(blocks[p][q].innerHTML);
            blocks[p][q].innerHTML="";
            break;
          }
          else{
            break;
          }
        }

        p = p+x;
        q = q+y;
      }
    }
  }
  else{
    for(i=ndecider.length - 1; i>=0;i--){
      p = Math.floor(ndecider[i]/5);
      q = ndecider[i]%5;
      console.log("p is "+p + " q is "+ q);
      while(p+x<=4 && q+y<=4){

        if(blocks[p+x][q+y].innerHTML==""){
          blocks[p+x][q+y].innerHTML=blocks[p][q].innerHTML;
          blocks[p][q].innerHTML="";
        }

        else{
          if(blocks[p+x][q+y].innerHTML==blocks[p][q].innerHTML){
            blocks[p+x][q+y].innerHTML=2*parseInt(blocks[p][q].innerHTML);
            blocks[p][q].innerHTML="";
            break;
          }
          else{
            break;
          }
        }

        p = p+x;
        q = q+y;
      }
    }
  }
  startup(1);
}

function filllose(){
  document.getElementsByTagName('span')[0].innerHTML="YOU LOSE";
}
