import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Container} from '@mui/material'
import ResponsiveAppBar from './ResponsiveAppBar'

function HealthIdDisplay() {
    const navigate = useNavigate();
    const [isCopied, setIsCopied] = useState(false);
    const copyText = localStorage.getItem("healthId");
    // This is the function we wrote earlier
    
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
        return await navigator.clipboard.writeText(text);
        } else {
        return document.execCommand('copy', true, text);
        }
    }
    
    // onClick handler function for the copy button
    const handleCopyClick = () => {
        // Asynchronously call copyTextToClipboard
        copyTextToClipboard(copyText)
        .then(() => {
            // If successful, update the isCopied state value
            setIsCopied(true);
            setTimeout(() => {
            setIsCopied(false);
            }, 5000);
        })
        .catch((err) => {
            console.log(err);
        });
    }
    const handleSubmit = () => {
        navigate('/enterHealthIdNo');
    }
    return (
        <>
        <ResponsiveAppBar />
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                boxShadow: 3,
                borderRadius: 2,
                px: 4,
                py: 6,
                marginTop: 8,
                display: "flex",
                width: "100%",
                flexDirection: "column",
                alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Your Health ID Number
                </Typography>
                <div style={{width: "100%"}}>
                    <input
                        style={{ width: "75%", height: "50px", fontSize: "20px", marginTop: "20px", paddingRight: "10px",}}
                        type='text'
                        value= {copyText}
                        readOnly
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2, ml: 2}}
                        onClick={handleCopyClick}
                    >
                        <span>{isCopied ? 'Copied!' : 'Copy'}</span>
                    </Button>
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={handleSubmit}
                >
                    Get ABHA Card
                </Button>
            </Box>
        </Container>
        </>
    );
    }

export default HealthIdDisplay