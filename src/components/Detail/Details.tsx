import React from 'react'
import { Container, Background, ImageTitle, Controls, PlayBtn,
        TrailerBtn, AddBtn, GroupWatchBtn, SubTitle, Description } from './Details.styles'

export default function Details() {
    return (
        <Container>
            <Background >
                <img  src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bao-pixar-animated-short-incredibles-2-interview-8-1529413816.jpg'/>
            </Background>
            <ImageTitle>
                <img src='https://ei.marketwatch.com/Multimedia/2018/04/25/Photos/ZQ/MW-GI015_bao4_20180425183725_ZQ.jpg?uuid=3a3a1772-48d9-11e8-bc3e-ac162d7bc1f7' /> 
            </ImageTitle>
            <Controls >
                <PlayBtn>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>PLAY</span>
                </PlayBtn>
                <TrailerBtn>
                    <img src="/images/play-icon-white.png" alt="" />
                    <span>Trailer</span>
                </TrailerBtn>
                <AddBtn>
                    <span>+</span>
                </AddBtn>
                <GroupWatchBtn>
                    <img src='/images/group-icon.png' />
                </GroupWatchBtn>

            </Controls>
            <SubTitle>
                2018 ° 7m ° Family, Fantasy, Kids, Animation
            </SubTitle>
            <Description>
                Afwefdfsdf fwedfrwef efrwewerfjj kdweodewd dcwewec.
            </Description>
            
        </Container>
    )
}
