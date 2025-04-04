import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C510BAQGnSHf-htBtxA/company-logo_200_200/company-logo_200_200/0/1630610714444/qwerty_thoughts_logo?e=1749081600&v=beta&t=062dPqP_Vh9zLY08NfQZBduv8UecZaPaTttibs5BX4M"
								alt="qwerty_thoughts"
								className="work-image"
							/>
							<div className="work-title">Qwerty Thoughts</div>
							<div className="work-subtitle">
								Associate React.js Developer
							</div>
							<div className="work-duration">2022 - 2025</div>
						</div>

						{/* <div className="work">
							<img
								src="./twitter.png"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Twitter</div>
							<div className="work-subtitle">
								Software Engineer
							</div>
							<div className="work-duration">2019 - Present</div>
						</div> */}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
