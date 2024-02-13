import styled from 'styled-components';
import Footer from './Footer';
import Navbar from './Navbar';

const LayoutContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
position: relative;
// outline: 1px solid blue;
`;

const InnerLayoutContainer = styled.div`
max-width: 70%;
`;

function Layout(props: {
    children: React.ReactNode;
} ){
    const {children} = props;
    return ( <LayoutContainer>
        <Navbar />
        <InnerLayoutContainer>
            {children}
            <Footer />
        </InnerLayoutContainer>
    </LayoutContainer>

    )
}
export default Layout;