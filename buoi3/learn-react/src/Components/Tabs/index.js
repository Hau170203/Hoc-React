import { useEffect, useState } from 'react';
import './Tab.scss';



function Tabs() {

    const [data, setData] = useState([]);
    const [tab, setTab] = useState(`products`)

    useEffect(() => {
        fetch(`https://dummyjson.com/${tab}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setData(data[tab])
            })
    },[tab])

    const HandleClick = (e) =>{
        console.log(e)
        setTab(e)
    }
    return (
        <>
            <div className="tab">
                <div className="tab__Header">
                    <div className="tab__Products" onClick={() => HandleClick('products')}>Products</div>
                    <div className="tab__User" onClick={() => HandleClick('users')}>User</div>
                    <div className="tab__Posts" onClick={() => HandleClick('posts')}>Posts</div>
                </div>
                <div className="tab__Content">
                    <ul>
                        {data.map((item) =>(
                            <li key={item.id}>{item.title || `${item.firstName} ${item.lastName}` }</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Tabs;