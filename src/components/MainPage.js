import React from 'react';

const MainPage = ({history}) => {
    
    const handleClick = () => {
        history.push("/game");
    }

    return (
        <div>
            <h1>메인페이지</h1>

            <button onClick={handleClick}>게임시작하기</button>
        </div>
    );
}

export default MainPage;
