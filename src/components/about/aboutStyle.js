import styled from "styled-components";

export const AboutStyle= styled.div`
    font-family: inherit;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    border-top:2px solid gold;
    position: relative;
    gap: 1rem;
    width:100vw;

    >div:nth-child(2){
        display:flex;
        flex-direction:column;
        place-items:center;
        gap:1rem;
        text-align: left;

        >*{
            margin:0;
        }
    }
    >div{
        padding:1rem;
        position: relative;
        z-index: 0;
    }
    h1{
        font-size: 1.4rem;
        color:gold;
        background-color:#333;
        padding:.3rem 2rem;

    }

    h2{
        font-size: 1rem;
        color: #eee;
    }

    p{
        color: #eee;
    }

    div.about-me{
          background-color:rgba(0,0,0,.1);
             backdrop-filter:blur(10px);
             width:100%;
             >*{
                width:70%;
             }
    }
    div.skills{
             display: flex;
             flex-direction:column;
             background-color:rgba(0,0,0,.1);
             backdrop-filter:blur(10px);
             width: 100%;
             padding:3rem;
             >*{
                width:70%;
                margin: auto;
             }

             h2{
                color: gold;
                background-color: #333;
                padding:.3rem 1rem;
             }

        >div{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        font-size: 1.5rem;
        gap: 1rem;
        color:orange;
        position: relative;
        z-index: 12;
        color:gold;
         >*{
            width: 30px;
            height: 30px;
            padding: 0.4rem;
            border-radius: 50%;
            display: grid;
            place-items: center;
            color: gold;
         }
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
       width: 80vw;
       margin: auto;
       padding: 3rem;
       backdrop-filter: blur(2px);
        display: grid;
        grid-template-columns: .5fr .5fr;
        place-items: center;
         top:-4rem;

    >div.skills, >div.about-me{
       padding: 0;
        background-color:rgba(0,0,0,.2);
        backdrop-filter: blur(30px);
        height: 100%;
        padding: 1rem 0;
    }
      div.skills{
        grid-template-columns: repeat(auto-fit, minmax(60px,1fr));
      }

         h1{
        font-size: 2rem;
        color:gold;
    }

    h2{
        font-size: 1.3rem;
         color: rgba(0,0,0,.8);
         color:#eee;
    }

    }
`