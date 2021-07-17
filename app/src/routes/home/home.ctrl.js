"use strict";

const User = require("../../models/User");

const output = {
  home : (req,res) => {
    res.render("home/index"); // index.ejs 로 이동한다. 
  }, 
  login : (req,res)=>{
    res.render("home/login"); // login.ejs 로 이동한다.
  },

  register: (req,res) => {
    res.render("home/register");
  }
};

const process = {
  login : (req,res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
  },
  register: (req,res)=>{
    const user = new User(req.body);
    const response = user.register();
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