import {Request, Response, NextFunction} from 'express'

/**
 * Simple accessing logging middleware.
 * TODO: Replace with Bunyan
 * @param req
 * @param res
 * @param next
 */
export default (req: Request, res: Response, next: NextFunction) => {
  console.log(req.originalUrl)
  next()
}