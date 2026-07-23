const {Router} = require("express");

const authRouter = Router()

/**
 * @route POST /api/aut/register
 * @description register a new user 
 * @access Public
 */
 authRouter.post("/register")

module.exports = authRouter