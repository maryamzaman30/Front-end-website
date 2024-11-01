 // Scenic sounds
 
 // Idea inspiration from: https://www.noisli.com/
 /* Code is my own but I had some help from:
    https://www.w3schools.com/jsref/met_audio_play.asp
    https://sabe.io/blog/javascript-play-sound-audio     
 */
 
 // `audiofiles` object is created to store the names of different audio files.
 /* Object containing the folder name of js then sounds folder & then sound files 
 for each sound option */
    const audiofiles = {
      // Placeholder for no sound
      none: "",
      // Placeholder for different sounds
      bird: "js/sounds/freesound1-birds.mp3",
      rain: "js/sounds/freesound2-rain.mp3", 
      water: "js/sounds/freesound3-water.mp3", 
      thunderstorm: "js/sounds/freesound4-thunderstorm.mp3", 
      wind: "js/sounds/freesound5-wind.mp3" 
  };
  
  // Function to play the selected sound audio
  /* This function takes a `sound` parameter, which represents the selected sound 
     to be played */
  function playAudio(sound) 
  {
      // Get the audio player & source elements
      const audioPlayer = document.getElementById("audio-player");
      const audio_playerSource = document.getElementById("audio-player-source");
      
      // Set the source of the audio player to the file name of the selected sound
      audio_playerSource.src = audiofiles[sound];
      
      // Load & play the new audio file
      audioPlayer.load();
      // This code below is written to prevent the following error message:
      /* " scenicsounds.js:30 Uncaught (in promise) DOMException: 
           The play() request was interrupted by a new load request. 
           https://goo.gl/LdLk22 " */
      const interruptedPlayPromise = audioPlayer.play();
    
      if (interruptedPlayPromise !== undefined) 
      {
        interruptedPlayPromise.then(_ => 
          {
             // The audio playback has started automatically
             // Update the user interface to reflect that the audio is playing

          })
          .catch(error => 
          {
             // The auto-play of the audio was prevented
             // Update the user interface to show that the audio is paused
          });
      }
  }

  // Function to set the volume of the audio player
  /* This function takes a `volume` parameter, which represents the specified volume level. */
  function volumeSet(volume) 
  {
      // Get the audio player element
      const audioPlayer = document.getElementById("audio-player");
      
      // Set the volume of the audio player to the specified value
      audioPlayer.volume = volume;
  }