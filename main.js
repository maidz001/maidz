function m1() {
  let a = document.getElementById("no").innerText;
  console.log(a);
  if (a == "không") {
    document.getElementById("no").innerText = "có";
    document.getElementById("maidz").innerText = "không";
  } else {
    document.getElementById("yes").innerText = "vãi cả l ông yêu tôi à";
  }
}
function m2() {
  let a = document.getElementById("maidz").innerText;
  if (a == "không") {
    document.getElementById("maidz").innerText = "có";
    document.getElementById("no").innerText = "không";
  } else {
    document.getElementById("yes").innerText = "vãi cả l ông yêu tôi à";
  }
}
