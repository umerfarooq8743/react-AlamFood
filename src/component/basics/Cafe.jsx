import React , {useState} from 'react';
import'./style.css';
import Menu from './MenuApi.jsx';
import MenuCard from './MenuCard';
import Navbar from './Navbar';



const uniqueList=[...new Set(Menu.map((curElem)=>{
    return curElem.category;
})),"All",
];

const Cafe = () => {
    const[menuData,setMenuData]=useState(Menu);
    const[menuList,setMenuList]=useState(uniqueList);
    const filterItem=(category)=>{
        if(category==="All"){
        setMenuData(Menu);
        return;
    }
        const updatedList=Menu.filter((curElem)=>   {
            return curElem.category===category;
        });
        setMenuData(updatedList);
    };
  return (
    <>
    <div className='head'>Alam Caters</div>
    <hr />
    <Navbar filterItem={filterItem } menuList={menuList}/>
    <MenuCard menuData={menuData}/>
    </>
  )
}

export default Cafe
