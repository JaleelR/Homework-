
console.log("Let's get this party started!");
const input = document.getElementById('searchgif');
const submit = document.getElementById('submit');
const remove = document.getElementById('remove');
const div = document.getElementById('container');

async function getGif(q){  
     q = input.value;
     input.value = "";
    const res = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=OTvDRITFZef4z5WJCx25IygoJOha9or9', {params: {q} });
    console.log(res.data.data[0].images.preview_gif.url);
   const img = document.createElement('img'); 
   img.className = "img";
img.src = res.data.data[0].images.preview_gif.url;
div.append(img);
    }

 submit.addEventListener('click', function(e){
e.preventDefault();
getGif();

 }
  );
 
 remove.addEventListener('click', function(e){
    e.preventDefault();
 const img = document.getElementsByClassName("img");
 for (let imgs of img){
    imgs.style.visibility = "hidden";
 }

img.style.visibility = "hidden";

}


  );
 