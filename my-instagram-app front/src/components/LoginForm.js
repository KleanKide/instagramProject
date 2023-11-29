import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector,  } from 'react-redux';
import { fetchAuth, selectIsAuth } from '../redux/slices/auth';
import { Navigate} from 'react-router-dom'

const LoginForm = () => {
  const isAuth = useSelector(selectIsAuth)
    const dispatch =  useDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: 'test@test.ru',
      password: '12345',
    },
    mode: 'onChange',
  });

   let data;
   const onSubmit = async (values) => {
    try {
      const data = await dispatch(fetchAuth(values));
      if (!data.payload) {
        alert('Не удалось авторизоваться!');
      } else if ('token' in data.payload) {
        window.localStorage.setItem('token', data.payload.token);
      }
    } catch (error) {
      console.error('Ошибка запроса:', error);
    }
  };
  if(isAuth){ 
    return <Navigate to = '/homepage'/>
  }
  //   .then(response => {
  //       console.log('Успешный запрос:', response.data);
  //     })
  //     .catch(error => {
  //       console.error('Ошибка запроса:', error.response.data);
  //     });
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="registration-form">
        <img className="img-inst" src="images/instagram.png" alt="" />
        <p className="registration-title">
          Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
        </p>
        <button className="sign-facebook" type="button">
          Войти через Facebook
        </button>
        <hr className="line" />
        <span className="text-between-lines">ИЛИ</span>
        <hr className="line" />
        <div>
          <input
            type="text"
            placeholder="Имя пользователя"
            {...register('email', { required: 'Укажите почту' })}
          />
          {errors.email && <p className="error-message">{errors.email.message}</p>}
          <input
            type="password"
            placeholder="Пароль"
            {...register('password', { required: 'Укажите пароль' })}
          />
          {errors.password && <p className="error-message">{errors.password.message}</p>}
          <button className='btn' type="submit" disabled={!isValid}>
            Войти
          </button>
        </div>
        <p>
          У вас уже есть аккаунт? <Link to="/registration">Регистрация</Link>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
