import {NextPage} from "next";
import {Box, Button, Skeleton} from "@mui/material";
import useCamera from "../src/hooks/useCamera";

const Camera: NextPage = () => {
    const {state, startRecording, stopRecording, videoRef} = useCamera()
    return <Box display={"grid"} sx={{placeItems: "center"}}>
        <Box>
            <Button onClick={startRecording}>Start recording</Button>
            <Button onClick={stopRecording}>Stop recording</Button>
        </Box>
        {(state === 'process') && <Skeleton variant="rectangular" width={400} height={300}/>}
        <video width="400px" height="300px" autoPlay ref={videoRef}/>
    </Box>
}

export default Camera