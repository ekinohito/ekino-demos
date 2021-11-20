import styled from "@emotion/styled";
import {keyframes} from "@emotion/react";

const writing = keyframes`
  from {
    stroke-dashoffset: 0;
    stroke: #0070f3;
    stroke-width: 3px;
  }
  50% {
    stroke: #a817e1;
    stroke-width: 5px;
  }
  to {
    stroke-dashoffset: var(--length);
    stroke: #0070f3;
    stroke-width: 3px;
  }
`

const Path = styled.path`
  stroke-dasharray: var(--length) calc(var(--length) + 10px);
  stroke-linecap: round;
  animation: ${writing} 2s ease-in-out infinite;
  animation-direction: alternate;
`

export default Path