export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=3q9gc5RNxKRJROJmh3EfzvqdKFKB9Bfm&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data }  = await resp.json();
    const gifs = data.map(g =>({
        id: g.id,
        title: g.title,
        url: g.images.downsized_medium.url,
    }));
    console.log(gifs);
    return gifs;
}
