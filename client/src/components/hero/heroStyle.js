import styled from "styled-components";

export const HeroStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 3rem;
    height:100vh;
    overflow: hidden;
    z-index: 10;

    &::after{
        position: absolute;
        bottom: 0;
        top: 0;
        right: 5rem;
       background-color: #eee;
        width: 35%;
        height: 100%;

        content: '';
    }

    .hero-text{
        position: relative;
        left: 20%;
        padding:2rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        >*{
            margin: 0;
        }

        h1{
            font-weight: 800;
            line-height: 1;
            font-size: 3rem;
            letter-spacing: 15px;
             font-family: 'Pacifico', cursive;
        }

        p{
            width: 80%;
            color: #424144;
            font-size: 1.2rem;
            span{
                color: #333;
                font-family: 'Pacifico', cursive;
                color: orange;
                
            }
        }

        .social{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            font-size: 1.4rem;
            gap: 2rem;
        }

        div{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            width: 65%;
            flex-wrap: wrap;
            gap: 1rem;
            padding: 0.4rem;

            button{
                padding: .7rem 1rem;
                border: none;
                background-color: blue;
                color: #fff;
                outline: none;
                border: 2px solid blue;
                cursor: pointer;
                font-weight: 800;
                border-radius: 4px;
                font-family: inherit;
                box-shadow: 0 7px 14px rgba(0,0,0,.05);

                &:hover{
                    opacity: .3;
                }
            }

            .downloadCV {
                border: none;
                background-color: #fff;
                color: #333;
                cursor: pointer;

                 &:hover{
                   background-color: #eee;
                }
            }
        }
    }

    
    .Image{
        position: relative;
        height: 70%;
        right: 28%;
        z-index: 1;

        .circle{
            width: 25rem;
            height: 25rem;
            border-radius: 50%;
            border: 1px dotted orange;
            position: absolute;
            z-index: 0;
            top: 0;
            left: 0%;

            >div{
                background-color: #fff;
                color: blue;
                box-shadow: 0 5px 13px rgba(0,0,0,.05);
                width: 20px;
                height: 20px;
                position: absolute;
                padding: 0.1rem;
                display: grid;
                place-items: center;
                transform: scale(1.5);
                border-radius: 5px;

            }
            .react{
                top: 15%;
                left: 7%;
            }
            .node{
                top: 15%;
                right: 7%;
            }
            .python{
                bottom: 45%;
                right: -3%;
            }
        }

        >div{
            position: relative;
            top: 20%;
            width: 400px;
            height: 400px;
            border-radius: 0%;
            z-index: 10;
           
        }
       img{
           width: 100%;
           transform: scale(2.3);
           top: -5%;
       }
    }
`