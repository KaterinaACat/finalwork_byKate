 function toggleMenu() {
            const burgerMenuBtn = document.querySelector('.burger-menu-btn');
            burgerMenuBtn.classList.toggle('open');
        }

const button = document.querySelector('#change-btn');
    const textParagraph = document.querySelector('#text');
    const originalText = textParagraph.textContent;
    const changedText = 'Привет!';

button.addEventListener('click', () => {
      if (textParagraph.textContent === originalText) {
        textParagraph.innerHTML = changedText;
      } else {
        textParagraph.innerHTML = originalText;
      }
    });



  const input = document.querySelector('#myInput');
  const addBtn = document.querySelector('#addBtn');
  const list = document.querySelector('#myList');

  
  button.addEventListener('click', () => {
    const text = input.value.trim(); 
    if (text === '') {
      alert('Введите текст!');
    } else {
     
      const newLi = document.createElement('li');
    
      newLi.innerText = text;
      
      list.appendChild(newLi);
      
      input.value = '';
    }
  });

  const textarea = document.querySelector('#myTextarea');
  const counterSpan = document.querySelector('#counter');

  
  textarea.addEventListener('input', () => {
    const length = textarea.value.length; 
    counterSpan.innerHTML = length; 
  });
 
 
 
 
const toggleButton = document.querySelector('#toggleTheme');


  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
  });
