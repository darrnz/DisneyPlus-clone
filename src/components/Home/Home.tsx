import React from 'react'
import { Container } from './Home.styles'
import ImgSlider from './ImgSlider/ImgSlider'
import Movies from './Movies/Movies'
import Viewers from './Viewers/Viewers'

export default function Home() {
    return (
        <>
            <Container>
                <ImgSlider />
                <Viewers />
                <Movies />
            </Container>
        </>
    )
}
