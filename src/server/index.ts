import express from 'express'
import type {Request, Response} from 'express'

import {authMiddleware, accessLoggingMiddlware} from '@src/server/middleware'

export const bootstrapServer = (app) => {
    const port = parseInt(process.env.PORT, 10) || 3000
    const server = express()

    server.use(authMiddleware)
    server.use(accessLoggingMiddlware)

    const defaultHandler = app.getRequestHandler()
    server.all('*', async (req: Request, res: Response) => {
        return defaultHandler(req, res)
    })

    server.listen(port, () => {
      console.log(`> Ready on http://localhost:${port}`)
    })
}