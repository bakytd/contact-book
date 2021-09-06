import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
        <div className='link-colum'>
            <h1 className='text' >Добро Пожаловать на наш сайт</h1>
            <div className='link-color'>
            <Link to='/app'>Перейти в TODO LIST</Link>
            <Link to='/cont' className="link-pos">О нас</Link>
            </div>
            
        </div>
    );
};

export default MainPage;