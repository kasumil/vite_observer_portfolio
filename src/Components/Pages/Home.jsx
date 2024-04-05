import React, { useEffect, useRef } from 'react';
import { TemplateHome } from '../Templates';

const Home = () => {
    const data = [
        {
            AtomTitle: "봄",
            AtomText: "Ut fugiat laborum quis ea do voluptate id exercitation cupidatat aute enim.",
            src: "/spring.jpg",
            alt: "bg1",
            absoluteClass: "left-[20%] top-[40%]",
        },
        {
            AtomTitle: "여름",
            AtomText: "Ut fugiat laborum quis ea do voluptate id exercitation cupidatat aute enim.",
            src: "/summer.jpg",
            alt: "bg1",
            absoluteClass: "right-[20%] top-[40%]",
        },
        {
            AtomTitle: "가을",
            AtomText: "Ut fugiat laborum quis ea do voluptate id exercitation cupidatat aute enim.",
            src: "/fall.jpg",
            alt: "bg1",
            absoluteClass: "left-[20%] top-[40%]",
        },
        {
            AtomTitle: "겨울",
            AtomText: "Ut fugiat laborum quis ea do voluptate id exercitation cupidatat aute enim.",
            src: "/winter.jpg",
            alt: "bg1",
            absoluteClass: "right-[20%] top-[40%]",
        },
    ]

    return (
        <TemplateHome data={data} />
    );
}

export default Home;
