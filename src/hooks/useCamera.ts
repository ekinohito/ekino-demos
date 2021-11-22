import {useEffect, useRef, useState} from "react";

export default function useCamera() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const streamRef = useRef<MediaStream | null>(null)
    const [state, setState] = useState<'off' | 'on' | 'process'>('off')
    useEffect(() => {
        const video = videoRef.current
        if (video === null) return
        const cb = () => setState('on')
        video.addEventListener('canplay', cb)
        return () => video.removeEventListener('canplay', cb)
    }, [videoRef])
    const startRecording = async () => {
        if (videoRef.current === null) return
        if (streamRef.current !== null) return
        const transition = setTimeout(() => setState('process'), 100)
        streamRef.current = await navigator
            .mediaDevices
            .getUserMedia({video: true, audio: true})
            .catch(() => {
                clearTimeout(transition);
                setState('off')
            }) ?? null
        videoRef.current.srcObject = streamRef.current
    }
    const stopRecording = async () => {
        if (videoRef.current === null) return
        videoRef.current.srcObject = null
        if (streamRef.current === null) return
        streamRef.current.getTracks().forEach(track => track.stop())
        streamRef.current = null
        setState('off')
    }
    return {state, startRecording, stopRecording, videoRef}
}
