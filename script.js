// (function main() {
  const doc = document;

  // Shortcuts to DOM methods
  const getClassElements = className => doc.getElementsByClassName(className);
  const getFirstElementOfClass = className => getClassElements(className)[0];

  // MENU
  const collapse = getFirstElementOfClass('collapse');
  collapse.onclick = () => {
    const menu = getFirstElementOfClass('mnavigation');
    const collapseTop = getFirstElementOfClass('collapse__top');
    const collapseMiddle = getFirstElementOfClass('collapse__middle');
    const collapseBottom = getFirstElementOfClass('collapse__bottom');

    menu.classList.toggle('mnavigation--disappear');
    collapseTop.classList.toggle('collapse__top--change');
    collapseMiddle.classList.toggle('collapse__middle--change');
    collapseBottom.classList.toggle('collapse__bottom--change');
  };


  


  

//   // Open the modal window
//   const openModal = () => {
//     // wait before open
//     setTimeout(() => {
//       modal.classList.toggle('modal--visible');
//     }, 400);

//     // it'll show the content afterwards (700ms)
//     toggleContent();
//   };

//   // Close the modal window
//   const closeModal = () => {
//     toggleContent();

//     // fading effect
//     setTimeout(() => {
//       modal.classList.add('modal--fading');
//     }, 1500);

//     // exclude used classes
//     setTimeout(() => {
//       modal.classList.remove('modal--fading');
//       modal.classList.remove('modal--visible');
//     }, 2500);
//   };

//   // DATA FETCHING
//   const fetchTheContent = id => model.filter(x => x.id === id)[0];

//   const insertTheData = (work) => {
//     const { imgSrc, imgAlt, desc, projectUrl, prevId, nextId } = work;

//     // setup references to elements
//     const modalImg = getFirstElementOfClass('modal__img');
//     const modalDesc = getFirstElementOfClass('modal__desc');
//     const modalUrl = getFirstElementOfClass('modal__link').children[0];
//     const prevBtn = getFirstElementOfClass('modal__prev-btn');
//     const nextBtn = getFirstElementOfClass('modal__next-btn');

//     modalImg.src = imgSrc;

//     // modifying elements
//     modalImg.alt = imgAlt;
//     modalDesc.innerHTML = desc;
//     modalUrl.href = projectUrl;
//     prevBtn.dataset.visit = prevId;
//     nextBtn.dataset.visit = nextId;

//     const prevBtnClassList = prevBtn.classList;
//     const nextBtnClassList = nextBtn.classList;

//     const btnSwitcher = (id, classList) => {
//       const activeClass = `${classList[0]}--active`;
//       const isBtnActive = classList.contains(activeClass);

//       if (typeof id === 'number' && !isBtnActive) {
//         classList.add(activeClass);
//       } else if (!id && isBtnActive) {
//         classList.remove(activeClass);
//       }
//     }

//     btnSwitcher(prevId, prevBtnClassList);
//     btnSwitcher(nextId, nextBtnClassList);
//   };

//   // MANIPULATE WITHIN MODAL
//   function manipulate(id) {
//     const work = fetchTheContent(id);
//     insertTheData(work);
//   }

//   // Extracts surface id
//   const getImageId = (cssId) => {
//     const divided = cssId.split('_');
//     const last = divided.length - 1;
//     const id = parseInt(divided[last], 10);

//     return id;
//   }

//   // if image was clicked
//   const onClickSurface = (cssId) => () => {
//     openModal();
//     const id = getImageId(cssId);
//     manipulate(id);
//   };

//   // next/prev button handler
//   function switchButtonAction() {
//     const { visit } = this.dataset;
//     const id = parseInt(visit, 10);

//     // in case there is an image toward the direction
//     if (id || id === 0) {
//       const container = getFirstElementOfClass('modal__container');
//       container.classList.toggle('modal__container--visible');
//       setTimeout(() => {
//         manipulate(id);
//         container.classList.toggle('modal__container--visible');
//       }, 700);
//     }
//   }

//   const prevBtn = getFirstElementOfClass('modal__prev-btn');
//   const nextBtn = getFirstElementOfClass('modal__next-btn');

//   prevBtn.onclick = switchButtonAction;
//   nextBtn.onclick = switchButtonAction;

//   // HELPERS
//   // DOM node into array
//   function turnIntoArray(nodeList) {
//     return Array.from(nodeList);
//   }

//   // LISTENERS
//   // if close button was clicked
//   closeBtn.onclick = closeModal;

//   // Click event for imageSurfaces
//   turnIntoArray(imageSurfaces).forEach(item => {
//     // get the id of clicked image
//     item.onclick = onClickSurface(item.id);
//   });


// })();




let portfolioUrl = 'https://spreadsheets.google.com/feeds/list/16gT3ULdhVZSYIyzX-IOjWOr7Z1iXw2le4qEEea4GKAU/1/public/values?alt=json'


// JSON.stringify()
//JSON.parse()




console.log('before fetch');


let cards = [];

fetch(portfolioUrl)
  .then(res => res.json())
  .then(data => formatData(data) )

function render(data) {
  let formatedCards = formatData(data)
  console.log('this is data', data)
  formatedCards.forEach(card =>
    newCard(
      card.img,
      card.name,
      card.style,
      card.notes,
      card.stamp,
      card.brewery
    )
  );
}

function formatData(data) {
  data.feed.entry.map(card => {
    let eachCard = new Card(
      card.gsx$img.$t,
      card.gsx$name.$t,
      card.gsx$style.$t,
      card.gsx$tastingnotes.$t,
      card.gsx$stamp.$t,
      card.gsx$brewery.$t
    );
    cards.push(eachCard);
  });
  return cards
}


  function formatData(data) {
    // we need to return new array of portfolio projects
    // console.log(data.feed.entry)
    //lets map over the array..
    //map returns what?... a new array
    let portfolioArr = data.feed.entry.map(d => {
      return d.title.$t;
             d.
              
    })
    console.log(portfolioArr);
  }

  console.log('after fetch');


