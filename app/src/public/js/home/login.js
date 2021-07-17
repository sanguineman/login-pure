"use strict";

const id = document.querySelector("#id"),
  psword = document.querySelector("#psword"),
  loginBtn = document.querySelector("button");

loginBtn.addEventListener("click",login);

function login() {
  const req = {
    id : id.value,
    psword: psword.value,
  };

  fetch("/login",{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    }, 
    body: JSON.stringify(req),
  })
  // 첫 번째 res는 http 통신 요청과 응답에서 응답의 정보를 담고 있는 Response Object 
  /* console.log(res) 예시 - 객체로 반환되는 것을 볼 수 있다. status 값이 200이면 제대로 저장이 되었다는 뜻이다.
    Response {type: "basic", url: "http://localhost:3000/login", redirected: false, status: 200, ok: true, …}
    body: (...)
    bodyUsed: fals시
    headers: Headers {}
    ok: true
    redirected: false
    status: 200
    statusText: "OK"
    type: "basic"
    url: "http://localhost:3000/login"
    __proto__: Response 
  */
  // res.json() 의 반환 값은 Promise, .json()을 통해 Response Object를 읽고, 이 body의 텍스트를 Promise 형태로 반환하는 것.
  .then((res) => res.json()) // === return res.json(), 바디가 추가되지 않은 형태
  .then((res)=>{
    if(res.success){
      location.href = "/";
    } else{
      alert(res.msg);
    }
  })
  .catch((err)=>{
    console.error("로그인 중 에러 발생");
  });
}