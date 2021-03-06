function onOpen() {
  let SS: GoogleAppsScript.Spreadsheet.Spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let UI: GoogleAppsScript.Base.Ui = SpreadsheetApp.getUi();
  let MENU = new Menu(UI);
}

function TEST() {
  let Service = ScriptApp.getService();
  let URL = Service.getUrl();
  let isEnable = Service.isEnabled();
  CustomUI.showMessageBox('Service', `URL: ${URL} \r\nEnable: ${isEnable}`);
}

var SERVICE_NAME = 'Google Search Console';
var SERVICE_AUTH_URL = 'https://accounts.google.com/o/oauth2/auth';
var SERVICE_AUTH_TOKEN_URL = 'https://accounts.google.com/o/oauth2/token';
var CLIENT_ID =
  '661788518396-h62gh4qe5hpmrvf7snk1t14jet25revk.apps.googleusercontent.com';
var CLIENT_SECRET = 'IQlDMP0Wos6WE38kCHtt3Pqj';
var SERVICE_SCOPE_REQUESTS = `https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/webmasters.readonly`;
