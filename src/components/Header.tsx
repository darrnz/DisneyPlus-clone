import React from 'react';
import { Nav, Logo, NavMenu, UserImg } from './Header.styles'


export default function Header() {
    return (
        <Nav>
            <Logo src ='/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src='/images/home-icon.svg' />
                    <span>HOME</span>
                </a>
                <a>
                    <img src='/images/search-icon.svg' />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src='/images/watchlist-icon.svg' />
                    <span>WATCH LIST</span>
                </a>
                <a>
                    <img src='/images/original-icon.svg' />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src='/images/movie-icon.svg' />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src='/images/series-icon.svg' />
                    <span>SERIES</span>
                </a>
            </NavMenu>
            <UserImg src='/cheems.jpg'/>
        </Nav>
    )
}
