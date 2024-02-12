   function del(){
       const value=document.getElementById('screen').value;
       document.getElementById('screen').value=value.substr(0, value.length-1);
     }

     const one=document.getElementById('one');
     one.addEventListener('click',function(){
       console.log('ONE clicked');
       const body=document.querySelector('body');
       body.classList.add('active1');
     })
     const two=document.getElementById('two');
     two.addEventListener('click',function(){
       console.log('TWO clicked');
       const body=document.querySelector('body');
       body.classList.remove('active1');
       body.classList.remove('active2');
     })
     const three=document.getElementById('three');
     three.addEventListener('click',function(){
       console.log('THREE clicked');
       const body=document.querySelector('body');
       body.classList.add('active2');
       body.classList.remove('active1');
     })
