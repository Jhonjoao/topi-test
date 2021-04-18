import React from 'react';

import Card from '@salesforce/design-system-react/lib/components/card';
import CardEmpty from '@salesforce/design-system-react/lib/components/card/empty';
import CardFilter from '@salesforce/design-system-react/lib/components/card/filter';
import DataTable from '@salesforce/design-system-react/lib/components/data-table';
import DataTableColumn from '@salesforce/design-system-react/lib/components/data-table/column';
import Icon from '@salesforce/design-system-react/lib/components/icon';

import api from '../services/api';

class Meals extends React.Component {
	state = {
		items: [],
		isFiltering: false,
		loadingItens: false,
		hasMore: true,
		total: 0
	};

	isLoading = false;
	page = 1;

	componentDidMount() {
		this.getItems()
	}

	async getItems() {
		this.setState({ loadingItens: true })
		return api.get('/list-meals', {
			params: { page: this.page }
		}).then((res) => {
			const items = this.state.items.concat(res.data);
			this.setState({ items: items, total: res.headers['x-total-count'] })
			if(this.state.items.length >= res.headers['x-total-count']){
				return this.setState({ loadingItens: false, hasMore: false })
			}
			return this.setState({ loadingItens: false, hasMore: true  })
		})
	}

	handleFilterChange = (event) => {
		if(event.target.value === ''){
			this.setState({ items: [] })
			return this.getItems()
		}
		const filteredItems = this.state.items.filter((item) =>
			RegExp(event.target.value, 'i').test(item.strMeal)
		);
		this.setState({ isFiltering: true, items: filteredItems, hasMore: false, });
	};

	handleLoadMore = () => {
		if (!this.isLoading) {
			this.page += 1 
			this.getItems().then(() => {
				this.isLoading = false;

			})
		}
		this.isLoading = true;
	};

	handleChanged = () => {
		console.log('handleChanged')
	}
	handleSort = () => {
		console.log('handleSort')

	}

	render() {
		const isEmpty = this.state.items.length === 0;

		return (
			<div className="slds-grid slds-grid_vertical">
				<Card
					id="ExampleCard"
					filter={
						(!isEmpty || this.state.isFiltering) && (
							<CardFilter onChange={this.handleFilterChange} />
						)
					}
					heading="Refeições"
					icon={
						<Icon 
							assistiveText={{ label: 'food_and_drink' }} 
							category="utility" 
							name="food_and_drink" 
							size="medium" 
						/>
					}
					empty={
						isEmpty ? (
							<CardEmpty heading="Nenhum item encontrado"></CardEmpty>
						) : null
					}
					footer={`${this.state.items.length} de ${this.state.total}`}

				>
					<div
						style={{
							height: '300px',
						}}
					>
						<DataTable 
							items={this.state.items}  
							id="meal-table"
							fixedHeader
							fixedLayout
							hasMore={this.state.hasMore}
							onLoadMore={this.handleLoadMore}
						>
							<DataTableColumn
								label="Nome"
								property="strMeal"
								truncate
							/>
						</DataTable>
					</div>
				</Card>
			</div>
		);
	}
};
 
export default Meals;
