import styled from "styled-components";

export const AboutStyle= styled.div`
    font-family: inherit;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    background-color: rgba(34, 26, 84);
    position: relative;
    top:-0rem;
    padding:0rem 2rem;
    gap: 1rem;
    border: 2px solid orangered;
    >div{
        /* background-color: rgba(34, 26, 97); */
        padding:1rem;
        backdrop-filter: blur(4px);
        position: relative;
        z-index: 0;
    }
    h1{
        font-size: 1.4rem;
    }

    h2{
        font-size: 1rem;
        color: rgba(0,0,0,.8);
    }

    p{
        color: #eee;
    }
    div.skills{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        font-size: 1.5rem;
        gap: 1rem;
        width: 100%;
        color:orange;
        position: relative;
        z-index: 12;
         >*{
            width: 30px;
            height: 30px;
            padding: 0.4rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            background-color: orange;
            color: #000;
         }
    }

        button{
            padding:.3rem .5rem;
            background-color: #fff;
            color: #333;
            font-weight: inherit;
            font-family: inherit;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 1rem;
            &:hover{
                opacity: .8;
            }
        }

    >*{
        margin: 0;
    }



    @media(min-width:768px){
       width: 60vw;
       margin: auto;
       padding: 3rem;
       backdrop-filter: blur(2px);
        display: grid;
        grid-template-columns: .4fr .6fr;
        place-items: center;
         top:-4rem;

    >div{
        background-color: transparent;
    }
      div.skills{
        grid-template-columns: repeat(auto-fit, minmax(60px,1fr));
      }

         h1{
        font-size: 2rem;
        color:#fff;
    }

    h2{
        font-size: 1.3rem;
         color: rgba(0,0,0,.8);
         color:#eee;
    }

    }
`