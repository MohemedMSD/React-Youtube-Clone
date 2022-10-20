import { Box, CardMedia } from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import FeatchData from '../utils/FeatchFromAPI';
import {Videos, ChannelCard, ErrorCom} from './'
const Channelsdetails = () => {

  // for get id in url
  const {id} = useParams();
  // ---------STATE for : 
  const [channelDetais, setchannelDetais] = useState(null);
  const [videos, setvideos] = useState([]);
  const [error, seterror] = useState(false);
  const [errorMSG, seterrorMSG] = useState('');
  const PictureConv = channelDetais?.brandingSettings?.image;

  useEffect(() => {
    setchannelDetais(null)

    // get channel details
    FeatchData(`channels?part=snippet&id=${id}`)
    .then((data)=>{
      setchannelDetais(data.items[0]);
      seterror(false)
    }).catch((error)=>{
      seterror(true)
      seterrorMSG(error.message)
    })

    // get videos for this channel
    FeatchData(`search?channelId=${id}&part=snippet&order=date`)
    .then((data)=>{
      setvideos(data.items)
      seterror(false)
    }).catch((error)=>{
      seterror(true)
      seterrorMSG(error.message)
    })
  }, [id]);
  
  return (
    <Box minHeight='95vh' bgcolor='background.default'>
      {
        error ? <ErrorCom err={errorMSG}/>
        :
        <>
          <Box>
            {
              PictureConv ? 
              <CardMedia
                image={PictureConv?.bannerExternalUrl}
                alt={channelDetais?.snippet?.title}
                sx={{
                  width:'98%',
                  height:'300px',
                  margin:'auto',
                  borderRadius : '10px'
                }}
              />
              : <div style={{
                  background: 'linear-gradient(121deg, rgba(163,27,27,1) 0%, rgba(252,21,3,1) 63%, rgba(252,21,3,1) 77%, rgba(163,27,27,1) 100%)',
                  width : '98%',
                  height: '300px',
                  margin : 'auto',
                  borderRadius : '10px'
                }} />
            }
            <ChannelCard channeldetails={channelDetais} marginTop='-110px'/>
          </Box>
          <Box p={2}>
            <Videos videos={videos} />
          </Box>
        </>
      }
    </Box>
  )
}

export default Channelsdetails