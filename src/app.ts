import next from 'next'
import {bootstrapServer} from '@src/server'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

app.prepare().then(() => {
  bootstrapServer(app)
})
