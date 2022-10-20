import { CheckCircle } from '@mui/icons-material';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import {demoProfilePicture} from '../utils/constants'

const ChannelCard = ({channeldetails, marginTop}) => {
    return (
        <Box
            sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                color : 'text.primary',
                marginTop
            }}
        >
            <Link to={`/channel/${channeldetails?.id?.channelId}`}>
                <CardContent
                    sx={{
                        display : 'flex',
                        flexDirection: 'column',
                        alignItems : 'center',
                        justifyContent : 'center',
                        color : 'text.primary'
                    }}
                >
                    <CardMedia 
                        image={channeldetails?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                        alt={channeldetails?.snippet?.title}
                        sx={{height: 210, width: 210, borderRadius:'50%', border:'1px solid black'}}
                    />
                    <Typography variant='h6' marginTop={2} >
                        {channeldetails?.snippet?.title}
                        <CheckCircle sx={{fontSize: '12px', color:'text.secondary', ml:'5px'}}/>
                    </Typography>
                    {
                        channeldetails?.statistics?.subscriberCount && (
                            <Typography color='text.secondary'>
                                {`${parseInt(channeldetails?.statistics?.subscriberCount).toLocaleString()} `} 
                                subscribers
                            </Typography>
                        )
                    }
                </CardContent>
            </Link>
        </Box>
    )
}

export default ChannelCard