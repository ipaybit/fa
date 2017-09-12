import {Router, Request, Response, NextFunction} from 'express';
const Blocks = [];

export class BlockRouter {
  router: Router

  /**
   * Initialize the BlockRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * GET all Blocks.
   */
  public getAll(req: Request, res: Response, next: NextFunction) {
    res.send(Blocks);
  }

  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.get('/', this.getAll);
  }

}

// Create the BlockRouter, and export its configured Express.Router
const blockRoutes = new BlockRouter();
blockRoutes.init();

export default blockRoutes.router;