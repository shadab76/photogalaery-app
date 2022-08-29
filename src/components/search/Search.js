import React, { Component } from 'react';
import TextField from 'material-ui/TextField';    
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import axios from 'axios';
import ImageResult from '../imageResults/ImageResult';

class Search extends Component {
    
    state = {
        searchText: '',
        amout: '',
        apiUrl: 'https://pixabay.com/api/',
        apiKey: '26570775-6daab5ff524ad66d9ec104dd1',
        images: []
    }
    onTextChange = e => {
        console.log(e.target.value)
        this.setState({[e.target.name] : e.target.value},() => {
            axios.get(`${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amout}&safesearch=true`)
            .then(res => this.setState({images: res.data.hits}))
            .catch(err => console.log(err));
        })
    }

    onAmountChange = (e,index,value) => this.setState({amout:value});

    render() {
        return (
            <div className='container'>
                <TextField
                    name='searchText'
                    value={this.state.searchText}
                    onChange={this.onTextChange}
                    floatingLabelText="search for images"
                    fullWidth={true}
                />

                <SelectField
                    labelId="amout"
                    id="Amout"
                    value={this.state.amout}
                    label="Amout"
                    onChange={this.onAmountChange}
                >
                    <MenuItem value={5} secondaryText="5" />                  
                    <MenuItem value={10} secondaryText="10" />
                    <MenuItem value={15} secondaryText="15" />
                    <MenuItem value={30} secondaryText="30" />                  
                    <MenuItem value={50} secondaryText="50" />
                    <MenuItem value={60} secondaryText="60" />
                    <MenuItem value={200} secondaryText="200" />
                </SelectField>
                <br />
                {this.state.images.length > 0 ? (<ImageResult images={this.state.images} download={this.state.download}/>) : <h1>Images not Found</h1>}
            </div>
        );
    }
}

export default Search;
