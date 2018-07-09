import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

var app = firebase.initializeApp({
  apiKey: 'AIzaSyAYYX3cP0-My4mbeCaLx2MoW1BikYI4WnU',
  authDomain: 'hacker-news.firebaseio.com',
  databaseURL: 'https://hacker-news.firebaseio.com',
  projectId: 'hacker-news'
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export default base;