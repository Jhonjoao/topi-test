import React from 'react';

import Modal from '@salesforce/design-system-react/lib/components/modal'; 
import { Button } from '@salesforce/design-system-react';

class ModalDetails extends React.Component {
	render() {
        let meal = this.props.meal
		return (
			<div>
                <Modal
                    isOpen={this.props.isOpen}
                    onRequestClose={() => this.props.toggleOpen('')}
                    heading={meal.strMeal}
                    ariaHideApp={false}
                >
                    <section className="slds-p-around_large">
                        <div className="slds-form-element slds-m-bottom_large">
                           <span>Category: {meal.strCategory}</span>
                           <br/>
                           <span>Area: {meal.strArea}</span>
                           <img src={meal.strMealThumb} alt={meal.strArea} />
                           <p>
                               {meal.strInstructions}
                           </p>
                           <Button onClick={ () => window.open(meal.strYoutube) }>Youtube</Button>
                        </div>
                        <div className="slds-form-element slds-m-bottom_large">
                            <span>Tags: {meal.strTags}</span>
                        </div>
                    </section>
                </Modal>
            </div>
		);
	}
}

export default ModalDetails;
