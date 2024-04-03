import { Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Typography textAlign="center" py={2}>
      Created by:
      <Link href="https://piotrgorski.com" target="_blank" rel="noopener" variant="h5" ml={1}>
        piotrgorski.com
      </Link>
    </Typography>
  );
};

export default Footer;
