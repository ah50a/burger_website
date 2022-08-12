window.onscroll = () =>{

    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
    }else{
      document.querySelector('#scroll-top').classList.remove('active');
    }
  
  }
 
  function myFun(e){
    e.preventDefault();
    let inp1 = document.getElementById('inp1').value;
    let length = inp1.length;

    let number = document.getElementById('number').value;
    let numberLength = number.length;
    let food = document.getElementById('food').value;
    foodlength = food.length;
    let emails = document.getElementById('emails').value;
    if(length <= 3 || length > 20){
      alert('Name must be between 4 an 20 character');
  }

  if(numberLength == 0){
      alert('Number must Contain number');
  }
  if (foodlength <= 3) {
    alert('Put Right Name In foode name');
  }

    if (emails.search('@') == -1) {
      alert('Email must Contain @ ');
    }
  }
  btn.onclick = myFun;