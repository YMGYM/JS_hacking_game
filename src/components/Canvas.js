import React, {useEffect, createRef} from 'react';

const Canvas = () => {
        // 디스플레이 사이즈 지정
        const displayWidth = 500;
        const displayHeight = 500;
        const circleDist = displayHeight / 7;

        let drawCircle = (ctx, radius) => {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = '5'
            ctx.beginPath();
            ctx.arc(displayWidth/2, displayHeight/2, radius, 0, 2*Math.PI);
            ctx.closePath();
            ctx.stroke();
        }

        let drawPosition = (ctx, position) => {
            ctx.fillStyle = '#33ffaa';
            ctx.fillRect(position.x - 7, position.y - 7, 15, 15);
        }
    
        // 캔버스
        let canvasRef = createRef(); // canvas의 DOM값을 가져온다.
        
        useEffect(()=> {
            let canvas = canvasRef.current;
            let ctx = canvas.getContext('2d');
    
            //캔버스를 초기화하고 검정색으로 색을 칠함
            ctx.fillStyle = '#000000';
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    
            // 일정 간격으로 흰색 원을 그린다.
            for(let i=0; i<4; i++){
                drawCircle(ctx, displayHeight/2 - (i * circleDist));
            }

            let target = setInterval(() => drawPosition(ctx, {x:displayWidth/2, y:displayHeight/2}), 5000)
        }, [canvasRef]);

        
        // useEffect(()=> {
        //     drawPosition(ctx, {x:displayWidth/2, y:displayHeight/2});
        // }, [canvasRef.current]);


    return (
        <div>
            <canvas ref={canvasRef} width={displayWidth} height={displayHeight}></canvas>
        </div>
    );
}

export default Canvas;
