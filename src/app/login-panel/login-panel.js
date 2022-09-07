import React, { Component } from 'react';
import './login-panel.css';


const PasswordGenerate = () => {

  function copyPass() {
    var copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0, 9999);
    document.execCommand("copy");
  }

  function getPass() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var passLength = 16;
    var password = "";

    for (var i = 0; i < passLength; i++) {
      var randomNum = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNum, randomNum + 1);
    }
    document.getElementById("password").value = password;
  }

  const togPass = () => {
    const inp = document.getElementById('password');
    const btn_off = document.getElementById('btn_off');
    if (inp.type === "password") {
      inp.type = "text";
      btn_off.textContent = "On"
    } else {
      inp.type = "password";
      btn_off.textContent = "Off"
    }
  };

  return (
    <div className="inputBoxPas">
      <h2 className="inputBoxPas__title">Login Panel</h2>
      <input className="inputBoxPas__input" type="text" placeholder="Name" id="Name" />
      <input className="inputBoxPas__input" type="text" placeholder="Password" id="password" />
      <div className="inputBoxPas__button_in btn_color" id="btn_off" onClick={togPass}>On</div>
      <div className="wrapper-Box-Pas">
        <div className="inputBoxPas__button btn_color" id="btn_login">Login</div>
        <div className="inputBoxPas__button btn_color" id="btn" onClick={getPass}>Generate Pass</div>
        <div className="inputBoxPas__button btn_color" id="btn" onClick={copyPass}>Copy</div>
      </div>
    </div>
  );
};

export default class LogPanel extends Component {

  render() {

    return (
      <div>
        <PasswordGenerate />
      </div>
    );
  }
};