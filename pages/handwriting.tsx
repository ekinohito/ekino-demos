import {NextPage} from "next";
import HandwritingPiece from "../src/components/HandwritingPiece";
import {Box} from "@mui/material";

const Handwriting: NextPage = () => {
    return <Box display={"grid"} sx={{placeItems: "center"}}>
        <HandwritingPiece/>
    </Box>
}

export default Handwriting