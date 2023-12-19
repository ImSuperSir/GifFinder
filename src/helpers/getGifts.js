export const getGifts = async (category) =>
{
  const lUrl = `https://api.giphy.com/v1/gifs/search?api_key=tEvmShhCKx3ldivNkeJVpr75ZyPjpOO6&q=${category}&limit=5`;
  const lResp = await fetch(lUrl);

  const { data } = await lResp.json();

  // console.log(data);

  const gifs = data.map(x => ({
    id: x.id,
    title: x.title,
    url: x.images.downsized_medium.url
  }
  ));

  // console.log(gifs);
  return gifs;
}