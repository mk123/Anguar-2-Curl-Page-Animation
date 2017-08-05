/**
 * Created by manjeet on 5/8/17.
 */
var MyNumber = 120;
var MyAlert = function () {
  return alert("Java script code for book will be executed now");
};

var MyBook = function () {
  return $("#flipbook").turn({
    width: 400,
    height: 300,
    autoCenter: true
  });
};
