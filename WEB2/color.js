var Links = {
  setColor: function (color) {
    var alist = document.querySelectorAll("a");
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = color;
      i++;
    }
  },
};
var Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBgColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function darkLightHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "dark") {
    Body.setBgColor("black");
    Body.setColor("white");
    self.value = "light";
    Links.setColor("powderblue");
  } else {
    Body.setBgColor("white");
    Body.setColor("black");
    self.value = "dark";
    Links.setColor("red");
  }
}
