import React from 'react';

import Header from '../components/Header';
import Cards from '../components/Cards';
import Categories from '../components/Categories';

export default function Home(){
    return(
        <div className="slds-box slds-theme_shade">
            <div className="slds-builder-header_container">
                <Header></Header>
            </div>
            <div className="slds-p-top_xx-large">            
                <Categories></Categories>
            </div>
            <div className="slds-grid slds-gutters slds-p-top_medium">
                <div className="slds-col slds-size_1-of-2">
                    <article>
                        <Cards></Cards>
                    </article>
                </div>
                <div className="slds-col">
                    <span>2</span>
                </div>
            </div>
            
        </div>
    )
}