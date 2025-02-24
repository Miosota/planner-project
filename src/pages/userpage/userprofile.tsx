import Avatar from '@mui/material/Avatar';
import { Container, Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import './userpage.scss';
import Grid from '@mui/material/Grid2';

function stringToColor(string: string) {
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i++) {
        hash = string.charCodeAt(i) + ((hash << 3) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xff;
        //cut from the end
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}


function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
}));

function UserProfile() {


    return(
        <header className="header-profile">
            <Container className="container profile-container">
                <div  className='user-avatar-conatiner'>
                    <Avatar {...stringAvatar('User Name')} className='user-avatar' />
                </div>                
                <div className="user-data">
                    <Grid container spacing={2} direction="row" sx={{justifyContent: "center",
        alignItems: "stretch",}}>
                        <Grid size={6}>
                            <Item className='user-info'>
                                <h2 className="user-profile_h2">Name</h2>
                                <span className="user-profile_span">User Name</span>
                                <h2 className="user-profile_h2">Age</h2>
                                <span className="user-profile_span">User Age</span>
                            </Item>
                        </Grid>
                        <Grid size={6}>
                            <Item  className='user-info'>
                                <h2 className="user-profile_h2">Phone Number</h2>
                                <span className="user-profile_span">+7 123 563 78 98</span>
                                <h2 className="user-profile_h2">Email Address</h2>
                                <span className="user-profile_span">mail@google.com</span>
                            </Item>
                        </Grid>
                    </Grid> 
                </div>               
            </Container>     
        </header>
    );
}

export default UserProfile;