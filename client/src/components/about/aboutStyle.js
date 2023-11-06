import styled from "styled-components";

export const AboutStyle= styled.div`
    font-family: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:3rem 2rem;
    background-color: rgba(0,0,0,.01);
    gap: 1rem;
    h1{
        font-size: 1.4rem;
    }

    h2{
        font-size: 1rem;
        color: rgba(0,0,0,.8);
    }


    div.skills{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(30px,1fr));
        place-items: center;
        padding: 1rem;
        font-size: 1.5rem;
        gap: 1rem;
        width: 100%;
    }

    .cvBtn{
        button{
            padding:.4rem 1rem;
            background-color: blue;
            color: #fff;
            font-weight: inherit;
            font-family: inherit;
            border: none;
            box-shadow: 0 7px 14px rgba(0,0,0,.25);
            border-radius: 4px;
            cursor: pointer;
            font-size: 1.3rem;
            &:hover{
                opacity: .5;
            }
        }
    }

    >*{
        margin: 0;
    }



    @media(min-width:768px){
       width: 60vw;
       margin: auto;
       background-color: #fff;
       padding: 3rem 0;

         h1{
        font-size: 2rem;
    }

    h2{
        font-size: 1.3rem;
         color: rgba(0,0,0,.8);
    }

    }
`