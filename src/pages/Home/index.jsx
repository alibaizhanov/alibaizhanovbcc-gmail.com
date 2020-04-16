import React from 'react';

import {Message} from 'components'
import './Home.scss'

const Home = () => (

        <section className = "home">

             <Message 
                avatar = "https://sun9-35.userapi.com/c627724/v627724488/c494/j2lafv0ysJ0.jpg?ava=1" 
                text = "Добрый день , не получается сделать время отправки. В консоле пишет , что модулю не найден. Попробовал сделать formatDistanceToNow на странице выводится RangeError: Invalid time value" 
                date='Wed Feb 12 2020 16:54:20'
                attachments={[
                    {
                        filename:"image.jpg",
                        url:'https://source.unsplash.com/100x100/?random=1&nature,water',
                    },
                    {
                        filename:"image.jpg",
                        url:'https://source.unsplash.com/100x100/?random=2&nature,water',
                    },
                    {
                        filename:"image.jpg",
                        url:'https://source.unsplash.com/100x100/?random=3&nature,water',
                    }
                ]}/> 
             <Message 
                avatar = "https://sun9-35.userapi.com/c627724/v627724488/c494/j2lafv0ysJ0.jpg?ava=1" 
                text = "Добрый день , не получается сделать время отправки. В консоле пишет , что модулю не найден. Попробовал сделать formatDistanceToNow на странице выводится RangeError: Invalid time value" 
                date='Wed Feb 26 2020 15:54:20'
                isMe={true}
                isReaded={false}
                />
            
        </section>
    );


export default Home;
