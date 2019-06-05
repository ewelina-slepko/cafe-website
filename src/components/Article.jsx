import React from 'react'

const Article = ({ img, title, author, text }) => {

    const styles = {
        marginTop: 50
    }

    return (
        <article style={styles}>
            <img src={img} alt={img} />
            <h1>{title}</h1>
            <span>{author}</span>
            <p>{text}</p>
        </article>
    );
}

export default Article;
