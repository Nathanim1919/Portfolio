import styled from "styled-components";

export const AboutStyle= styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    z-index: 20;
    width: 80%;
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
            top: -30%;
            left: 0;
            width: 100vw;
            height: 70%;
            background-color: red;
            background:linear-gradient(to bottom,transparent,rgba(0,0,0,.8), rgba(0,0,0,.9),rgba(0,0,0,.9),rgba(0,0,0,.65),rgba(0,0,0,.24), transparent);
            z-index: 0;
        }
       
    
        .about-me{
            color: #fff;
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            margin-top: 8rem;
            align-items: flex-start;
            gap: 1rem;


          
            

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
`