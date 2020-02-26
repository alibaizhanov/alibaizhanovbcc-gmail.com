import React from 'react';

import {Message} from 'components'
import './Home.scss'

const Home = () => (

        <section className = "home">

             <Message 
                avatar = "https://sun9-35.userapi.com/c627724/v627724488/c494/j2lafv0ysJ0.jpg?ava=1" 
                text = "Добрый день , не получается сделать время отправки так же , как и в видео. В консоле пишет , что модулю не найден. Попробовал сделать formatDistanceToNow на странице выводится RangeError: Invalid time value" 
                date='Wed Feb 12 2020 16:54:20'/> 
             <Message 
                avatar = "https://sun9-35.userapi.com/c627724/v627724488/c494/j2lafv0ysJ0.jpg?ava=1" 
                text = "Добрый день , не получается сделать время отправки так же , как и в видео. В консоле пишет , что модулю не найден. Попробовал сделать formatDistanceToNow на странице выводится RangeError: Invalid time value" 
                date='Wed Feb 26 2020 15:54:20'
                isMe={true}
                isReaded={true}/>
            
        </section>
    );


export default Home;
