/* eslint-disable react-hooks/exhaustive-deps*/
import { Link, NavLink, Outlet } from "react-router-dom";
import './layout.scss';
import logo from '../assets/image/logo.png';
import { delAllCookie, getCookie } from '../Helpers/Cookie';
import { useDispatch, useSelector } from "react-redux";
import { ReloadHeader } from "../action/Reload";
import { useEffect, useState } from "react";
import { message} from 'antd';
import { searchTopic } from "../Services/TopicService";


export default function Layout() {
  const [search, setSearch] = useState();
  const [dataSearch, setDataSearch] = useState();
  const [messageApi, contextHolder] = message.useMessage();
  const NavActive = (e) => {
    return e.isActive ? 'active' : '';
  }

  const token = getCookie('token');


  const HandleLogout = () => {
    delAllCookie();
    dispatch(ReloadHeader(false));
  }

  const dispatch = useDispatch();
  const Reload = useSelector(state => state.ReloadReducer);
  const handleChange = (e) => {
    console.log(e.target.value);
    let name = e.target.value;
    console.log(name.length);
    if(name.length > 0){
      setSearch(name);
    }else{
      setSearch('@');
    }
  }


  useEffect(() => {

  }, [Reload]);
  useEffect(() => {
    const callApi = async () => {
      const response = await searchTopic(search);
      console.log(response);
      if (search !== '' && response.length > 0) {
        setDataSearch(response);
      } else {
        setDataSearch('')
        if (response.lengt < 0) {
          messageApi.open({
            type: 'error',
            content: 'Không có đề thi này',
            duration: 1
          });
        }
      }
    };
    callApi();
  }, [search])
  return (
    <>
      {contextHolder}
      <div className="layout">
        <header className="layout__header">
          <div className="layout__left">
            <div className="layout__logo">
              <Link to={'/'}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="layout__search">
              <input type="text" placeholder="Tìm kiếm đề thi..." onChange={handleChange} className="layout__search--input"/>
              <div className="layout__search--item">
                {dataSearch  && (
                <ul>
                  {dataSearch.map(item => (
                      <li key={item.id}>
                        <a href={`quiz/${item.id}`} key={item.id}>{item.name}</a>
                      </li>
                  ))}
                </ul>
              )}
              </div>
            </div>
          </div>
          <div className="layout__rigth">
            <div className="layout__menu">
              <ul>
                <li>
                  <NavLink to={'/'} className={NavActive}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={'topic'} className={NavActive}>Topic</NavLink>
                </li>
                <li>
                  <NavLink to={'answers'} className={NavActive}>Answers</NavLink>
                </li>
              </ul>
            </div>
            <div className="layout__account">
              {token ? (
                <Link to={'/'} onClick={HandleLogout} >Logout</Link>
              ) : (
                <Link to={'login'} >Login</Link>
              )}
            </div>
          </div>

        </header>

        <main className="layout__main">
          <Outlet />
        </main>

        <footer className="layout__footer">
          <p>copyright @ 2024 Ngô Văn Hậu</p>
        </footer>
      </div>
    </>
  )
}
