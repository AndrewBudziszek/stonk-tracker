import React, { useState, useEffect } from 'react'
import axios from 'axios';

const Ayyyyy = () => {
    const [isUp, setIsUp] = useState(true);
    const [timeIntervals, setTimeIntervals] = useState([]);
    const [stockPrices, setStockPrices] = useState([]);
    const [gotData, setGotData] = useState(false);

    const apikey = process.env.REACT_APP_AV_API_KEY;
    const stockSymbol = process.env.REACT_APP_STOCK_SYMBOL;

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stockSymbol}&interval=5min&apikey=${apikey}`).then(response => {
                const timeIntervalsData = Object.keys(response.data["Time Series (5min)"]);
                const stockPricesData = [];

                for (var i = 0; i < timeIntervalsData.length; i++) {
                    stockPricesData[i] = response.data["Time Series (5min)"][timeIntervalsData[i]]["4. close"];
                }

                setIsUp(stockPrices[stockPrices.length - 1] >= stockPrices[0])
                setTimeIntervals(timeIntervalsData);
                setStockPrices(stockPricesData);
                setGotData(true);
            }).catch(error => {
                console.error(error)
            })
        }
        fetchData();
    }, [!gotData])

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    })


    return (
        <div className='ayyyyy'>
            <h1>Is ${stockSymbol} up?</h1>
            <h1>{isUp ? "🟢📈🟢" : "🔴📉🔴"}</h1>
            <h2>{isUp ? "🌙🚀TO THA MOON!🚀🌙" : "🙌💎Diamond Hands💎🙌"}</h2>
            <h2 style={{
                color: isUp ? 'green' : 'red'
            }}>{formatter.format(stockPrices[0])}</h2>
            <h3>{isUp ? "(it's up)" : "(it's down)"}</h3>
        </div>
    )
}
export default Ayyyyy

