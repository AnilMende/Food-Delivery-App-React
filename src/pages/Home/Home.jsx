import React, { useState } from "react";
import './Home.css';
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";

const Home = () => {
    
    const [category, setCategory] = useState("All");
    // console.log("category is", category);
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
            <FoodDisplay category={category}/>
        </div>
    )
}

export default Home;