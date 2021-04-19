import React, { useState } from 'react';

import Header from '../components/Header';
import Meals from '../components/Meals';
import Categories from '../components/Categories';
import RandomMeal from '../components/RandomMeal';
import FilteredItems from '../components/FilteredMeals';
import axios from 'axios';

export default function Home(){
    const [filteredItems, setFilteredItens] = useState([])
    async function filterCategory(value) {
        const itens = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
        setFilteredItens(itens.data.meals)
    }
    return(
        <div className="slds-box slds-theme_shade" style={{ minHeight: '100vh' }}>
            <div className="slds-builder-header_container">
                <Header></Header>
            </div>
            <div className="slds-grid slds-wrap slds-gutters slds-p-top_xx-large">
                <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-1 slds-large-size_4-of-6">
                    <Categories onChangeCategory={filterCategory}></Categories>
                </div>
                <div className="slds-col slds-size_1-of-1 slds-medium-size_1-of-1 slds-large-size_2-of-6">
                    <RandomMeal></RandomMeal>
                </div>
            </div>
            <div className="slds-grid slds-p-top_medium">
                <FilteredItems items={filteredItems} ></FilteredItems>
            </div>
            <div className="slds-grid slds-p-top_medium">
                <div className="slds-col slds-size_4-of-4">
                    <article>
                        <Meals></Meals>
                    </article>
                </div>
            </div>
            
        </div>
    )
}