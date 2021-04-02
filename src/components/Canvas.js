import React, {useEffect, createRef} from 'react';
import io from 'socket.io-client';


const Canvas = () => {
        // 디스플레이 사이즈 지정
        const displayWidth = window.innerWidth > 0 ? window.innerWidth : 0;
        const displayHeight = window.innerHeight > 0 ? window.innerHeight : 0;
        const circleDist = displayHeight / 7;
        const socket = io.connect('http://localhost:5000');

        let drawCircle = (ctx, radius) => {
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = '5'
            ctx.beginPath();
            ctx.arc(displayWidth/2, displayHeight/2, radius, 0, 2*Math.PI);
            ctx.closePath();
            ctx.stroke();
        }

        let canvasRef = createRef(); // canvas의 DOM값을 가져온다.

        let drawPosition = (ctx, position) => {
            if(flag === true){
                ctx.fillStyle = '#33ffaa';
                ctx.fillRect(position.x - 7, position.y - 7, 15, 15);
            }
            
        }
    
        let flag = false;

        useEffect(() => {
            let canvas = canvasRef.current;
            let ctx = canvas.getContext('2d');
            setInterval(()=> {
            

                //캔버스를 초기화하고 검정색으로 색을 칠함
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                ctx.fillStyle = '#000000';
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
                

        
                // 일정 간격으로 흰색 원을 그린다.
                for(let i=0; i<4; i++){
                    drawCircle(ctx, displayHeight/2 - (i * circleDist));
                }
           
                
    
                drawPosition(ctx, {x:displayWidth/2, y:displayHeight/2});

            }, 0);

            setInterval(() => {
                flag = !flag;
            }, 1000)
        }, []);


        // 소켓 연결용
        useEffect(()=> {
            socket.on("connectionChk", ()=> {console.log('connected');});
        }, []);
        
        


    return (
        <div>
            <canvas ref={canvasRef} width={displayWidth} height={displayHeight}></canvas>
        </div>
    );
}

export default Canvas;
