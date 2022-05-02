import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';



const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const Card = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.primary.lighter,
    borderColor: theme.palette.border.paper,
    border: 1,
    borderRadius: 5,
    color: theme.palette.text.primary,
    p: 5,
    margin: 'auto',
    maxWidth: 500,
    flexGrow: 1
}));

const Letter = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    padding: '5px 10px',
    borderRadius: 5,
    fontFamily: 'roboto',
    fontWeight: 'bold'
}));

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));


export default function ProjectPreview() {
    return (
        <Card sx={{
            my: 1,
            mx: 'auto',
            p: 2,
        }}>
            <Grid item xs={4} sm container>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Letter>R</Letter>
                    </Grid>
                    <Grid item xs direction="column">
                        <Typography variant="h3" fontSize={16}>React Project</Typography>
                        <Typography variant="span" fontSize={12} color="text.secondary">3 users</Typography>
                        <Typography variant="h3" fontSize={16} mt={2}>Participants</Typography>
                        <Grid item xs>
                            <AvatarGroup max={4} spacing="large">
                                <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330" />
                                <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e" />
                                <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1580489944761-15a19d654956" />
                                <Avatar alt="Agnes Walker" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
                                <Avatar alt="Trevor Henderson" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
                            </AvatarGroup>
                        </Grid>
                        <Typography variant="h3" fontSize={16} mt={2}>Progression</Typography>

                        <BorderLinearProgress variant="determinate" value={50} />
                    </Grid>
                </Grid>
            </Grid>
        </Card >
    );
}
