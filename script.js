// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

let imgBox = document.getElementById("imgBox");
let qrText = document.getElementById("qrText");
const downloadPng = document.getElementById("download-png");
const downloadJpg = document.getElementById("download-jpg");
const downloadSvg = document.getElementById("download-svg");
let qrImage = document.getElementById("qrImage");

let canvas = document.createElement("canvas");

document.querySelector(".generateBtn").addEventListener("click", () => {
  if (qrText.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    imgBox.classList.add("show-img");
    document.querySelector(".qr-display").style.display = "block";

    // Load the QR code image into the canvas
    let img = new Image();
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      imgBox.classList.add("show-img");
    };
    img.src = qrCodeUrl;
  } else {
    imgBox.classList.remove("show-img");
    document.querySelector(".qr-display").style.display = "none";
    qrText.classList.add("error");
    setTimeout(() => {
      qrText.classList.remove("error");
    }, 1000);
  }
});

downloadPng.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = "qr.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});

downloadJpg.addEventListener("click", () => {
  let link = document.createElement("a");
  link.download = "qr.jpg";
  link.href = canvas.toDataURL("image/jpeg");
  link.click();
});
