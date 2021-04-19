import React from 'react';
 
import Card from '@salesforce/design-system-react/lib/components/card';
import { Icon, Radio, VisualPicker } from '@salesforce/design-system-react';

import api from '../services/api';
import Loading from './Loading';

class Categories extends React.Component {
    state = {
		categories: [],
    }
    componentDidMount() {
		this.getCategories()
	}

	async getCategories() {
		const categories = await api.get('/categories')

        this.setState({ categories: categories.data })
	}

    render(){
        return(
            <div className="slds-grid slds-grid_vertical">
                <Card
                    id="CategoriesCard"
                    heading="Categories"
                    icon={
                        <Icon
                            assistiveText={{ label: 'Category' }} 
                            category="standard" 
                            name="category" 
                            size="small" 
                            colorVariant="default"
                        />
                    }
                    empty={
						this.state.categories.length === 0 ? (
                            <div className="slds-card__body slds-card__body_inner">
                                <Loading></Loading>
                            </div>  
						) : null
					}
                >
                    <VisualPicker
                        label="Choose one category"
                        id="visual-picker-coverable-radio"
                        className="slds-p-around_medium slds-visual-picker_small"
                        coverable
                    >
                        {this.state.categories.map(category => (
                            <Radio
                                labels={{
                                    label: category.strCategory,
                                }}
                                key={category.idCategory}
                                size="medium"
                                id={`visual-picker-coverable-radio-${category.idCategory}`}
                                onChange={() => this.props.onChangeCategory(category.strCategory)}
                                onRenderVisualPickerSelected={() => (
                                    <Icon
                                        assistiveText={this.props.assistiveText}
                                        category="utility"
                                        name="check"
                                        colorVariant="base"
                                        size="medium"
                                    />
                                )}
                                onRenderVisualPickerNotSelected={() => (
                                    <div>
                                        <img src={category.strCategoryThumb} alt="category" />
                                    </div>
                                )}
                            />
                        ))}
                    </VisualPicker>
                </Card>
            </div>
        )
    }
}

export default Categories;
