
import { App } from '@tinyhttp/app'

const PORT = 4444

const app = new App()

app
  .get('/videos/:videoId.mp4/', (req, res) => {
    const { videoId } = req.params
    res.send({ message: `Should get ${videoId} group of pictures`})

  })
.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`)
})