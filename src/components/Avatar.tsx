import React, {CSSProperties} from 'react'
import styled from "@emotion/styled";

const HoverPath = styled.path`
  stroke-dasharray: var(--length);
  stroke-dashoffset: var(--length);
  transition: all 500ms ease-in-out;
  svg:hover & {
    stroke-dashoffset: 0;
  }
`

export default function Avatar() {
    return <>
        <svg style={{cursor: "pointer", marginLeft: "8px"}} width="40" height="40" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M18 55.5C18 31 55 31 55 55.5M36.5 30C40.7824 30 44.6469 24.7799 44.5 20.4999C44.3576 16.3511 40.6513 13.4999 36.5 13.4999C32.3487 13.4999 28.6424 16.3511 28.5 20.5C28.3531 24.7799 32.2176 30 36.5 30Z"
                stroke="#DADADA" strokeWidth="3"/>
            <HoverPath style={{"--length": "60px"} as CSSProperties}
                d="M18 55.5C18 31 55 31 55 55.5M36.5 30C40.7824 30 44.6469 24.7799 44.5 20.4999C44.3576 16.3511 40.6513 13.4999 36.5 13.4999C32.3487 13.4999 28.6424 16.3511 28.5 20.5C28.3531 24.7799 32.2176 30 36.5 30Z"
                stroke="white" strokeWidth="3"/>
        </svg>
    </>
}