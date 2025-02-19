import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Paper, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import './userpage.scss';

function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

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
            <div className="container">
                <Avatar {...stringAvatar('User Profile')} />
                <Stack className='user-info'>
                    <Item>Phone Number</Item>
                    <Item>Email Address</Item>
                </Stack>
            </div>     
        </header>
    );
}

export default UserProfile;