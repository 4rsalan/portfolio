import React from 'react';
import ImgCard from '../components/ImgCard';
import ExpCard from '../components/ExpCard';
import NavBar from '../components/NavBar';
import me from '../img/me.jpg'
import placeholder from '../img/placeholder.jpg';
import Box from '@material-ui/core/Box';
import projects from '../docs/projects';
import experience from '../docs/experience'
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Card from '@material-ui/core/Card';
import SimpleTable from "../components/SimpleTable";

const LoadProjects = (data) =>{

    const projects = [];
    for (let i = 0; i < data.length; i++){
        projects.push(<ImgCard
            name={data[i].name}
            date={data[i].date}
            link={data[i].link}
            p1={data[i].p1}
            p2={data[i].p2}
            p3={data[i].p3}
            image={placeholder}
        />)
    }
    return projects;
};

const LoadExperience = data => {
    const experience = [];
    for (let i = 0; i < data.length; i++){
        experience.push(<ExpCard
            title={data[i].title}
            workplace={data[i].workplace}
            location={data[i].location}
            duration={[data[i].location]}
            points={data[i].points}
        />)
    }
    return experience;
};

const App = () => {
    const proj = LoadProjects(projects.Projects);
    const exp = LoadExperience(experience.Experience);

    return (
        <div>
            <NavBar/>
            <div style={boxStyle}>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                >
                    <img alt={"Arsalan Farooqui"} style={avatarStyle} src={me}/>
                    <Typography variant="h2" component="h2">Arsalan Farooqui</Typography>
                    <Card style={cardStyle}>
                        <Typography variant='body2' component='body2' paragraph={true} display='block'>
                            Hey everyone! My name is Arsalan and I'm an aspiring Software Engineer. I'm a graduate of George Brown College's "T127 Computer Programmer Analyst" program
                            with years of programming experience both professionally and as an enthusiast under my belt.
                        </Typography>
                        <Typography variant='body2' component='body2' paragraph={true} display='block'>
                            My passion lies in Mobile and Web App Development doing Full Stack Development work. I enjoy UX and the design process that comes with Front End Development
                            and I love designing backend architecture and developing the application logic that comes with Back End Development. I've worked with plenty of web frameworks such as React and Angular
                            as well as having experience with Android, IOS, and React Native development.
                        </Typography>
                        <Typography variant='body2' component='body2' paragraph={true} display='block'>
                            Outside of programming I like to stay involved with plenty of things to keep me mentally and physically active. I'm a competitive Dragon Boat paddler as well as an avid Soccer fan.
                            Not to much surprise but I love video games and have been playing games like Smash Bros and Monster Hunter since I was a little kid. Sometimes when programming becomes a bit too much, I like
                            to take a break from things and indulge in my hobbies as a way to relax.
                        </Typography>
                    </Card>
                </Box>
            </div>
            <Divider />
            <div style={boxStyle}>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                >
                    <Typography variant="h2" component="h2" >Skills</Typography>
                    <SimpleTable MyStyle={cardStyle}/>
                </Box>
            </div>
            <Divider />
            <div style={boxStyle}>
                <Typography variant="h2" component="h2">Projects</Typography>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="row"
                    flexWrap="wrap"
                    justifyContent="space-around"
                    align-content="space-between"
                    alignItems='center'
                >
                    {proj}
                </Box>
            </div>
            <Divider />
            <div style={boxStyle}>
                <Box
                    width="100%"
                    container="div"
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                    alignItems='center'
                >
                    <Typography variant="h2" component="h2">Experience</Typography>
                    <Card style={expStyle}>
                        {exp}
                    </Card>
                </Box>
            </div>
            <Divider />
        </div>
    );
};

const boxStyle = {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection:"column",
    justifyContent:"center",
};

const cardStyle = {
    width: '80%',
    padding: '2%',
    marginTop: '1%',
    marginBottom: '1%',
};

const expStyle = {
    display: 'flex',
    width: '80%',
    padding: '2%',
    marginTop: '1%',
    marginBottom: '1%',
};

const avatarStyle = {
    borderRadius: '50%',
    width: '100%',
    height: 'auto',
    maxWidth: '20%',
    marginTop: '1%',
};

export default App;
