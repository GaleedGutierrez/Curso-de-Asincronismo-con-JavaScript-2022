import { Video } from "./interfacesProyectoCv";

async function fetchData (urlApi: string) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    console.log(data);
    return data;
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'cf44d0c145mshbeb547b9fcfa00fp1d2c44jsn4feb206823ae',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=9';

const content = document.getElementById('content') as HTMLElement;


(async () => {
    try {
        const videos: Video = await fetchData(API);
        const view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
                >
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full" />
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span
                            aria-hidden="true"
                            class="absolute inset-0"
                        ></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}`;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }

})();
