import * as React from 'react';
import Grid from '@mui/material/Grid';
import ProjectPreview from '../components/projectPreview';
import Typography from '@mui/material/Typography';


export default function RecentProjects() {
    return (
        <>
            <Typography variant="h2" gutterBottom component="div" color="text.primary" marginBottom={5} fontSize={40} fontWeight={800} fontFamily={"'Plus Jakarta Sans', sans-serif"}>
                Derniers projets créés
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    <ProjectPreview></ProjectPreview>
                </Grid>
                <Grid item xs={4}>
                    <ProjectPreview></ProjectPreview>
                </Grid>
                <Grid item xs={4}>
                    <ProjectPreview></ProjectPreview>
                </Grid>
            </Grid>
        </>
    );
}