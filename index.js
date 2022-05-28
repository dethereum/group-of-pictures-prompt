
import { App } from '@tinyhttp/app'

const PORT = 4444

const app = new App()

app
  .get('/videos/:videoId.mp4/group-of-pictures.json', (req, res) => {
    const { videoId } = req.params
    res.send({ message: `Should get ${videoId} group of pictures`})

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