import { useState } from "react";
import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";

const Nav = styled.nav`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
`;
const NavLinks = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 3em;
`;

const NavLink = styled.a<{$active: boolean}>`
font-size: 18px;
color: ${ props => props.$active ? '#767676' : '#333333'};
font-weight: 500;
cursor: pointer;
`;

const NavDownloadButton = styled(DownloadBtn)`
margin-right: 3em;
`

const Logo = styled.h2`
font-size: 24px;
color: #333333;
`;

function Navbar(){
    const [activeLink, setActiveLink] = useState('Tour');
    const linkTitles = ['Overview', 'Examples', 'Tour', 'Blog', 'Help'];
    return ( <Nav>
        <Logo>Lobe</Logo>
        <NavLinks>
            {linkTitles.map((title: string, idx: number) => {
                return (<NavLink key={idx} $active={title === activeLink} onClick={() => setActiveLink}>
                    {title}
                </NavLink>)
            })}
        </NavLinks>
        <DownloadBtn />
    </Nav>

    )

}
export default Navbar