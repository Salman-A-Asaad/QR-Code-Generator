let input = document.getElementById("myTU");
let qrImg = document.getElementById("qrImg");
let myButtun = document.getElementById("myButtun");
let imgBox = document.querySelector(".imgBox");
console.log(imgBox);
myButtun.onclick = function () {
  if (input.value == "") {
    return;
  } else {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    imgBox.classList.add("show-img");
  }
};
