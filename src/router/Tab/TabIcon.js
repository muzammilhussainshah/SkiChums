import React, { Component, Fragment } from "react";
import { View } from "react-native";
import Icon from "../../shared/Icon";

const defaultFill = "#A2ABCD";
const activeFill = "#ffffff";

class TabIcon extends Component {
	render() {
		const isActive = true;
		const fill = isActive ? activeFill : defaultFill;

		return (
			<Fragment>
				<Icon name={this.props.name} fill={fill} source="tabIcons" />
				{isActive ? (
					<View
						style={{
							backgroundColor: 'transparent',
							width: 5,
							height: 5,
							borderRadius: 2.5,
							marginTop: 5,
							marginBottom: -5
						}}
					/>
				) : null}
			</Fragment>
		);
	}
}

export default TabIcon;
