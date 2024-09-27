const accesskey = "oCESiVhE8TrLEet5iDhn4V0NSxxxCdrxTzxxLzUIDakHlQme5EozyPKI"

const url = 'https://api.pexels.com/v1/search?query=Ocean'
const options = {
    method: 'GET',
    headers: {
        'Authorization': 'oCESiVhE8TrLEet5iDhn4V0NSxxxCdrxTzxxLzUIDakHlQme5EozyPKI'
    }
}

async function fetchUrl() {
    const response = await fetch(url, options)
    const data = await response.json()
    const photos = data.photos
    console.log(photos)

   
    photos.map((photo) => {

        const occeanDiv = document.createElement('div');
       
        const occeanTitle = document.createElement('h1');
        occeanTitle.textContent = photo.photographer;
        occeanDiv.appendChild(occeanTitle);
    


        const Oceanimage =document.createElement('img');
        Oceanimage.setAttribute('src', photo.src.large);
        Oceanimage.setAttribute('alt', photo.photographer);
         occeanDiv.appendChild(Oceanimage)
         Oceanimage.classList.add('occean-img');
         

        document.querySelector('#occean').appendChild(occeanDiv);

        console.log(photos)
    })

   
}



fetchUrl()

