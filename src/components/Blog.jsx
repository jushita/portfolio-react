import React, { Component } from 'react';


const Blog = () => {
    return (
        <>
            <div className="blog__container">
                <div className="headline headline__container">
                    Photo Blog
                </div>
                <p className="desc description">
                    I love nature and art. I enjoy travelling, hiking and exploring unique places. Here are some
                    pictures from my recent travels.
                    </p>
                <div>
                    <section className="cards">
                        <article className="card">
                            <img className="article-img" src="/assets/1.png" alt=" " />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/2.png" alt=" " />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/3.png" alt=" " />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/4.png" alt=" " />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/5.png" alt=" " />

                        </article>
                        <article className="card">
                            <img className="article-img" src="/assets/6.png" alt=" " />

                        </article>
                    </section>
                </div>
            </div>
        </>
    );
};


export default Blog;