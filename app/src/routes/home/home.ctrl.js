"use strict";

const User = require("../../models/User");

const output = {
  home : (req,res) => {
    res.render("home/index"); // index.ejs 로 이동한다. 
  }, 
  login : (req,res)=>{
    res.render("home/login"); // login.ejs 로 이동한다.
  },
};

const process = {
  login : (req,res) => {
    const user = new User(req.body);
    const response = user.login();
    return res.json(response);
    // const id = req.body.id,
    // psword = req.body.psword;

    // const users = UserStorage.getUsers("id","psword");

    // const response = {};
    // if(users.id.includes(id)) {
    //   const idx = users.id.indexOf(id);
    //   if(users.psword[idx] === psword){
    //     response.success = true;
    //     return res.json(response);
    //   }
    // }
    // response.success = false;
    // response.msg = "로그인에 실패하셨습니다.";
    // return res.json(response);
  },
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