// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

const imgBox = document.querySelector("#imgBox");
const qrImg = document.querySelector("#qrImg");
const qrText = document.querySelector("#qrText");

function generateQr() {
  if (qrText.value.length > 0) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
    imgBox.classList.add("show-img");
  } else {
    // alert('please enter yor Text or URL 😕')
    qrText.classList.add("err");
    setTimeout(() => {
      qrText.classList.remove("err");
    }, 1000);
  }
}
