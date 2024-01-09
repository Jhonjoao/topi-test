import React from 'react';

import Card from '@salesforce/design-system-react/lib/components/card';
import CardEmpty from '@salesforce/design-system-react/lib/components/card/empty';
import CardFilter from '@salesforce/design-system-react/lib/components/card/filter';
import DataTable from '@salesforce/design-system-react/lib/components/data-table';
import DataTableColumn from '@salesforce/design-system-react/lib/components/data-table/column';
import DataTableCell from '@salesforce/design-system-react/lib/components/data-table/cell';
import Icon from '@salesforce/design-system-react/lib/components/icon';
import { Link } from 'react-router-dom';

import ModalDetails from './ModalDetails';
import api from '../services/api';

const CustomDataTableCell = ({ children, ...props }) => (
	<DataTableCell {...props}>
		<Link
			to="#"
			onClick={(event) => {
				props.openModal(props.item)
				event.preventDefault();
			}}
		>
			{children}
		</Link>
	</DataTableCell>
);
CustomDataTableCell.displayName = DataTableCell.displayName;

class Meals extends React.Component {
	state = {
		items: [],
		isFiltering: false,
		loadingItens: false,
		hasMore: true,
		total: 0,
		isOpen: false,
		selectedMeal: '',
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

	toggleOpen = (item) => {
		this.setState({ isOpen: !this.state.isOpen, selectedMeal: item });
	};
	render() {
		const isEmpty = this.state.items.length === 0;

		return (
			<div className="slds-grid slds-grid_vertical">
				<ModalDetails 
					isOpen={this.state.isOpen} 
					toggleOpen={this.toggleOpen} 
					meal={this.state.selectedMeal}
				></ModalDetails>
				<Card
					id="ExampleCard"
					filter={
						(!isEmpty || this.state.isFiltering) && (
							<CardFilter onChange={this.handleFilterChange} />
						)
					}
					heading="All Meals"
					icon={
						<Icon 
							assistiveText={{ label: 'all' }} 
							name="all" 
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
							key="idMeal"
						>
							<DataTableColumn
								label="Name"
								property="strMeal"
								primaryColumn
							>
								<CustomDataTableCell openModal={this.toggleOpen} />
							</DataTableColumn>
							<DataTableColumn
								label="Category"
								property="strCategory"
							/>
							<DataTableColumn
								label="Area"
								property="strArea"
							/>
						</DataTable>
					</div>
				</Card>
			</div>
		);
	}
};
 
export default Meals;
