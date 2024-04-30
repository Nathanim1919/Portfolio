import styled from "styled-components";

export const AboutStyle= styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    z-index: 20;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    background-color: rgba(0,0,0,.01);
    backdrop-filter: blur(4px);


    @media screen and (max-width: 800px){
        flex-direction: column;
        gap: 0rem;
        
    }

    .bottonDesign{
            position: absolute;
            top: -10%;
            left: 0;
            right: 0;
            width: 100vw;
            height: 100vh;
            background-color: red;
            background:linear-gradient(to bottom,transparent,rgba(0,0,0,.9), rgba(0,0,0,9),rgba(0,0,0,92), rgba(0,0,0,94),rgba(0,0,0,95),rgba(0,0,0,1),rgba(0,0,0,1),rgba(0,0,0,.65),rgba(0,0,0,.24), transparent);
            z-index: 0;
            display: grid;
            place-items: center;


            img{
                width: 40%;
                height: auto;
                position: relative;
                right: -15%;
                top: -25%;
                opacity: 1;

                @media screen and (max-width:800px){
                    display: none;
                }
            }
        }
       
    
        .about-me{
            color: #fff;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            margin-top: 8rem;
            align-items: flex-start;
            gap: 1rem;
            background:linear-gradient(to bottom, rgba(0,0,0,rgba(0,0,0,.24), transparent));
            backdrop-filter: blur(10px);
            padding: 3rem;
            box-shadow: 0 19px 54px rgba(0,0,0,.65);
            border-radius: 20px;


            @media screen and (max-width:800px){
               padding: 3rem;
            }
            

          
            

            >*{
                margin: 0;


            
            }

            h1{
                font-size: 3rem;
                color: orange;
            }

            p{
                width: 70%;
                font-size: 1.4rem;
            }
            @media screen and (max-width: 800px){
                margin-top: 0rem;

                p{
                    width: 100%;
                }
            }
        }


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }


    button{
        padding: .6rem 2rem;
        background-color: #333;
        color: orange;
        border: none;
        font-weight: 600;
        border-radius: 10px;
    }
`