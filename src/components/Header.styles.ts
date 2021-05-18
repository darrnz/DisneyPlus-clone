import styled from 'styled-components'

export const Nav = styled.nav`
    heigth: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 2px 36px;
    overflow-x: hidden;
`

export const Logo = styled.img `
    width: 80px;
    
`
//flex:1 le da prioridad sobre el resto de los elementos dentro del padre
//posicion absoluta tiene que ir en relaciona a algo
export const NavMenu = styled.div`
    display: flex;
    flex: 1; 
    margin-left: 25px;
    align-items: center;
    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after {
                content: '';
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
export const UserImg = styled.img`
    height: 50px;
    width: 50px;
    border-radius: 50px;
    cursor: pointer;
`