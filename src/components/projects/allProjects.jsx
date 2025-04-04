import React, { useEffect, useState } from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const AllProjects = () => {
	const username = "Sompal4549";
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		fetch(`https://api.github.com/users/${username}/repos`)
			.then((response) => response.json())
			.then((repos) => {
				// Process and display your repositories
				setProjects(repos);
			})
			.catch((error) => console.error("Error fetching repos:", error));
	}, []);

	return (
		<div className="all-projects-container">
			{projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
