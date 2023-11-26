const ffmpeg = require('fluent-ffmpeg');

const inputFilePath = './example_clips/clip1.mp4';
const outputFilePath = './example_clips/clip1_edited.mp4';
const startTime = 0; // in seconds
const duration = 30; // in seconds

// ffmpeg.ffprobe(inputFilePath, (err, metadata) => {
//   if (err) {
//     console.error('Error:', err);
//   } else {
//     console.log('Metadata:', metadata);
//   }
// });

ffmpeg.ffprobe(inputFilePath, (error, metadata) => {
  if(error) { console.log(error) }
  else {
    console.log(metadata)
  }
})



