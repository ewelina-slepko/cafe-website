import React from 'react'

const Article = ({ img, title, author, text }) => {

    const styles = {
        marginTop: 50,
    }

    return (
        <article style={styles}>
            <img style={{
                width: "50vh",
                height: "40vh"
            }} src={img} alt={img} />

            <h1 style={{
                textTransform: "uppercase",
                marginBottom: 3
            }}>{title}</h1>

            <span style={{
                display: "block",
                marginBottom: 10,
                fontSize: 14
            }}>{author}</span>

            <p style={{
                fontSize: 16,
            }}>{text}</p>
        </article>
    );
}

export default Article;
