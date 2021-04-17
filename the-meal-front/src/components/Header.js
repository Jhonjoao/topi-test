import React from 'react';

import {
    Dropdown, GlobalHeader, GlobalHeaderHelp, GlobalHeaderSetup, Popover
} from '@salesforce/design-system-react';

const ipsum =
	'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum fermentum eros, vel porta metus dignissim vitae. Fusce finibus sed magna vitae tempus. Suspendisse condimentum, arcu eu viverra vulputate, mauris odio dictum velit, in dictum lorem augue id augue. Proin nec leo convallis, aliquet mi ut, interdum nunc.';


class Header extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			favoritesActionSelected: false,
		};
	}
	render() {
		return (
            <GlobalHeader
					logoSrc="/images/dinner.svg"
					onSkipToContent={() => {
						console.log('>>> Skip to Content Clicked');
					}}
					onSkipToNav={() => {
						console.log('>>> Skip to Nav Clicked');
					}}
				>
                    <Popover
                        body={
                            <div>
                                <h2>The Meals</h2>
                            </div>
                        }
                    />
				
					<GlobalHeaderHelp
						popover={
							<Popover
								ariaLabelledby="help-heading"
								body={
									<div>
										<h2 className="slds-text-heading_small" id="help-heading">
											Help and Training
										</h2>
										{ipsum}
									</div>
								}
								id="header-help-popover-id"
							/>
						}
					/>
					<GlobalHeaderSetup
						dropdown={
							<Dropdown
								id="header-setup-dropdown-id"
								options={[
									{ id: 'setupOptionOne', label: 'Setup Option One' },
									{ id: 'setupOptionTwo', label: 'Setup Option Two' },
								]}
							/>
						}
					/>
				</GlobalHeader>
        );
	}
};

export default Header;