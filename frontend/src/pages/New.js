import React, { Component } from 'react';

import './New.css';

class New extends Component {
    state = {
        image: null,
        author: '',
        place: '',
        description: '',
        hashtags: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        console.log(this.state);
    }

    handleImageChange = event => {
        this.setState( {image: event.target.files[0]} );
    }

    handleChange = event => {
        this.setState( {[event.target.name]: event.target.value} );
    }

    render() {
        return (
            <form id='new-post' onSubmit={this.handleSubmit}>
                <input type='file' onChange={this.handleImageChange} />

                <input 
                    type='text'
                    name='author'
                    placeholder='Autor'
                    onChange={this.handleChange}
                    value={this.state.author}
                />

                <input 
                    type='text'
                    name='place'
                    placeholder='Local'
                    onChange={this.handleChange}
                    value={this.state.place}
                />


                <input 
                    type='text'
                    name='description'
                    placeholder='Descrição'
                    onChange={this.handleChange}
                    value={this.state.description}
                />

                <input 
                    type='text'
                    name='hashtags'
                    placeholder='Hashtags'
                    onChange={this.handleChange}
                    value={this.state.hashtags}
                />

                <button type='submit'>Enviar</button>
            </form>
        )
    }
}

export default New;
