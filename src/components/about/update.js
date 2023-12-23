import styled from "styled-components";


export const Container = styled.div`
    background-color: rgba(0,0,0,.2);
    backdrop-filter: blur(4px);
    color: #fff;
    width: 80%;
    margin:1rem auto;
    display: grid;
    place-items: center;
    >*{
        padding: 2rem;
    }

  h3, h2{
        background-color: #333;
        color: gold;
        padding: 0.4rem 1rem;
    }

    ul{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        align-items: center;
        gap: 2rem;

        >*{
            background-color: #333;
            padding: 0.2rem .5rem;
            color: gold;
            list-style-type: none;
            cursor: pointer;
            border: 1px solid transparent;

            &:hover{
                box-shadow: 0 5px 12px rgba(0,0,0,.2);
                border: 1px solid gold;
            }
        }
    }
`;