import { Box, Button, Typography } from '@mui/material';
import { homepageStyles } from '../../styles/homepage-styles';

const Footer = () => {
  return (
    <Box sx={homepageStyles.footerContainer}>
        <Typography sx={homepageStyles.footerText}>Help</Typography>
        <Typography sx={homepageStyles.footerText}>Contact</Typography>
        <Typography sx={homepageStyles.footerText}>About</Typography>
        <Typography sx={homepageStyles.footerText}>Privacy</Typography>
        <Typography sx={homepageStyles.footerText}>Terms</Typography>
        <Typography sx={homepageStyles.footerText}>Careers</Typography>
    </Box>
  );
}

export default Footer;