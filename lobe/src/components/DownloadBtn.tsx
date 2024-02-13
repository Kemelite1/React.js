import styled from 'styled-components'

const Button = styled.button`
background-color: #04DDB2 ;
color: #fff;
font-weight: 700;
font-size: 1.2em;
border-radius: 100px;
text-align: center;
border: none;
height: 3rem;
padding: 0 1.5em;
cursor: pointer;
`
function DownloadBtn(){
    return (
        <Button onClick={() => {

        }}>Download</Button>
    )
}
export default DownloadBtn