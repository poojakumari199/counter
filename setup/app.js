// set initial count
let count=0;

// select valu and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
    //console.log(item);
    btn.addEventListener('click' , function(e){
       // console.log(e.target.value);
       const styles = e.currentTarget.classList;
       if(styles.contains('decrease')){
           count--;
       }
       else if(styles.contains('increase')){
           count++;
       }
       else {
           count = 0;
       }
       if(count > 0){
           value.style.color = "green";
       }
       if(count < 0){
           value.style.color ="red";
       }
       if(count === 0){
           value.style.color = "#222";
       }
       value.textContent = count;
    })
});

