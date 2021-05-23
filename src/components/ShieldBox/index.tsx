import { ReactNode, useContext } from "react";
import { ShieldContext } from "../../contexts/ShieldContext";

import styles from "./styles.module.scss";

interface ShieldBoxProps {
	children?: ReactNode;
}

function ShieldBox({ children }: ShieldBoxProps) {
	const { shield } = useContext(ShieldContext);

	function handleCopy(str: string) {
		navigator.clipboard.writeText(str);
	}

	const updatedBase64SVG = btoa(
		shield.icon.replace("<svg", `<svg fill="#${shield.iconColor}"`)
	);

	console.log(shield);
	const strUrl = `https://img.shields.io/badge/${shield?.leftText || ""}-${
		shield?.rightText || ""
	}-E4405F?style=for-the-badge&colorA=${
		shield?.leftBackgroundColor || "FFFFFF"
	}&colorB=${
		shield?.rightBackgroundColor || "DDDDDD"
	}&logo=data:image/svg+xml;	base64,${updatedBase64SVG}&logoColor=${
		shield?.iconColor || "000000"
	}&logoWidth=20&link=https://www.instagram.com/guh.saraiva/`;

	return (
		<div
			className={styles.shield_box_container}
			onClick={() => handleCopy(strUrl)}>
			<img style={{ width: "250px" }} src={strUrl} />
		</div>
	);
}

export default ShieldBox;
