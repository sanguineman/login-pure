"use strict";

const output = {
  home : (req,res) => {
    res.render("home/index"); // index.ejs 로 이동한다. 
  }, 
  login : (req,res)=>{
    res.render("home/login"); // login.ejs 로 이동한다.
  },
};

const users = {
  id: ["sanguineman", "node", "js"],
  psword: ["1234", "1234", "123456"],
};

const process = {
  login : (req,res) => {
    const id = req.body.id,
    psword = req.body.psword;

    if(users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if(users.psword[idx] === psword){
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success : false,
      msg : "로그인에 실패하셨습니다.",
    });
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