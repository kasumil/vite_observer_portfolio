import React, { useEffect, useRef } from 'react';
import { OrganismBgTitle } from '../../Organisms';

const Index = ({ data }) => {
    const divWrap = useRef(null);

    useEffect(()=> {
        const observer = new IntersectionObserver((element) => {
            element.forEach((entry) => {
                if(entry.isIntersecting){
                    entry.target.children[0].children[0].children[0].classList.add("active");
                }else{
                    entry.target.children[0].children[0].children[0].classList.remove('active');
                }
            })
        }, { threshold : 0.2 });

        const children = divWrap.current.children;
        for (let i = 0; i < children.length; i++) {
            observer.observe(children[i]);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={divWrap}>
            {data && data.length > 0 && data?.map((item)=> {
                    return (
                        <OrganismBgTitle
                            AtomTitle={item.AtomTitle}
                            AtomText={item.AtomText}
                            src={item.src}
                            alt={item.alt}
                            absoluteClass={item.absoluteClass}
                        />
                    );
                })
            }
            
        </div>
    );
}

export default Index;

