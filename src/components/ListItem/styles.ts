import styled from "styled-components";

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({done}: ContainerProps)=>(
    `
    padding: 10px;
    display: flex;
    background-color: #20212C;
    border-radius: 15px;
    margin-bottom: 15px;
    align-items:center;
    
    input {
        width: 20px;
        height: 20px;
        margin-right: 10px;
    }

    label{
 
        color: white;
        text-decoration: ${done ? 'line-through': 'initial'};
    }

    .icons{
        position: absolute;
        right: 170px;
    }

`
));
