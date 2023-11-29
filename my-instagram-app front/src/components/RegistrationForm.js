import React from 'react';
import { Link } from 'react-router-dom';

const RegistrationForm = () => {
  return (
    <div className="registration-form">
      <img className="img-inst" src="images/instagram.png" alt="" />
      <p className="registration-title">Зарегистрируйтесь, чтобы  смотреть фото и видео ваших друзей.</p>
      <button className='sign-facebook' type="submit">Войти через Facebook</button>
      <hr className="line"></hr>
      <span className="text-between-lines">ИЛИ</span>
      <hr className="line"></hr>
      <form>
        <input type="text" placeholder="Моб. телефон или эл. адрес" />
        <input type="text" placeholder="Имя и фамилия" />
        <input type="text" placeholder="Имя пользователя" />
        <input type="password" placeholder="Пароль" />
        <p className='first-descripton'>
          Люди, которые пользуются нашим сервисом, могли загрузить вашу контактную информацию в Instagram.
          <a href='#'>Подробнее</a>
        </p>
        <p className='second-description'>Регистрируясь, вы принимаете наши Условия,
          Политику конфиденциальности и Политику в отношении файлов cookie.
        </p>
        <button className='btn' type="submit">Регистрация</button>
      </form>
      <p>У вас уже есть аккаунт? <Link to="/">Войдите</Link></p>
    </div>
  );
}

export default RegistrationForm;