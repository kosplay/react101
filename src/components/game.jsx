import React, { Component } from 'react';

class Game extends Component {
    state = {
        selectedCountry: null,
        wrongCountry: null,
        wrongCapital: null,
        countries: this.shuffleArray(Object.keys(this.props.data)),
        capitals: this.shuffleArray(Object.values(this.props.data))
    } 

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    render() { 
        if(this.state.countries.length === 0) {
            return (
                <p>Congratulations!</p>
            )
        }

        // bad styling
        return (
            <div>
                {this.state.countries.map(c => <button style={this.state.selectedCountry === c ? {backgroundColor: 'blue'} : (this.state.wrongCountry === c) ? {backgroundColor: 'red'} : null} key={c} onClick={() => this.handleSelectCountry(c)} className='country'>{c}</button>)}
                {this.state.capitals.map(c => <button key={c} onClick={()=> this.handleSelectCapital(c)} style={(this.state.wrongCapital === c) ? {backgroundColor: 'red'} : null} className='capital'>{c}</button>)}
            </div>
        );
    }

    handleSelectCountry(country) {
        this.setState({
            selectedCountry: country,
            wrongCountry: null,
            wrongCapital: null,
        })
    }

    handleSelectCapital(capital) {
        if (capital === this.props.data[this.state.selectedCountry]) {
            // correct, delete them
            this.setState({
                selectedCountry: null,
                wrongCountry: null,
                wrongCapital: null,
                countries: this.state.countries.filter(c => c!==this.state.selectedCountry),
                capitals: this.state.capitals.filter(c => c!==capital)
            })
        } else {
            // mark them red, remove selectedCountry
            this.setState({
                selectedCountry: null,
                wrongCountry: this.state.selectedCountry,
                wrongCapital: capital
            })
        }

    }
}
 
export default Game;