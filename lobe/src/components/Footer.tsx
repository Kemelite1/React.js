import styled from "styled-components";
import DownloadBtn from "./DownloadBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
bottom: 0;
left: 0;
right: 0;
top: 100%;
width: inherit;
`;

const CallToAction = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
margin-bottom: 3em;
`;

const CallToActionText = styled.h1`
font-size: 3.5em;
font-weight: 900;
width: 70%;
color: #;
`;

const Hr = styled.hr`
bacground-color: #767676;
width: 60%;
height: 1px;
margin-bottom: 3em;
`;

const FooterBottom = styled.div`
display: flex;
align-items: flex-start;
justify-content: space-between;
width: 60%;
`;

const FooterColumnHeader = styled.div`
font-size: 1.5em;
font-weight: 700;
color: #333333;
margin-bottom: 0.3em;
`;

const FooterColumn = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1em;
`;

const FooterColumnLink = styled.div`
text-decoration: none;
cursor: pointer;
`;

const SocialMedialinks = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
gap: 1em;
margin-top: 2em;
margin-left: 2em;

`;

const SocialMediaLink = styled.a`
display: flex;
align-items: center;
justify-content: center;
background-color: #04ddb2;
border-radius: 100%;
width: 3em;
height: 3em;
color: #fff;
cursor: pointer;
`;

function Footer(){
    const columnData = [
        {title: 'About', links: ['Download',  'Overview', 'Examples', 'Blog']},
        {title: 'General', links: ['Notice',  'License', 'Press Inquiry', 'Press Images']},
        {title: 'Resources', links: [ 'Help', 'Tour',  'Contact', 'Privacy']},
    ];

    const icons = [faComment, faTwitter, faYoutube]
    return (
        <FooterContainer>
            <CallToAction>
            <CallToActionText>Train your app with Lobe</CallToActionText>
            <DownloadBtn />
             </CallToAction> 
            <Hr />
            <FooterBottom>
                <FooterColumn>
                    <FooterColumnHeader style={{marginBottom: '0.3em', }}>Lobe</FooterColumnHeader>
                    <p>
                    A product by Microsoft.
                    <br />
                    <br />
                    All rights reserved.
                    <br />
                    <br />
                    &copy; Microsoft 2021
                    <br />
                    <br />
                    <br />
                    <br />
                    </p>
                </FooterColumn>
                {columnData.map((column, idx: number) => {
                    return (
                        <FooterColumn key={idx}>
                            <FooterColumnHeader>{column.title}</FooterColumnHeader>
                            {column.links.map((link, idx: number) => {
                                return <FooterColumnLink key={idx}>{link}</FooterColumnLink>
                            })}
                        </FooterColumn>
                    );
                }) }
                <SocialMedialinks>
                    {icons.map((icon, idx: number) => {
                        return (
                            <SocialMediaLink key={idx}>
                                <FontAwesomeIcon icon={icon} size='xs' />
                            </SocialMediaLink>
                        );
                    })}
                </SocialMedialinks>

            </FooterBottom>
            <div></div>
        </FooterContainer>
    )
}
export default Footer;