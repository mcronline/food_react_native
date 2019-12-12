import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses',
    headers : {
        Authorization : 'Bearer fMMB0f7q3Ax8Ble82VDhGu_FnL-HI0Ecs4ixbDuXQTU_eu-q3yKZyeofU-nZuOCcV6nz1nlffS3_FtM6t-XFzrpb-0q3NrDoQ2lqOFH47VBUFUPAXeonBOOSaejwXXYx'
    }
});