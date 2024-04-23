var blur = document.getElementById('blur');
      var button = document.querySelector('button');
      button.addEventListener('click',()=>{
        blur.classList.toggle('active');
        if(blur.classList.contains('active')){
            button.textContent = 'Cover Image';
        }else{
            button.textContent = 'See Image';
        }
      })