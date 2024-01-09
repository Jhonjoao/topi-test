import React from 'react';

class filteredItems extends React.Component {
    render() {
        let itens = this.props.items
		return (
            <div className="slds-grid slds-wrap slds-gutters">
                {itens.length !== 0 && (
                    itens.map((item, index) => (                       
                        <ItemMeal item={item} key={index} ></ItemMeal>
                    ))
                )}
            </div>
        )
    }
}

const ItemMeal = (props) => {
    let {strMeal, strMealThumb} = props.item
    return(
        <div className="slds-col slds-size_1-of-6">
            <img  src={strMealThumb} alt="meal-preview" />
            {strMeal}
        </div>
    )
}

export default filteredItems;