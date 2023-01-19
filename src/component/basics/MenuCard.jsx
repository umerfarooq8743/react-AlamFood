import React from 'react'

const MenuCard = ({menuData}) => {
  return (
    <>
    <section className='main-card--cointainer'>
    {menuData.map((curElem)=>{
        const{ id,name,description,price,image,category}=curElem;
        return(
            <>
            <div className="card-container" key={id}>
            <div className="card">
                <div className="card-body">
                    <span className="card-number card-circle subtle">
                    {id}
                    </span>
                    <span className="card-author subtle">{category}</span>
                    <h2 className='card-title'>{name} </h2>
                    <span className='card-description subtle'>
                    {description}
                    </span>
                    <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className='card-media' />
                <div className="row">
                <span className='card-tag subtle'>  {price} Order Now</span>
                </div>
            </div>
        </div>
       
        </>
        )
    })}
    </section>
    </>
  )
}

export default MenuCard