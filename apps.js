function setup() {
  noCanvas();
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

  ref_to_apps = database.ref('apps');

  ref_to_apps.on('value', gotData, errData);
}

function gotData(data) {
  var apps = data.val();
  var keys = Object.keys(data.val());
  for(var i = 0; i < keys.length; i++) {
    title = apps[keys[i]].title;
    desc = apps[keys[i]].desc;
    thumbl = apps[keys[i]].thumbl;
    beta = apps[keys[i]].beta;
    price = apps[keys[i]].price;
    ver = apps[keys[i]].version;
    var app_all_cont = createDiv('');
    app_all_cont.addClass('app_all_cont');
    var app_elm_cont = createDiv('');
    app_elm_cont.addClass('app_elm_cont');
    app_elm_cont.parent(app_all_cont);
    var img_cont_cont = createDiv('');
    img_cont_cont.addClass('img_cont_cont');
    img_cont_cont.parent(app_elm_cont);
    var img = createImg(thumbl);
    img.addClass('img_cont');
    img.parent(img_cont_cont);
    var text_cont = createDiv('');
    text_cont.addClass('text_cont');
    text_cont.parent(app_elm_cont);
    var text = createP(desc);
    text.addClass('center');
    text.parent(text_cont);
    var button = createButton('Download');
    button.addClass('download_button');
    button.parent(app_elm_cont);
    var beta_cont = createDiv('');
    beta_cont.addClass('beta_cont');
    beta_cont.parent(app_elm_cont);
    if(beta != false) {
      var beta_img = createImg('betav.png');
      beta_img.addClass('beta');
      beta_img.parent(beta_cont);
    }
  }
}

function errData(err) {
  console.log(err);
}
