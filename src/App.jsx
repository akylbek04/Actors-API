import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { Spinner, Navbar, NavbarBrand, UncontrolledCarousel } from "reactstrap";
import { ActorsList } from "./components/Actors/ActorsList";
import DropdownComponent from './components/Dropdown/DropdownComponent'

export default class App extends React.Component{
  constructor(){
    super();
    this.state = {
      isLoading: true ,
      actors: [],
      filteredData :[],
      filteredParam: '' 
    }
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.fetchData()
    }, 2000)
  }

  fetchData = async () => {
      const res = await fetch(
        "https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en"
      );
      const data = await res.json();
      console.log(data.results)
      this.setState({actors : data.results, isLoading: false})

  }
    

  handleFilter = (filteredParam) => {
    this.setState(prevState => {
      return({
        ...prevState,
        filteredParam: filteredParam
      })
    })
    // const { actors } = this.state;
    // let filtered;

    // if(param === 'female'){
    //   filtered = actors.filter(actor => actor.gender === 1);

    // } else if(param === 'male'){
    //   filtered = actors.filter(actor => actor.gender === 2);

    // } else {
    //   filtered = actors.sort((a,b) => a.popularity - b.popularity);
    // }

    // this.setState({filteredData: filtered});
  }


  render(){
    const { isLoading, actors, filteredParam } = this.state;

    let filtered = actors;
    if (filteredParam === "female") {
      filtered = actors.filter((actor) => actor.gender === 1);
    } else if (filteredParam === "male") {
      filtered = actors.filter((actor) => actor.gender === 2);
    } else {
      const copy = [...actors]
      filtered = copy.sort((a, b) => b.popularity - a.popularity);
    }
    return (
      <div className="App">
        {isLoading ? (
          <div className="spinner">
            <Spinner className="spinner"></Spinner>
          </div>
        ) : (
          <>
            <Navbar className="navbar  p-0" color="black" dark>
              <NavbarBrand href="/">
                <img
                  className="img-fluid rounded"
                  alt="logo"
                  src="https://w7.pngwing.com/pngs/391/205/png-transparent-performing-arts-theatre-acting-the-arts-theater-miscellaneous-culture-text.png"
                  style={{
                    height: 40,
                    marginRight: "20px",
                  }}
                />
                Actors API
              </NavbarBrand>
              <nav>
                <li className="nav-link">
                  <a>
                    <i className="fa-solid fa-house"></i>Home
                  </a>
                </li>
                <li className="nav-link">
                  <a>
                    <i className="fa-solid fa-heart-circle-plus"></i>Favorites
                  </a>
                </li>
                <li className="nav-link">
                  <a>
                    <i className="fa-solid fa-database"></i>DB
                  </a>
                </li>
              </nav>
              <DropdownComponent handleFilter={this.handleFilter} />
            </Navbar>
            <UncontrolledCarousel
              items={[
                {
                  altText: "Slide 1",
                  caption: "Slide 1",
                  key: 1,
                  src: "https://picsum.photos/id/123/1200/600",
                },
                {
                  altText: "Slide 2",
                  caption: "Slide 2",
                  key: 2,
                  src: "https://picsum.photos/id/456/1200/600",
                },
                {
                  altText: "Slide 3",
                  caption: "Slide 3",
                  key: 3,
                  src: "https://picsum.photos/id/678/1200/600",
                },
              ]}
              className="rounded img-fluid mb-5"
            />
        
            <ActorsList data={filtered} />
          </>
        )}
      </div>
    );
  }
}