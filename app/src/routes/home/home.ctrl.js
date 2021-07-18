"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home : (req,res) => {
    logger.info("GET / 200 '홈 화면으로 이동'");
    res.render("home/index"); // index.ejs 로 이동한다. 
  }, 
  login : (req,res)=>{
    logger.info("GET /login 200 '홈 화면으로 이동'");
    res.render("home/login"); // login.ejs 로 이동한다.
  },

  register: (req,res) => {
    logger.info("GET /register 200 '홈 화면으로 이동'");
    res.render("home/register");
  }
};

const process = {
  login : async (req,res) => {
    const user = new User(req.body);
    const response = await user.login();
    if(response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.err}"`
      );
    else
      logger.info(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  },
  register: async (req,res)=>{
    const user = new User(req.body);
    const response = await user.register();
    if(response.err)
      logger.error(
        `POST /login 200 Response: "success: ${response.success}, msg: ${response.err}"`
      );
    else
      logger.info(
        `POST /register 200 Response: "success: ${response.success}, msg: ${response.msg}"`
      );
    return res.json(response);
  }
};

module.exports = {
  output,
  process,
};

/*
key 만 객체에 넣어주었을 때 자동으로 key 와 같은 value를 할당한다.
{
  hello: hello,
  login: login,
};
*/