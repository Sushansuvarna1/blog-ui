
import { styled, Box, Typography } from '@mui/material';

const Image = styled(Box)`
    width: 100%;
    background: url(https://images.pexels.com/photos/13620263/pexels-photo-13620263.jpeg?cs=srgb&dl=pexels-pramod-tiwari-13620263.jpg&fm=jpg) center/55% repeat-x #000;
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;

const Banner = () => {
    
    return (
        <Image>
            <Heading>BLOGS</Heading>
        
        </Image>
    )
}

export default Banner;