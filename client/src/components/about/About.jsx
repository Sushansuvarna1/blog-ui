
import { Box, styled, Typography, Link } from '@mui/material';
import { GitHub, Instagram, Email } from '@mui/icons-material';

const Banner = styled(Box)`
    background-image: url(https://www.wallpapertip.com/wmimgs/23-236943_us-wallpaper-for-website.jpg);
    width: 100%;
    height: 50vh;
    background-position: left 0px bottom 0px;
    background-size: cover;
`;

const Wrapper = styled(Box)`
    padding: 20px;
    & > h3, & > h5 {
        margin-top: 50px;
    }
`;

const Text = styled(Typography)`
    color: #878787;
`;

const About = () => {

    return (
        <Box>
            <Banner />
            <Wrapper>
                <Typography variant="h3">Blog-App</Typography>
                <Text variant="h5">
                    Blog-UI app where the  new user will be able to register and login. For the login I used token based authentication.
                    Where there is a create blog button, when user can click the button can upload the image and Add title ,descriptions.
                    User can comment for the Blog and also can delete and edit the comments as well as Blog.
                    
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box>
                </Text>
               
            </Wrapper>
        </Box>
    )
}

export default About;