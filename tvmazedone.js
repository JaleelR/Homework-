
const MISSING_IMAGE_URL = "http://tinyurl.com/missing-tv";

/** Given a query string, return array of matching shows:
 *     { id, name, summary, image, episodesUrl }
 */

async function searchShows(query) {
  let response = await axios.get(
    `http://api.tvmaze.com/search/shows?q=${query}`);

  let shows = response.data.map(result => {
    let show = result.show;
    return {
      id: show.id,
      name: show.name,
      summary: show.summary,
      image: show.image ? show.image.medium : MISSING_IMAGE_URL,
    };
  });

  return shows;
}


/** Populate shows list:
 *     - given list of shows, add shows to DOM
 */

function populateShows(shows) {
  const $showsList = $("#shows-list");
  $showsList.empty();

  for (let show of shows) {
    let $item = $(
      `<div class="col-md-6 col-lg-3 Show" data-show-id="${show.id}">
         <div class="card" data-show-id="${show.id}">
           <img class="card-img-top" src="${show.image}">
           <div class="card-body">
             <h5 class="card-title">${show.name}</h5>
             <p class="card-text">${show.summary}</p>
             <button class="btn btn-primary get-episodes">Episodes</button>
           </div>
         </div>  
       </div>
      `);

    $showsList.append($item);
  }
}


/** Handle search form submission:
 *    - hide episodes area
 *    - get list of matching shows and show in shows list
 */

$("#search-form").on("submit", async function handleSearch (evt) {
  evt.preventDefault();

  let query = $("#search-query").val();
  if (!query) return;

  $("#episodes-area").hide();

  let shows = await searchShows(query);

  populateShows(shows);
});


/** Given a show ID, return list of episodes:
 *      { id, name, season, number }
 */

async function getEpisodes(id) {
  let response = await axios.get(`http://api.tvmaze.com/shows/${id}/episodes`);

  let episodes = response.data.map(episode => ({
    id: episode.id,
    name: episode.name,
    season: episode.season,
    number: episode.number,
  }));

  return episodes;
}


/** Populate episodes list:
 *     - given list of episodes, add espiodes to DOM
 */

function populateEpisodes(episodes) {
  const $episodesList = $("#episodes-list");
  $episodesList.empty();
    
  for (let episode of episodes) {
    let $item = $(
      `<li>
         ${episode.name}
         (season ${episode.season}, episode ${episode.number})
       </li>
      `);

    $episodesList.append($item);
  }

  $("#episodes-area").show();
}


/** Handle click on show name. */

$("#shows-list").on("click", ".get-episodes", async function handleEpisodeClick(evt) {
  let showId = $(evt.target).closest(".Show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});






//use strict";
/*
const $showsList = $("#shows-list");
const $episodesArea = $("#episodes-area");
const $searchForm = $("#search-form");
const $episodeList = $("#episodes-list");
const $epbutton = $("#epbutton");
/** Given a search term, search for tv shows that match that query.
 *
 *  Returns (promise) array of show objects: [show, show, ...].
 *    Each show object should contain exactly: {id, name, summary, image}
 *    (if no image URL given by API, put in a default image URL)
 */

/*
async function searchShow(term) {
  // ADD: Remove placeholder & make request to TVMaze search shows API.
const res =  await axios.get("https://api.tvmaze.com/singlesearch/shows", {params: {q : term}})
//console.log(res);
  return [
  {
id: res.data.id,
 name: res.data.name,
 summary: res.data.summary,
  image: res.data.image.original   
     }
]

}




//Given list of shows, create markup for each and to DOM 

function populateShows(shows) {
  $showsList.empty();

  for (let show of shows) {
    const $show = $(
        `<div data-show-id="${show.id}" class="Show col-md-12 col-lg-6 mb-4">
         <div class="media">
           <img 
           src="${show.image}"
          
              alt="" 
              class="w-25 mr-3">
           <div class="media-body">
             <h5 class="text-primary">${show.name}</h5>
             <div><small>${show.summary}</small></div>
             <button class="btn btn-outline-light btn-sm Show-getEpisodes">
               Episodes
             </button>
            
           </div>
         </div>  
       </div>
      ` 

      );
         $showsList.append($show); 
      
   }
}


// Handle search form submission: get shows from API and display.
 //    Hide episodes area (that only gets shown if they ask for episodes)
 

async function searchForShowAndDisplay() {
  const term = $("#search-query").val();
  const shows = await searchShow(term);


  populateShows(shows);



  
}

$searchForm.on("submit", async function (evt) {
  evt.preventDefault();
  searchForShowAndDisplay();
  $episodesArea.show();
//  const term = $("#search-query").val();
//await searchShow(term);
//const shows = await searchShow(term);
 //populateShows(shows);



});



// Given a show ID, get from API and return (promise) array of episodes:
 //     { id, name, season, number }
 

async function getEpisodes(id) {
const res =  await axios.get(`https://api.tvmaze.com/shows/${id}/episodes`)
console.log(res);
return  [{
id: res.data.id,
name: res.data.name,
season: res.data.season,
number: res.data.number
 }
]

}





/** Write a clear docstring for this function... */

// function populateEpisodes(episodes) { }
/*
function populateEpisodes(episodes){
  $epbutton.hide();
  const $episodeUl = $('<ul>');
  for (let episode of episodes) {
    const $episodeLi = $(`
      <li>
        ${episode.name} (season ${episode.season}, episode ${episode.number})
      </li>
    `);
    $episodeUl.append($episodeLi);
  }
  $episodeList.append($episodeUl);
  $("#episodes-area").show();
}





 $epbutton.on("click", async function handleEpisodeClick(e) {
   e.preventDefault(); 
   let showId = $(e.target).closest(".show").data("show-id");
  let episodes = await getEpisodes(showId);
  populateEpisodes(episodes);
});*/




