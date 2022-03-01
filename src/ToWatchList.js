import { Component } from "react";
import videoImg from './video.png';

export class ToWatchList extends Component {
    constructor() {
        super();

        this.state = {
            userInput: "",
            list: [],
        }
    }

    onChangeEvent(e){
        this.setState({userInput: e})
    }

    addMovie(inputMovie) {
        if (inputMovie === "") {
            alert(`Please enter the name of movie you'd like to watch`)
        } 
        else {
        let movieArray = this.state.list;
        movieArray.push(inputMovie);
        this.setState({list: movieArray, userInput: '' });
        }
    }

    watched(event) {
        const li = event.target;
        li.classList.toggle('watched');
    }

    deleteMovies(){
        let movieArray = this.state.list;
        movieArray.length = 0;
        this.setState({list: movieArray})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className="block">
                    <span>
                    <input type="text" 
                    placeholder="Movie to watch" 
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                    <button className="add_btn" onClick={() => this.addMovie(this.state.userInput)}>+</button>
                    </span>
                    <ul>
                        {this.state.list.map((movie, index) => (
                            <li onClick={this.watched} key={index}>
                                <img src={videoImg} className="videoPic" alt="pic"/> {movie}
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => this.deleteMovies(this.state.userInput)} className="delete_btn">Delete All</button>
                </div>
            </form>
        )
    }
} 