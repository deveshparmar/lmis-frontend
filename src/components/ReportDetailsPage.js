import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import ResponsiveAppBar from './ResponsiveAppBar';

export function ReportDetailsPage() {
    return (
        <>
            <ResponsiveAppBar />
            <center><h1>Blood Report</h1></center>
            <Box
                component="form"
                sx={{
                    my : 5,
                    mx : '5',
                    textAlign : 'center',
                    '& .MuiTextField-root': { width: '80%' ,marginLeft: '2rem',
                    marginRight: '2rem'},
                }}
                noValidate
                autoComplete="off"
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                    
                    <TextField
                        required
                        id="hemoglobin"
                        label="Hemoglobin (gr/l)"
                    />
                    <TextField
                        required
                        id="wbc"
                        label="White Blood Cell (m/mcl)"
                    /><TextField
                        required
                        id="rbc"
                        label="Red Blood Cell (m/mcl)"
                    /><TextField
                        required
                        id="mcv"
                        label="MCV (mm/ml)"
                    /><TextField
                        required
                        id="ptl"
                        label="PTL (mm/ml)"
                    /><TextField
                        required
                        id="esr"
                        label="ESR (mm/h)"
                    /><TextField
                        required
                        id="bloodSugar"
                        label="BloodSugar (mmol/l)"
                    /><TextField
                        required
                        id="cholerstrol"
                        label="Cholestrol (mmol/l)"
                    /><TextField
                        required
                        id="gpt"
                        label="GPT (U/l)"
                    /><TextField
                        required
                        id="got"
                        label="GOT (U/l)"
                    /><TextField
                        required
                        id="ggt"
                        label="GGT (U/l)"
                    /><TextField
                        required
                        id="bilirubin"
                        label="Bilirubin (mmol/l)"
                    /><TextField
                        required
                        id="alkaline"
                        label="Alkaline Phosphates (mmol/l)"
                    /><TextField
                        required
                        id="creatinine"
                        label=" Creatinine(mmol/l)"
                    /><TextField
                        required
                        id="hb"
                        label="HB's Ag"
                    />
                    <TextField
                        required
                        id="vdrl"
                        label="VDRL"
                    />
                    <TextField
                        required
                        id="albumin"
                        label="Albumin"
                    />
                    <TextField
                        required
                        id="sugar"
                        label="Sugar"
                    />
                
                </div>

                <Button
              type="submit"
              size='large'
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Generate Report
            </Button>

            </Box>
        </>
    )
}