import React from 'react';
import { AtomBg, AtomText, AtomTitle } from '../../Atoms';
import { MoleculeWrapRelative } from '../../Molecules';

const Index = (props) => {
    return (
        <div>
            <AtomBg
                src={props.src}
                alt={props.alt}
                hegight={"min-h-lvh"}
            >
                <div className={`section`}>
                    <MoleculeWrapRelative absoluteClass={props.absoluteClass}>
                        <div className={`flex flex-col gap-4 justify-center items-center h-full rounded-xl p-5 relative}`}>
                            <div className="background-overlay"></div>
                            <AtomTitle>
                                {props.AtomTitle}
                            </AtomTitle>
                            <AtomText>
                                {props.AtomText}
                            </AtomText>
                        </div>
                    </MoleculeWrapRelative>
                </div>
            </AtomBg>

        </div>
    );
}

export default Index;
