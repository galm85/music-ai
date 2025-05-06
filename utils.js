

async function generateImage(openai,playlist) {
    // const songs = renderPrompt(playlist);

    try {
      const response = await openai.images.generate({
        model: "dall-e-3",
        prompt: `generate an image without words in it, according to the songs titles, genre and vibes of these songs: alone - marshmello, shake it off - taylor swift, master of puppets - metallica`,
        n: 1,
        size: "1024x1024",
      });
  
      const imageUrl = response.data[0].url;
      console.log("Image URL:", imageUrl);
      return({success:true,image:imageUrl})
    } catch (error) {
      console.error("Error generating image:", error);
      return({success:false,image:''})
    }
  }

  module.exports = {generateImage};

  function renderPrompt(playlist){
    let output = ''
    playlist.foreach(song =>{
        output += `${song.name} by ${song.artist}`
    })
    return output
  }