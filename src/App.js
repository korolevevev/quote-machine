import './styles.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [quote, setQuote] = useState({})
    const [color, setColor] = useState('')

    useEffect(() => {
        const randomQuoteUrl = 'https://api.api-ninjas.com/v1/quotes'
        axios.get(randomQuoteUrl, {headers: {'X-Api-Key': 'ry4SdcSy6kH8Q0fmop8GzA==thnt1mGea5JokSCy'}}).then((resp) => {
            setQuote(resp.data[0])
        })
        setColor(getRandomColor)
    }, [])

    const getQuote = () => {
        const randomQuoteUrl = 'https://api.api-ninjas.com/v1/quotes'
        axios.get(randomQuoteUrl, {headers: {'X-Api-Key': 'ry4SdcSy6kH8Q0fmop8GzA==thnt1mGea5JokSCy'}}).then((resp) => {
            setQuote(resp.data[0])
        })
        setColor(getRandomColor)
    }

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div className="App" style={{backgroundColor: color}}>
            <div id="quote-box">
                <div id="text" style={{color: color}}>
                        <svg fill={color} style={{marginRight: '8px', marginBottom: '7px', width: '30px', verticalAlign: 'middle'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.691 6.292C5.094 4.771 7.217 4 10 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 6.925 10H10a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2H3a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789zM20 20h-6a1 1 0 0 1-1-1v-5l.003-2.919c-.009-.111-.199-2.741 1.688-4.789C16.094 4.771 18.217 4 21 4h1v2.819l-.804.161c-1.37.274-2.323.813-2.833 1.604A2.902 2.902 0 0 0 17.925 10H21a1 1 0 0 1 1 1v7c0 1.103-.897 2-2 2z"/>
                        </svg>
                    <span>{quote.quote}</span>
                </div>
                <div id="author" style={{color: color}}>- {quote.author}</div>
                <div className="buttons">
                    <div id="share">
                        <a id="tweet-quote" href="https://twitter.com/intent/tweet">
                            <svg fill={color} width="45px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M20,2H4C2.9,2,2,2.9,2,4v16c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V4C22,2.9,21.1,2,20,2z M17.6,8.8c0,0.1,0,0.2,0,0.4
	c0,3.8-2.9,8.2-8.2,8.2c-1.6,0-3.1-0.5-4.4-1.3c0.2,0,0.5,0,0.7,0c1.3,0,2.6-0.5,3.6-1.2c-1.3,0-2.3-0.9-2.7-2C6.8,12.9,7,13,7.1,13
	c0.3,0,0.5,0,0.8-0.1c-1.3-0.3-2.3-1.4-2.3-2.8l0,0c0.4,0.2,0.8,0.3,1.3,0.4C6.1,9.8,5.6,9,5.6,8c0-0.5,0.1-1,0.4-1.4
	c1.4,1.7,3.5,2.9,5.9,3c0-0.2-0.1-0.4-0.1-0.7c0-1.6,1.3-2.9,2.9-2.9c0.8,0,1.6,0.3,2.1,0.9c0.7-0.1,1.3-0.4,1.8-0.7
	c-0.2,0.7-0.7,1.2-1.3,1.6c0.6-0.1,1.1-0.2,1.7-0.5C18.6,7.9,18.1,8.4,17.6,8.8z"/>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <button id="new-quote" onClick={getQuote} style={{backgroundColor: color}}>New quote</button>
                    </div>
                </div>
            </div>
            <div id="creator">by <a href="https://github.com/korolevevev">korolevevev</a></div>
        </div>
    );
}

export default App;
