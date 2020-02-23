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

// })();




let portfolioUrl = 'https://spreadsheets.google.com/feeds/list/16gT3ULdhVZSYIyzX-IOjWOr7Z1iXw2le4qEEea4GKAU/1/public/values?alt=json'


//JSON.stringify()
//JSON.parse()

console.log('before fetch');

let cards = [];

fetch(portfolioUrl)
  .then(res => res.json())
  .then(data => formatData(data) )

  function formatData(data) {
    // we need to return new array of portfolio projects
    // console.log(data.feed.entry)
    //lets map over the array..
    //map returns what?... a new array
    let portfolioArr = data.feed.entry.map(d => {
      return
        d.project.$t
     
    })
    console.log(portfolioArr);
  }

  console.log('after fetch');


