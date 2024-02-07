// Created by TheVoidNexus on 31.01.2024 | Updated: 07.02.2024

let savedMoney = "savedMoney";
let savedUpgrade = "savedUpgrade";
let savedMPS = "savedMPS";

function redirect() {
  window.location.href = "https://thevoidnexus.github.io/database/";
}

function redirect2() {
  window.location.href = "https://thevoidnexus.github.io/calculator/";
}

let money = parseInt(localStorage.getItem(savedMoney)) || 0;
let upgradeMoney = parseInt(localStorage.getItem(savedUpgrade)) || 10;
let MPS = parseInt(localStorage.getItem(savedMPS)) || 0;

function update() {
  let Info = document.getElementById(`Info`);
  let Button1 = document.getElementById(`Button1`)
  let Button2 = document.getElementById(`Button2`)
  Info.innerHTML = `You currently have $${money}. Money per second: $${MPS}`;
  Button1.innerHTML = `Earn Money<br>Money per click: $${MPS}`
  Button2.innerHTML = `Upgrade<br>Cost: $${upgradeMoney}`
}

function clicker() {
  if(MPS != 0) {
   money += MPS} else {money += 1}
  update();
  localStorage.setItem(savedMoney, money);
}

function clickerUpgrade() {
  if (money >= upgradeMoney) {
    money -= upgradeMoney;
    if(MPS != 0) {MPS *= 2} else {MPS += 1};
    upgradeMoney *= 2.25;
    upgradeMoney = Math.round(upgradeMoney);
    money = Math.round(money);
    
    localStorage.setItem(savedMoney, money);
    localStorage.setItem(savedUpgrade, upgradeMoney);
    localStorage.setItem(savedMPS, MPS);

    alert(`Successfully upgraded!`);
  }
}

setInterval(function () {
  money += MPS;
  update();
  localStorage.setItem(savedMoney, money);
}, 1000);