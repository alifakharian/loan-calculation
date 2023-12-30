let content = document.querySelector(".btn-content");
let key = document.querySelector(".btn-key");
let kind = document.querySelector(".btn-kind");
let car = document.querySelector(".btn-car");
let marid = document.querySelector(".btn-marid");
let home = document.querySelector(".btn-home");
let bild = document.querySelector(".btn-bild");
let cost = document.querySelector(".btn-cost");
let sood = document.querySelector(".btn-sood");
let ghest = document.querySelector(".btn-ghest");
let calc = document.querySelector(".btn-calc");
let ans = document.querySelector(".btn-ans");
let restore = document.querySelector(".btn-restore");

// اگر x نبود برابر با 6(if(x!=6));

calc.addEventListener("click", function () {
  if (kind.innerHTML != "" && cost.innerHTML != "" &&  ghest.innerHTML != "") {
    ans.style.display = "block";
    restore.style.display = "block";
  }
});

content.addEventListener("click", function () {
  kind.style.display = "block";
});

let mablagh;
let ghestnumber;

car.addEventListener("click", function () {
  let mablagh = parseInt(prompt("مبلغ درخواستی"));
  let ghestnumber = parseInt(prompt("تعداد اقساط"));
  cost.innerHTML = mablagh;
  ghest.innerHTML = ghestnumber;
  kind.style.display = "none";
  sood.innerHTML = "15%";
  key.innerHTML = car.textContent;
  ans.innerHTML = (mablagh * (15 / 100) + mablagh) / ghestnumber;
  restore.innerHTML = mablagh * (15 / 100) + mablagh;
});

marid.addEventListener("click", function () {
  let mablagh = parseInt(prompt("مبلغ درخواستی"));
  let ghestnumber = parseInt(prompt("تعداد اقساط"));
  kind.style.display = "none";
  key.innerHTML = marid.textContent;
  cost.innerHTML = mablagh;
  ghest.innerHTML = ghestnumber;
  sood.innerHTML = "20%";
  ans.innerHTML = (mablagh * (20 / 100) + mablagh) / ghestnumber;
  restore.innerHTML = mablagh * (20 / 100) + mablagh;
});

home.addEventListener("click", function () {
  let mablagh = parseInt(prompt("مبلغ درخواستی"));
  let ghestnumber = parseInt(prompt("تعداد اقساط"));
  kind.style.display = "none";
  key.innerHTML = home.textContent;
  cost.innerHTML = mablagh;
  ghest.innerHTML = ghestnumber;
  sood.innerHTML = "25%";
  ans.innerHTML = (mablagh * (25 / 100) + mablagh) / ghestnumber;
  restore.innerHTML = mablagh * (25 / 100) + mablagh;
});

bild.addEventListener("click", function () {
  let mablagh = parseInt(prompt("مبلغ درخواستی"));
  let ghestnumber = parseInt(prompt("تعداد اقساط"));
  kind.style.display = "none";
  cost.innerHTML = mablagh;
  ghest.innerHTML = ghestnumber;
  key.innerHTML = bild.textContent;
  sood.innerHTML = "30%";
  ans.innerHTML = (mablagh * (30 / 100) + mablagh) / ghestnumber;
  restore.innerHTML = mablagh * (30 / 100) + mablagh;
});
