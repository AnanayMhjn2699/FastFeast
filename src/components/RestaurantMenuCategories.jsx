import { useState } from "react";
import MenuItemsList from "./MenuItemsList";

const RestaurantMenucategories=(props)=>{
    //console.log(props.data)
    const [isClicked,setIsClicked]=useState(true);
    const handleClick=()=>{
        setIsClicked(!isClicked);
    }
    return (
        <>
        {/* accordian Header */}
            <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold">{props.data?.title} ({props.data?.categories? props.data?.categories.length : props.data?.itemCards.length })</span>
                    <span> 🔽</span>
                </div>
                {/*  accordian body : creating another component for menu items(MenuItemsList) */}
                <div>
                    {isClicked && <MenuItemsList data={(props.data?.itemCards === undefined || props.data?.itemCards === null)? props.data?.categories[0].itemCards : props.data?.itemCards}/>}
                </div>
            </div>
        </>

    );
}
export default RestaurantMenucategories;