import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Imgcard from './Imgcard';
import '../index.css'

const Homepage = () => {
    const [search, setSearch] = useState('');
    const [data,setData]=useState([]);
    const changer = e => {
        setSearch(e.target.value)
    }
    useEffect(() => {
        axios('https://api.coinstats.app/public/v1/coins?skip=0&limit=20').then(res =>setData(res.data.coins))
    }, [])
    return (
        <>
        <div>
            <center>
                <h1>Crypto tracker</h1>
                <input placeholder="search Crypto Here!" value={search} onChange={changer} />
            </center>
        </div>
        { data.length>0 &&
        <div>{data.filter(crypto=>crypto.name.toLowerCase().includes(search.toLowerCase()))
            .map(crypto=>
           <div className="card">
            <Imgcard name={crypto.name} price={crypto.price} icon={crypto.icon}/>
           </div> )}
        </div>
        }
        </>
    )
}

export default Homepage