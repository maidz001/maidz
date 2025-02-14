let b = 100;
let c = 100;

function m1() {
  let a = document.getElementById("no").innerText;
  console.log(a);
  if (a == "không") {
    document.getElementById("no").innerText = "có";
    document.getElementById("maidz").innerText = "không";
    document.getElementById("no").style.width = b + "px";
    document.getElementById("no").style.height = c + "px";
    document.getElementById("yes").innerText =
      "đừng dối lòng nữa trả lời thật đi";
  } else {
    document.getElementById("yes").innerText = "vãi cả l ông yêu tôi à";
  }
}
function m2() {
  let a = document.getElementById("maidz").innerText;
  if (a == "không") {
    b = b + b;
    c = c + c;
    document.getElementById("maidz").style.width = b + "px";
    document.getElementById("maidz").style.height = c + "px";

    document.getElementById("yes").innerText =
      "đừng dối lòng nữa trả lời thật đi";
    document.getElementById("maidz").innerText = "có";
    document.getElementById("no").innerText = "không";
  } else {
    document.getElementById("yes").innerText = "vãi cả l ông yêu tôi à";
  }
}
