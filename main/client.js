const Discord = require('discord.js');
const Util = require('./util');
const Config = require('./config');
//const Database = require('./db');
const Constants = require('./const.js');
const Dashboard = require('../dashboard/server.js');
const http = require('http');
module.exports = class NobuBot {
  constructor(option) {
    this.client = new Discord.Client();
    this.config = new Config(option);
    //this.db = new Database(this.config.dbURL);
    this.util = new Util(this);
    this.util.load().then(data => {
      this.commands = data.commands;
      this.events = data.events;
      let loginTime = Date.now();
      this.client.on('ready', () => {
        this.dashboard = new Dashboard(this);
        console.log(`Logged in! Time taken: ${Date.now() - loginTime}ms`);
      });
      this.client.on('disconnect', () => {
        loginTime = Date.now();
      });
      this.client.login(this.config.token).catch(console.log);
    }).catch(console.log);
    setInterval(function() {
      http.get("http://nobubot.herokuapp.com");
    }, 300000);    
  }
}