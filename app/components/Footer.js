import React from 'react';
import {
    Box,
    Grid,
    Typography,
    Link,
    Stack,
    IconButton,
    Button
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#0A1929', color: '#fff', px: { xs: 3, md: 10 }, py: 6 }}>
            <Grid container spacing={5}>
                {/* About */}
                <Grid item xs={12} md={4}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        About Hire22
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#cfd8dc', mb: 2, lineHeight: 1.7 }}>
                        India's first anonymous job connect platform for mid and senior professionals.
                        Discover secure, confidential, and fast connections with top employers without
                        sharing your contact details until you accept JobCoNCT.
                    </Typography>

                    <Typography variant="subtitle2" sx={{ color: '#90caf9', mb: 1 }}>
                        HR Tools:
                    </Typography>
                    <Stack spacing={1} flexWrap="wrap" direction="row">
                        {[
                            "HR Checklists",
                            "HR Policies",
                            "HR Calculators",
                            "Job Descriptions",
                            "HR Frameworks",
                            "HR Email Playbook",
                            "Performance Review",
                            "Interview Questions"
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="hover"
                                sx={{ color: '#90caf9', fontSize: 14 }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Grid>

                {/* Need Help */}
                <Grid item xs={12} sm={6} md={2.5}>
                    <Typography variant="h6" fontWeight="bold" gutterBottom>
                        Need Help?
                    </Typography>
                    <Stack spacing={1}>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <EmailIcon fontSize="small" />
                            <Typography variant="body2" color="#cfd8dc">
                                support@hire22.ai
                            </Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center" spacing={1}>
                            <PhoneIcon fontSize="small" />
                            <Typography variant="body2" color="#cfd8dc">
                                +91 888 45 333 45
                            </Typography>
                        </Stack>
                        <Button
                            variant="outlined"
                            size="small"
                            sx={{
                                mt: 1,
                                color: '#fff',
                                borderColor: '#90caf9',
                                '&:hover': {
                                    borderColor: '#fff',
                                    bgcolor: '#1976d2',
                                },
                            }}
                        >
                            Contact Us
                        </Button>
                    </Stack>
                </Grid>

                {/* Information */}
                <Grid item xs={12} sm={6} md={1.5}>
                    <Typography variant="h6" fontWeight="semi-bold" gutterBottom>
                        Information
                    </Typography>
                    <Stack spacing={1}>
                        {["About Us", "Blog", "Sitemap", "Anonymous Policy"].map((item, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="hover"
                                sx={{ color: '#cfd8dc', fontSize: 14 }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Grid>

                {/* Candidate */}
                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6" fontWeight="semi-bold" gutterBottom>
                        Candidate Zone
                    </Typography>
                    <Link href="#" underline="hover" sx={{ color: '#cfd8dc', fontSize: 14 }}>
                        How it works
                    </Link>
                    <Stack direction="row" spacing={1} mt={1}>
                        <IconButton sx={{ color: '#90caf9' }} size="small">
                            <AndroidIcon />
                        </IconButton>
                        <IconButton sx={{ color: '#90caf9' }} size="small">
                            <AppleIcon />
                        </IconButton>
                    </Stack>
                </Grid>

                {/* Employer */}
                <Grid item xs={12} sm={6} md={2}>
                    <Typography variant="h6" fontWeight="semi-bold" gutterBottom>
                        Employer Zone
                    </Typography>
                    <Stack spacing={1}>
                        {[
                            "Register to Hire",
                            "How it works for Employers",
                            "SARA AI Recruiter",
                        ].map((item, i) => (
                            <Link
                                key={i}
                                href="#"
                                underline="hover"
                                sx={{ color: '#cfd8dc', fontSize: 14 }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Stack>
                </Grid>
            </Grid>

            {/* Bottom Bar */}
            <Box mt={5} pt={3} borderTop="1px solid #263238">
                <Stack
                    direction={{ xs: 'column', md: 'row' }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={{ xs: 1, md: 3 }}
                    flexWrap="wrap"
                    textAlign="center"
                >
                    <Typography variant="body2" color="#90caf9">
                        © 2025 Hire22 | Hire best matching candidates
                    </Typography>

                    <Link href="#" underline="hover" sx={{ color: '#90caf9', fontSize: 14 }}>
                        Privacy Policy
                    </Link>

                    <Link href="#" underline="hover" sx={{ color: '#90caf9', fontSize: 14 }}>
                        Terms & Conditions
                    </Link>

                    <Stack direction="row" spacing={1}>
                        <IconButton sx={{ color: '#90caf9' }}><FacebookIcon fontSize="small" /></IconButton>
                        <IconButton sx={{ color: '#90caf9' }}><TwitterIcon fontSize="small" /></IconButton>
                        <IconButton sx={{ color: '#90caf9' }}><LinkedInIcon fontSize="small" /></IconButton>
                        <IconButton sx={{ color: '#90caf9' }}><YouTubeIcon fontSize="small" /></IconButton>
                        <IconButton sx={{ color: '#90caf9' }}><InstagramIcon fontSize="small" /></IconButton>
                    </Stack>
                </Stack>
            </Box>

        </Box>
    );
};

export default Footer;
