import React from 'react'
import PokemonList from '../pokemon/PokemonList'

function Dashboard() {
    return (
        <div>
        <div className="row">
            <div className="col">
                <PokemonList/>
            </div>
        </div>   
        </div>
    )
}

export default Dashboard
