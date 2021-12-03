import React, {useState, useEffect} from 'react'
import styled from 'styled-components';
import { useGlobalStateContext } from '../context/globalContext';

const Cursor = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    background: var(--pink);
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 9999;

    &.hovered {
        background: transparent !important;
        width: 32px;
        height: 32px;
        border: 3px solid var(--pink);
    }
    &.pointer {

    }
`;

const CustomCursor = () => {
    let aimX = 0
    let aimY = 0

    const { cursorType } = useGlobalStateContext()
    const [mousePosition, setMousePosition] = useState({
        x: 400, y: 400
    })

    const onMouseMove = event => {
        const {pageX: x, pageY: y} = event;
        setMousePosition({x, y})
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
        }
    }, [])

    return (
        <Cursor
            className={`${!!cursorType ? 'hovered' : ''} ${cursorType}`}
            style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}>
        </Cursor>
    )
}

export default CustomCursor
