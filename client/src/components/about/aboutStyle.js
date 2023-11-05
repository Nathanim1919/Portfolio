import styled from "styled-components";

export const AboutStyle= styled.div`
    display: grid;
    justify-content: center;
    padding: 5rem;
    align-items: center;

    >div{
        padding: 2rem;
        display: grid;
        place-items: center;
        width: 70vw;
        margin: auto;

        .skills{
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 3rem;
            font-size: 2rem;
            color: gray;

            >div{
                position: relative;
                display: grid;
                place-items: center;
                cursor: pointer;
                :nth-child(2){
                    transition: all 0.2s ease-in-out;
                }
                >span{
                    position: absolute;
                    opacity: 0;
                    bottom: -3rem;
                    background-color: black;
                    color: #fff;
                    padding: .3rem 1rem;
                    font-size: .8rem;
                    width: 45px;
                    display: grid;
                    place-items: center;
                    margin: 0 .5rem;
                    transition: all .3s ease-in-out;
                    border-radius:5px;
                    box-shadow: 0 8px 23px rgba(0,0,0,.1);
                }

                &:hover{
                    :nth-child(2){
                        color: blue;
                    }
                    >span{
                        bottom: -2rem;
                        opacity: 1;
                    }
                }
            }
        }
        
    }

    .cvBtn button{
        padding: 0.6rem 1.5rem;
        background-color: blue;
        color: #fff;
        font-family: inherit;
        box-shadow: 0 7px 16px rgba(0,0,0,.1);
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            opacity: .5;
        }
        }


    img{
        width: 100%;
        box-shadow: 0 12px 33px rgba(0,0,0,.1);
    }
`