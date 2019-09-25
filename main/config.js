module.exports = class Config {
  constructor(option) {
    option = option || {};
    this.prefix = option.prefix || "!";
    this.selfbot = option.selfbot || false;
    this.ownerID = option.ownerID || "107047426992390144";
	//this.ownerID = option.ownerID || "625470478886240268";
    //this.token = option.token || process.env.token;
	this.token = 'NjI1NDcwNDc4ODg2MjQwMjY4.XYuplg.FDq4hhjRTTm_zpDO-Xg0yWswlqY';
    //this.dbURL = option.dbURL || process.env.dbURL;
  }
}