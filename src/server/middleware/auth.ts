import {Request, Response, NextFunction} from 'express'

import {User} from '@src/lib/entities/user'

export default (req: Request, res: Response, next: NextFunction) => {
  req.user = new User("1234", "atainter")
  next()
}