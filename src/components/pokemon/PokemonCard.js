import React, { Component } from 'react'
import styled from 'styled-components'
import spinner from './spinner.gif';
import {Link} from 'react-router-dom';

const Sprite = styled.img`
width: 5em;
height: 5em;

`; 

const StyledLink = styled(Link)`

text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

`;




export default class PokemonCard extends Component {
    
    state={
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        manyRequests: false
    };

    componentDidMount(){
        //we extract all the data provided by the props
        const { name, url } = this.props;
        const pokemonIndex = url.split("/")[url.split('/').length - 2 ];
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

        console.log(imageUrl)

        this.setState({
            name:name,
            imageUrl: imageUrl,
            pokemonIndex: pokemonIndex
        });
    }

    render(){
        return (
            <div className="col-md-3 col-sm-6 mb-5">
                <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                <div className="card">
                    
                    <h5 className="card-header">
                        {this.state.pokemonIndex}
                    </h5>
                    {this.state.imageLoading ? (
                        <img src={spinner} style={{width: '5em', height: '5em'}} alt="" className="card-img-top rounded mx-auto d-block mt-2" ></img>
                    ) : null}

                    <Sprite className="card-img-top rounded mx-auto mt-2" src={this.state.imageUrl}
                        onLoad={() => this.setState({imageLoading: false})}
                        onError={() => this.setState({manyRequests: true})}     
                        style={this.state.manyRequests ? {display: 'none'} : this.state.imageLoading ? null : {display : 'block'}}>
                    </Sprite>

                    <div className="card-body mx-auto">
                        <h6 className="card-title">
                            {this.state.name.toLowerCase().split(" ").map(letter=> letter.charAt(0).toUpperCase() + letter.substring(1)).join(' ')}
                        </h6>
                    </div>

                </div>
                </StyledLink>
            </div>
        )

    }

}

