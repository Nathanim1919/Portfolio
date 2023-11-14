import styled from "styled-components";

export const HeroStyle = styled.div`
        display: grid;
        place-items: center;
        margin-top: 7rem;
        width: 100vw;
        position: relative;
        z-index: 3;
        background-color: transparent;
        overflow: hidden;


        &::before{
            content: '';
            position: absolute;
            top: 35%;
            width: 10rem;
            right: -10rem;
            height: 10rem;
            background-color: rgba(11, 30, 138, 0.197);
            z-index: 0;
            border-radius: 50%;
}
        
        .hero-text{
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1rem;

            >*{
                margin: 0;
            }
              h3{
                    font-size: 1.2rem;
                    color: #eee;
                    font-weight: 200;
                }
                h1{
                    font-size: 3rem;
                    line-height: 45px;
                    color: #fff;
                    letter-spacing: 5px;
                    position: relative;

                    &::after{
                        content: '';
                        position: absolute;
                        bottom: -.5rem;
                        left: 0;
                        width: 20%;
                        height: 10px;
                        background-color: orange;
                    }
                }
        

            .social{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                font-size: 1.4rem;
                gap: 2rem;
                color: #eee;

                >*{
                    cursor: pointer;
                    color: #eee;

                    &:hover{
                        color: blue;
                    }
                }
             
            }
            button{
                padding: .3rem 1rem;
                border: none;
                background-color: #fff;
                color: #333;
                outline: none;
                border: none;
                cursor: pointer;
                font-weight: 800;
                border-radius: 4px;
                font-family: inherit;
                box-shadow: 0 7px 14px rgba(0,0,0,.05);

                &:hover{
                    opacity: .3;
                }
            }
        }
        .Image{
            position: relative;
            display: grid;
            place-items: center;
            padding:4rem;
            top: 0%;
            
            >div{
                background-color:orange;
                width: 20rem;
                height: 20rem;
                border-radius: 50%;
                top: 6%;
                position: relative;

                 >div{
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background-color: #fff;
                    color: #333;
                    position: absolute;
                    display: grid;
                    place-items: center;
                    box-shadow: 0 7px 18px rgba(0,0,0,.05);
                }
                .react{
                    top: 10%;
                    left: 13%;
                    animation: animate 1s alternate infinite;
                    animation-delay: 100ms;
                }
                .python{
                    top: 10%;
                    right: 13%;
                     animation: animate 1s alternate infinite;
                      animation-delay: 500ms;
                }
                .node{
                    bottom: 30%;
                    right: 1rem;
                     animation: animate 1s alternate infinite;
                      animation-delay: 1000ms;
                }
            }

            img{
                width: 100%;
                transform: scale(1.5);
                position: absolute;
                top: -30%;
            }
        }

        @keyframes animate {
            0%{
                transform: translateY(10px);
            }
            100%{
                transform: translateY(-10px);
            }
        }



        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(2,1fr);
            padding:1rem 0;
            font-size: 1.6rem;
            width: 70%;
            margin:4rem auto;

              
             .Image{
            overflow: hidden;
            padding: 3rem 0;
            top:3%;

            >div{
                width: 28rem;
                height: 28rem;
             
                position: relative; 
            }

            img{
                width: 100%;
                transform: scale(1.4);
                position: absolute;
                top: -31%;
            }
        }

        }
    
`