
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






let portfolioUrl = 'https://spreadsheets.google.com/feeds/list/16gT3ULdhVZSYIyzX-IOjWOr7Z1iXw2le4qEEea4GKAU/1/public/values?alt=json'


//JSON.stringify()
//JSON.parse()

console.log('before fetch');

let cards = [];

fetch(portfolioUrl)
  .then(res => res.json())
  .then(data => render(data));



function formatData(data) {
  data.feed.entry.forEach(card => {

    let eachCard = new Card(
      card.gsx$project.$t,
      card.gsx$image.$t,
      card.gsx$description.$t
    );
    cards.push(eachCard);
  });
  return cards
}
  
/* Renders data */
function render(data) {
  let formatedCards = formatData(data)
  console.log('this is data', data)
  formatedCards.forEach(card =>
    newCard(
      card.project,
      card.image,
      card.description,
    )
  );
}



function Card(image, project, description ) {
  this.project = project;
  this.image = image;
  this.description = description;
 
}





  // function formatData(data) {
   
  //   let portfolioArr = data.feed.entry.map(d => {
  //     return {d.project.$t}
     
  //   })
  //   console.log(portfolioArr);
  // }

  // console.log('after fetch');




// $(".clickImage").on('click', function () {
//  $('.thumbnails__img')
// });


