"use strict";

class UserStorage {
    static #users = {
      id: ["sanguineman", "node", "js"],
      psword: ["1234", "1234", "123456"],
      name: ["생긴","노드","제이에스"],
    };

    static getUsers(...fields){
      const users = this.#users;
      const newUsers = fields.reduce((newUsers, field) => {
        if(users.hasOwnProperty(field)){
          newUsers[field] = users[field];
        }
        return newUsers;
      },{});
      return newUsers;
    }

    static getUserInfo(id){
      const users = this.#users;
      const idx = users.id.indexOf(id);
      const userInfo = Object.keys(users).reduce((newUser, info) => {
        newUser[info] = users[info][idx];
        return newUser;
      }, {});

      return userInfo;

    }
}

module.exports = UserStorage;
