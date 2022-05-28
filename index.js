import { spawn } from 'child_process';
import { App } from '@tinyhttp/app'

const PORT = 4444

const app = new App()

//ffprobe   json ./videos/CoolVideo.mp4

app
  .get('/videos/:videoId.mp4/group-of-pictures.json', (req, res) => {
    const { videoId } = req.params

    const child = spawn('ffprobe', ['-show_frames', '-print_format', 'json', `./videos/${videoId}.mp4`], {stdio: 'pipe'});
    let acc = '';

    child.on('exit', () => {
        const {frames} = JSON.parse(acc);
        const iFrames = frames.filter(f => f.pict_type == "I")
        res.send(iFrames);
    });
    
    child.stdout.on('data', (data) => {
        const d_str = data.toString('utf8');
        acc = acc.concat(d_str)
    });
  })
  .get('/videos/:videoId.mp4/group-of-pictures/:groupIndex.mp4', (req, res) => {
    res.send({ message: `implement me`})
  })
  .get('/videos/:videoId.mp4/group-of-pictures', (req, res) => {
    const { videoId } = req.params
    res.send({ message: `implement me 2`})

  })
.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})