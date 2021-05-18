import React from 'react'
import { Container, CTA, CTALogoOne, CTALogoTwo, SignUp, Description } from './Login.styles'

export default function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src='/images/cta-logo-one.svg' />
                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus leo nulla, blandit nec aliquet in, vulputate at 
                    sapien. Vestibulum aliquet enim turpis, sed tempus eros 
                    sagittis eu. 
                </Description>
                <CTALogoTwo src='/images/cta-logo-two.png' />
            </CTA>
        </Container>
    )
}
