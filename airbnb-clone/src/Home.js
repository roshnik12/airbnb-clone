import React from 'react';
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
    return (
        <div className="home">
            <Banner />

            <div className="home__section">
                <Card 
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" 
                title="Unique stays" 
                description="Spaces that are more than just a place to sleep." />
                <Card 
                src="https://i1.wp.com/guidetour.in/wp-content/uploads/2018/01/picture-6962.jpg.jpg?resize=770%2C474&ssl=1"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts." />
                <Card 
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family." />
            </div>
            <div className="home__section">
                <Card  
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="Rs.970/night" />
                <Card  
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="3 Bedroom Flat in Juhu"
                description="Superhost with a stunning view of the beachside in Juhu"
                price="Rs.1130/night" />
                <Card 
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Juhu in Mumbai"
                description="Enjoy the amazing sights of Mumbai with this stunning juhu"
                price="Rs.1350/night" />
            </div>
            
        </div>
    )
}

export default Home;
