import React, { Component, useEffect, useState } from 'react';
import './app.css';


const myNews = [
  {
    id: '1',
    name: 'Продукт 100',
    price: '1200',
    text: 'Text111',
    image: 'img1.jpg'
  },
  {
    id: '2',
    name: 'Продукт 2',
    price: '1400',
    text: 'Text222',
    image: 'img1.jpg'
  },
  {
    id: '3',
    name: 'Продукт 3',
    price: '1600',
    text: 'Text333',
    image: 'img1.jpg'
  }
];

class News extends React.Component {

  state = {
    visible: false,
    counter: 0,
  }
  // handleReadMoreClck = (e) => {
  //   e.preventDefault()
  //   this.setState({ visible: true })
  // }
  // handleCounter = () => {
  //   this.setState({ counter: ++this.state.counter })
  // }

  render() {
    const { data } = this.props;
    const { visible } = this.state;

    const newsTemplate = data.map(function (item) {
      return (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.text}</p>
          <p>{item.price}</p>

          {!visible && <a href="#" className='news__readmore'>Подробнее</a>}
          {visible && <p className='news__big-text'>bigText</p>}
        </div>
      );
    });

    return (
      <div className="news">
        {newsTemplate}
        {data.length ? <strong>Всего новостей: {data.length}</strong> : null}
      </div>
    )
  }
};

class Add extends React.Component {
  state = {
    name: '',
    text: '',
    agree: false,
  }
  onBtnClickHandler = (e) => {
    e.preventDefault()
    const { name, text } = this.state
    alert(name + '\n' + text)
  }
  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: e.currentTarget.value })
  }
  handleCheckboxChange = (e) => {
    this.setState({ agree: e.currentTarget.checked })
  }
  validate = () => {
    const { name, text, agree } = this.state
    if (name.trim() && text.trim() && agree) {
      return true
    }
    return false
  }
  render() {
    const { name, text, agree } = this.state
    return (
      <form className='add'>
        <input
          id='name'
          type='text'
          onChange={this.handleChange}
          className='add__author'
          placeholder='Ваше имя'
          value={name}
        />
        <textarea
          id='text'
          onChange={this.handleChange}
          className='add__text'
          placeholder='Текст новости'
          value={text}
        ></textarea>
        <label className='add__checkrule'>
          <input type='checkbox' onChange={this.handleCheckboxChange} /> Я согласен с правилами
        </label>
        <button
          className='add__btn'
          onClick={this.onBtnClickHandler}
          disabled={!this.validate()}>
          Показать alert
        </button>
      </form>
    )
  }
}

class Shop extends React.Component {
  render() {
    const { data } = this.props;
    const newsTemplate = data.map(function (item) {
      return (
        <div key={item.id} className="col-sm contetn">
          <h2 className="contetn__title center">{item.name}</h2>
          <img className="contetn__img center" src={item.image} alt="img"></img>
          <p className="contetn__text">{item.text}</p>
          <h3 className="contetn__price center">{item.price} руб.</h3>
          <a className="contetn__button center" href="">Добавить в корзину</a>
        </div>
      );
    });
    return (
      <div>{newsTemplate}</div>
    )
  }
};


export default class App extends Component {

  render() {

    const ColContent = ({ name, img, text, price }) => {
      return (
        <div className="col-sm contetn">
          <h2 className="contetn__title center">{name}</h2>
          <img className="contetn__img center" src={img} alt="img"></img>
          <p className="contetn__text">{text}</p>
          <h3 className="contetn__price center">{price} руб.</h3>
          <a className="contetn__button center" href="">Добавить в корзину</a>
        </div>
      )
    };

    // const togPass = () =>{
    //   const inp = document.getElementById('pass');
    //   if (inp.type === "password"){
    //     inp.type = "text"
    //   }else{
    //     inp.type = "password"
    //   }
    // };

    const ImageList = () => {
      return (
        <div>

          {/* <div className="container">
            <div className="row justify-content-md-center">
              <h2 className="container__title center">Заголовок блока</h2>
            </div>
            <div className="row justify-content-md-center">
              <h3 className="container__title_lower center">Подзаголовок блока</h3>
            </div>
            <div className="row">
              <ColContent name="Продукт 1" img="img1.jpg" text="Lorem impuls Lorem impuls Lorem impuls Lorem impuls" price="1 300" />
              <ColContent name="Продукт 2" img="img1.jpg" text="Lorem impuls Lorem impuls Lorem impuls Lorem impuls" price="1 300" />
              <ColContent name="Продукт 3" img="img1.jpg" text="Lorem impuls Lorem impuls Lorem impuls Lorem impuls" price="1 300" />
            </div>
            <div className="row align-items-end contetn">Общая сумма: 0 руб.</div>
          </div> */}
          <News data={myNews} />
          {/* <Shop data={myNews} /> */}
          <Add />
          {/* <input type='password' placeholder='Pass' id='pass'/>
              <button className="btn_pass" onClick={togPass}></button> */}
        </div>
      );
    };


    return (
      <div>
        <ImageList />
      </div>
    );
  }
};



// 1. При нажатии на кнопку "Добавить в корзину":
    // * менять состояние кнопки;
    // * делать её некликабельной;
    // * пересчитывать общую сумму.
// 2. Сверстать при помощи сетки bootstrap 4.
// 3. Использовать спецификацию БЭМ для именования классов.
// 4. Такие данные как наименование продукта и цена должны рендериться при помощи JS из массива, например:
// 5. На странице все цены и общая сумма должны отображаться с пробелом, отделяющим тысячную часть числа. Например, 3 400 руб.
// 6. Использовать в исходном коде стандарт es6 или выше.
// 7. При помощи любого сборщика скомпилировать написанный скрипт в стандарт es5, минифицировать скрипт и стили.
// 8. Выложить работу на github.