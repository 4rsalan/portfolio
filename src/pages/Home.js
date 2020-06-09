import ImgCard from "../components/ImgCard";
import projects from "../docs/projects";
import NavBar from "../components/NavBar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import React from "react";

const LoadProjects = (data) =>{

    const projects = [];
    for (let i = 0; i < data.length; i++){
        projects.push(<ImgCard
            name={data[i].name}
            date={data[i].date}
            link={data[i].link}
            p1={data[i].p1}
            p2={data[i].p2}
            p3={data[i].p3}/>)
    }
    return projects;
};

const Home = () => {
    const data = projects.Projects;
    const info = LoadProjects(data);

    return (
        <div>
            <NavBar/>
            <Typography variant="h2" component="h2" gutterBottom>About Me</Typography>
            <Divider />
            <Typography variant="h2" component="h2" gutterBottom>Skills</Typography>
            <Box>
                <Typography>Arsalan Farooqui</Typography>
            </Box>
            <Divider />
            <Typography variant="h2" component="h2" gutterBottom>Projects</Typography>
            <div style={boxStyle}>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-around"
                    align-content="space-between"
                >
                    {info}
                </Box>
            </div>
            <Divider />
            <Typography variant="h2" component="h2" gutterBottom>Experience</Typography>
            <Box>
            </Box>
            <Divider />
            <Typography variant="h2" component="h2" gutterBottom>Education</Typography>
            <div style={boxStyle}>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="row"
                    justifyContent="flex-start"
                >
                    <Card>
                        <Typography variant="body1">George Brown College</Typography>
                        <Typography variant="body1">Computer Programmer Analyst</Typography>
                        <Typography variant="body1">GPA: 3.38</Typography>

                    </Card>
                </Box>
            </div>
        </div>
    );
};

const boxStyle = {
    display: 'flex',
    width: '100%'
};

export default Home;
