import React from 'react';

import Card from '@salesforce/design-system-react/lib/components/card';
import Icon from '@salesforce/design-system-react/lib/components/icon';
import Popover from '@salesforce/design-system-react/lib/components/popover'; 
import Button from '@salesforce/design-system-react/lib/components/button';
import Loading from './Loading';
import axios from 'axios';

class RandomMeal extends React.Component {
    state = {
        meal: {}
    }
    componentDidMount() {
		this.getMeal()
	}

	async getMeal() {
		const meal = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php')

        this.setState({ meal: meal.data.meals[0] })
	}
	render() {
		return (
            <article className="slds-card" style={{ height: '100%' }}>
                 <Card
					id="Card-for-you"
					heading="Choose for You"
					icon={
						<Icon 
							assistiveText={{ label: 'topic' }} 
							name="topic" 
							size="medium" 
						/>
					}
                    empty={
						this.state.meal.length === 0 && (
                            <div className="slds-card__body slds-card__body_inner">
                                <Loading></Loading>
                            </div>  
						)
					}
				>
                    <div className="slds-card__body slds-card__body_inner">
                        
                        <img src={this.state.meal.strMealThumb} alt="recomended-img"></img>
                        <h3 style={{ fontSize: 20 }}>{this.state.meal.strMeal}</h3>
                        <Popover
                            body={<p>{this.state.meal.strInstructions}</p>}
                            heading={
                                <div>
                                    <span> Category: {this.state.meal.strCategory}</span>
                                    <br></br>
                                    <span>Area: {this.state.meal.strArea}</span>
                                </div>
                            }
                            id="popover-heading"
                        >
                            <Button label="More infos" className="slds-m-top_x-small" />
                        </Popover>
                    </div>
                </Card>
            </article>	
		);
	}
}

export default RandomMeal;
