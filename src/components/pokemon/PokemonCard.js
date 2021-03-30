import React, { Component } from 'react'

export default class PPokemonCard extends Component {
    
    state={
        name: '',
        imageUrl: '',
        pokemonIndex: '',
    };

    componentDidMount(){
        //we extract all the data provided by the props
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2 ];
        const imageUrl = `https://github.com/PokeAPI/sprits/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({
            name:name,
            imageUrl: imageUrl,
            pokemonIndex: pokemonIndex
        });
    }

    render(){
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <div className="card">
                    
                    <h5 className="card-header">
                        {this.state.pokemonIndex}
                    </h5>

                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {this.state.name.toLowerCase().split(" ").map(letter=> letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}
                        </h6>
                    </div>

                </div>
            </div>
        )

    }

}

