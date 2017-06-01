var database;
var ref_to_news;
var key;

function setup() {
  noCanvas();
  var params = getURLParams();
  key = params.q;
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDogcvZpQ2zjgpBTsEgIEPlSVKBf-Idalk",
    authDomain: "frsf-test.firebaseapp.com",
    databaseURL: "https://frsf-test.firebaseio.com",
    projectId: "frsf-test",
    storageBucket: "frsf-test.appspot.com",
    messagingSenderId: "80364904476"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  ref_to_news = database.ref('news');

  ref_to_news.on('value', gotData, errData);
}

function gotData(data) {
  console.log(data.val());
  var news = data.val();
  var title = news[key].title;
  var body = news[key].body;
  var title_html = createP(title);
  var body_html = createP(body);
  var div = createDiv('2frsf.news');
  div.addClass('news_container');
  title_html.addClass('title');
  title_html.parent(div);
  body_html.addClass('body');
  body_html.parent(div);
 //console.log(title);
 //console.log(body);
}

function errData() {

}

function draw() {

}
