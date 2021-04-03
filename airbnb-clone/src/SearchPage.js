import React from 'react';
import "./SearchPage.css";
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
            <p>62 stays · 02 march to 08 march · 2 guest</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>
            <SearchResult  img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Private room in Mumbai"
                title="Luxurious rooms available in Kalaghoda"
                description="3 guests · 1 bedroom · 3 beds · 1 shared bathroom · Wifi · Air conditioning · Free parking · Washing Machine"
                star={4.73}
                price="Rs.950 / night"
                total="Rs.1117 total"/>

<SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Private room in Mumbai"
                title="Luxurious and beautiful rooms in Juhu"
                description="2 guest · 1 bedroom · 4 bed · 1 shared bthroom · Wifi · Kitchen"
                star={4.3}
                price="Rs.1140 / night"
                total="Rs.1440 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Entire flat in Mummbai"
                title="The Lit Room"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="Rs.835 / night"
                total="Rs.1350 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Entire flat in Mumbai"
                title="Brillient 1BHK Apartment in Pali!"
                description="1 guest · 1 bedroom · 1 bed · 1 shared bthroom · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="Rs.1255 / night"
                total="Rs.2936 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in Mumbai"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="Rs.960 / night"
                total="Rs.1450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in Mumbai"
                title="Paradise in Mumbai with Lake and Forest View"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="Rs.965 / night"
                total="Rs2480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in Mumbai"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="Rs.1190 / night"
                total="Rs.2650 total"
            />
        </div>
    )
}

export default SearchPage;

