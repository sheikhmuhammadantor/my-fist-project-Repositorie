//Generate a Random Color ;

const start = document.querySelector('#start');
const stop = document.querySelector('#stop');
const hex = '4C8A79B1F06E52D3';
let setInt ;


function randomColor() {
  let color = '#'
  for(let i = 0; i < 3; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = color;
  console.log(color);
}


start.addEventListener('click', () => {
  if(!setInt){
    console.log(setInt);
    setInt = setInterval(() => {
      randomColor()
    }, 1100);
  }
})

stop.addEventListener('click', () => {
  clearInterval(setInt);
  setInt = null;
})
