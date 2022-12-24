var counter=2;
setInterval(function(){
  document.getElementById("radio"+counter).checked=true;
  counter++;
  if(counter>4){
    counter=1;
  }
},10000);

