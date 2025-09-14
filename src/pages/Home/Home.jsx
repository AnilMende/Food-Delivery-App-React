import React, { useState } from "react";
import './Home.css';
import Header from "../../components/Header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";

const Home = () => {
    
    const [category, setCategory] = useState("All");
    // console.log("category is", category);
    return(
        <div>
            <Header/>
            <ExploreMenu category={category} setCategory={setCategory}/>
        </div>
    )
}

export default Home;