"use strict";

const home = (req,res) => {
  res.render("home/index"); // index.ejs 로 이동한다. 
}

const login = (req,res)=>{
  res.render("home/login"); // login.ejs 로 이동한다.
};

module.exports = {
  home,
  login,
};

/*
key 만 객체에 넣어주었을 때 자동으로 key 와 같은 value를 할당한다.
{
  hello: hello,
  login: login,
};
*/