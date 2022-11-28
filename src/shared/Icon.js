import React from "react";
import Svg, { Path, Circle, Polygon, Rect } from "react-native-svg";
import iconConfig from "../constants/icon/index";

export default Icon = ({ source, name, ...rest }) => {
	const config = iconConfig[source][name];
	return (
		<Svg
			{...config.svg}
			style={{ ...rest.style }}
			width={rest.width || config.svg.width}
			height={rest.height || config.svg.height}
		>
			{config.circle
				? config.circle.map((circle, key) => {
						return <Circle {...circle} key={key} />;
				  })
				: null}
			{config.rect
				? config.rect.map((rect, index) => {
						return <Rect {...rect} key={index} />;
				  })
				: null}
			{config.path
				? config.path.map(path => {
						const pathConfig = path.stroke
							? { ...path, stroke: rest.fill }
							: { ...path, ...rest };
						return <Path {...pathConfig} key={path.d} />;
				  })
				: null}
			{config.polygon
				? config.polygon.map(polygon => {
						return <Polygon {...polygon} key={polygon.points} />;
				  })
				: null}
		</Svg>
	);
};
