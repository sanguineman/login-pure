"use strict";

const logger = require("../../config/logger");
const User = require("../../models/User");

const output = {
  home : (req,res) => {
    logger.info("GET / 304 '홈 화면으로 이동'");
    res.render("home/index"); // index.ejs 로 이동한다. 
  }, 

  login : (req,res)=>{
    logger.info("GET /login 304 '홈 화면으로 이동'");
    res.render("home/login"); // login.ejs 로 이동한다.
  },

  register: (req,res) => {
    logger.info("GET /register 304 '홈 화면으로 이동'");
    res.render("home/register");
  }
};

const process = {
  login : async (req,res) => {
    const user = new User(req.body);
    const response = await user.login();

    const url = {
      method: "POST",
      path: "/login",
      status: response.err ? 400 : 200,
    };
    log(response, url);
    return res.status(url.status).json(response);
  },

  register: async (req,res)=>{
    const user = new User(req.body);
    const response = await user.register();
    const url = {
      method: "POST",
      path: "/register",
      status: response.err ? 409 : 201,
    };
    log(response, url);
    return res.status(url.status).json(response);
  }
};

module.exports = {
  output,
  process,
};

const log = (response, url) => {
  if(response.err){
      logger.error(
        `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.err}`
      );
    } else {
        logger.info(
        `${url.method} ${url.path} ${url.status} Response: ${response.success} ${response.msg || ""}`
      );
    }
}
/*
key 만 객체에 넣어주었을 때 자동으로 key 와 같은 value를 할당한다.
{
  hello: hello,
  login: login,
};
*/