import React from 'react';
import GameSettings from './GameSettings';
const Canvas = () => {
    const { width, height, style } = GameSettings.CanvasSettings;
    return (
        <canvas
            width={width}
            height={height}
            style={style}
            id='canvas'>
        </canvas>
    )
}
export default Canvas;
