import React from 'react';
 
import Card from '@salesforce/design-system-react/lib/components/card';
import { Icon, Radio, VisualPicker } from '@salesforce/design-system-react';

class Categories extends React.Component {
    render(){
        return(
            <div className="slds-grid slds-grid_vertical">
                <Card
                    id="CategoriesCard"
                    // filter={
                    // 	(!isEmpty || this.state.isFiltering) && (
                    // 		<CardFilter onChange={this.handleFilterChange} />
                    // 	)
                    // }
                    heading="Categorias"
                    icon={
                        <Icon
                            assistiveText={{ label: 'Category' }} 
                            category="standard" 
                            name="category" 
                            size="small" 
                            colorVariant="default"
                        />
                    }
                    // empty={
                    // 	isEmpty ? (
                    // 		<CardEmpty heading="No Related Items">
                    // 			<Button label="Add Item" onClick={this.handleAddItem} />
                    // 		</CardEmpty>
                    // 	) : null
                    // }
                >
                    <VisualPicker
                        label="Filtre por categoria"
                        id="visual-picker-coverable-radio"
                        className="slds-p-around_medium slds-visual-picker_small"
                        coverable
                    >
                        <Radio
                            labels={{
                                label: 'Category',
                            }}
                            size="medium"
                            id="visual-picker-coverable-radio-1"
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
                                    <img src="https://www.themealdb.com/images/category/vegetarian.png" alt="category" />
                                </div>
                            )}
                        />
                    </VisualPicker>
                </Card>
            </div>
        )
    }
}

export default Categories;
