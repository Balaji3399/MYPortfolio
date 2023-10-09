fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_navbar");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});

fetch('footer.html')
.then(res => res.text())
.then(text => {
    let oldelem = document.querySelector("script#replace_with_footer");
    let newelem = document.createElement("div");
    newelem.innerHTML = text;
    oldelem.parentNode.replaceChild(newelem,oldelem);
});




// dynamic Names 

const lst = ["Web Developer", "Programmer", "Tech. Learner"];
const currentname = document.querySelector(".dynamic-names");
let currentindex = 0;
let char = 0;
let erase = false;

function displayNextCharacter() {
  if (currentindex < lst.length) {
    const currentword = lst[currentindex].toUpperCase();
    if (!erase && char < currentword.length) {
      currentname.textContent +=  currentword[char] ;
      char++;
    } else if (erase && char >= 0) {
      currentname.textContent = currentword.substring(0, char);
      char--;
    } else {
      if (!erase) {
        erase = true;
      } else {
        currentindex++;
        if (currentindex >= lst.length) {
          currentindex = 0; 
        }
        char = 0;
        erase = false;
        setTimeout(displayNextCharacter, 1000);
      }
    }
  }
}
const interval = setInterval(displayNextCharacter, 200); 
document.addEventListener("DOMContentLoaded", function () {
  displayNextCharacter();
});

// Dots style

const numDots = 100; 
const container = document.querySelector('.random-dots');

for (let i = 0; i < numDots; i++) {
  const dot = document.createElement('div');
  dot.className = 'random-dot';
  dot.style.width = "3px"; 
  dot.style.height = dot.style.width;
  dot.style.backgroundColor = 'white'; 
  dot.style.left = `${Math.random() * 100}%`; 
  dot.style.top = `${Math.random() * 100}%`; 

  container.appendChild(dot);
}

// Navbar Transition

async function fetchNav() {
  const response = await fetch('nav.html');
  const navHTML = await response.text();
}


fetchNav().then(() => {
  const navbar = document.querySelector('nav');
  const content = document.querySelector('.main');
  function handleScroll() {
    if (window.scrollY > 50) { 
      navbar.classList.add('nav-scroll');
    } else {
      navbar.classList.remove('nav-scroll');
    }
  }

   // nav-toggle-icon
    const navButton = document.querySelector('.nav-button');
    const navMenu = document.querySelector('#nav ul');

    navButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
  window.addEventListener('scroll', handleScroll);
});


