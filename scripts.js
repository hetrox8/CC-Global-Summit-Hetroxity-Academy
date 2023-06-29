
const hamburgerBtn = document.getElementById('hammbuger');
const list = document.getElementById('hammbuger-list');
const hideElement = document.querySelectorAll('.card-1,.about,.speakers,.partners,container')
console.log(hideElement)
hamburgerBtn.addEventListener('click', () => {
list.style.display = 'flex'
hamburgerBtn.style.display = 'none';
document.getElementById('x-icon').style.display = 'block';
for(let i =0 ;i < hideElement.length; i ++){
 hideElement[i].style.display = 'none';
}

});

document.getElementById('x-icon').addEventListener('click',() => {
    list.style.display = ''
hamburgerBtn.style.display = '';
document.getElementById('x-icon').style.display = '';
for(let i =0 ;i < hideElement.length; i ++){
 hideElement[i].style.display = '';
}

})

const speaker = [
    {
      speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
      speakerName: 'Elon musk',
      speakerTitle: 'a google cloud  computer engineer',
      sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
    },
    {
        speakerImage: 'data:image/jpeg;base64,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',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'data:image/jpeg;base64,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',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
      {
        speakerImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRriiOkMsGax7txnLXH370xfbVkfhJDgQxaZg&usqp=CAU',
        speakerName: 'Elon musk',
        speakerTitle: 'a google cloud  computer engineer',
        sDetail: 'the founder  of tesla and space X . who invented elecetric vehicles and the first person to create reusable space craft',
      },
     
  ];

  function showMoreCards() {
    const guest = document.getElementById('guest-menu');
    const seeMoreBtn = document.getElementById('seeMore');
  
    for (let i = 2; i < speaker.length; i += 1) {
      guest.innerHTML += `<article class="guest">
                              <div class="target"><img src="${speaker[i].speakerImage}" alt="card-singer-image"></div>
                              <div class="guest-det">
                                 <h2>${speaker[i].speakerName}</h3>
                                 <h3>${speaker[i].speakerTitle}</h4>
                                 <p>${speaker[i].sDetail}</p>
                              </div>
                           </article>`;
    }
  
    seeMoreBtn.style.display = 'none';
  }
  
  function createSingerCard() {
    const guest = document.getElementById('guest-menu');
    const seeMoreBtn = document.getElementById('seeMore');
    const maxIterations = (window.innerWidth < 768) ? 2 : speaker.length;
    for (let i = 0; i < maxIterations; i += 1) {
      guest.innerHTML += `<articile class="speaker">
                              <div class="target"><img src="${speaker[i].speakerImage}" alt="card-singer-image"></div>
                              <div class="guest-det">
                                 <h3>${speaker[i].speakerName}</h3>
                                 <h4>${speaker[i].speakerTitle}</h4>
                                 <p>${speaker[i].sDetail}</p>
                             </div>
                          </articile>`;
    }
    if (window.innerWidth < 768) {
      seeMoreBtn.style.display = 'block';
      seeMoreBtn.addEventListener('click', showMoreCards);
    } else {
      seeMoreBtn.style.display = 'none';
    }
  }
  
  createSingerCard();
  
  window.addEventListener('resize', () => {
    const guest = document.getElementById('guest-menu');
  
    guest.innerHTML = '';
  
    createSingerCard();
  });
  