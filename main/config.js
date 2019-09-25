module.exports = class Config {
  constructor(option) {
    option = option || {};
    this.prefix = option.prefix || "!";
    this.selfbot = option.selfbot || false;
    this.ownerID = option.ownerID || "107047426992390144";
	//this.ownerID = option.ownerID || "625470478886240268";
    //this.token = option.token || process.env.token;
	this.token = 'NjI1NDcwNDc4ODg2MjQwMjY4.XYunvA.ByZcz8R0Ha_Y5kVj68v0ApPYSB4';
    //this.dbURL = option.dbURL || process.env.dbURL;
  }
}