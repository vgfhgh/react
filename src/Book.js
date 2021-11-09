import React, {Component} from 'react';

class Book extends Component{
//function Book({title, author, summary, genre, release, isbn}){<h2>title:{title}</h2>}
    render(){
        const title = 'title'
        const author ='quthor'
        const summary = 'summary'
        const genre = 'genre'
        const release ='2021/10/28'
        const isbn = 4

        return (
            <>
                <h2>{title}</h2> 
                <h3>{author}</h3>
                <h3>{summary}</h3>
                <h3>{genre}</h3>
                <h3>{release}</h3>
                <h3>{isbn}</h3>

            </>
        )
    }
}

export default Book;