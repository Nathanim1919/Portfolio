import styled from "styled-components";


export const WorksStyle = styled.div`
    display: grid;
    padding: 2rem;


    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h2{
            font-size: 1rem;
        }

        >div{
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .7rem;
                cursor: pointer;
                background-color: #333;
                color: #fff;
                text-decoration: none;
                font-size: .8rem;
                padding: 0.2rem;
                border-radius: 3px;
    
                &:hover{
                    opacity: .6;
                }
            }
        }

    }
    .projects {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;
        margin-top: 3rem;

        .project {
           display :flex;
           justify-content: center;
           align-items: center;
           flex-direction: column;
           gap: 2rem;

           .textContent{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;

            >div{
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 1rem;
            }

            >div:nth-child(4){
                button{
                    padding: .4rem .5rem;
                    border: none;
                    font-family: inherit;
                   border: 1px solid #eee;
                   background-color: #fff;
                    color: #333;
                    cursor: pointer;

                    &:hover{
                        opacity: .7;
                        box-shadow: 0 6px 15px rgba(0,0,0,.07);
                    }

                }

            }

            P{
                font-size: .8rem;
                color: rgba(0,0, 0,.6);
            }

            h2{
                font-size: 1.2rem;
                font-weight: 500;
            }

            >*{
                margin: 0;
            }
           }

           .image{
            padding: 1rem;
            background-color: #fff;
            &::after{
                position: absolute;
                content: '';
                width: 40%;
                height: 50%;
                background-color: #eee;
                top: -2rem;
                left: -2rem;
            }
           }

           img{
            box-shadow: 0 19px 33px rgba(0,0,0,.07);
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 5;
           }
        }
    }
   
     @media screen and (min-width: 800px){
        width: 90%;
        margin: 3rem auto;
     }

   @media screen and (min-width: 900px){
    width: 70%;
    margin: 3rem auto;
    
        .projects{
            gap: 4rem;
            .project{
                display: flex;
                flex-direction: row;
            }
              div.project:nth-child(2),div.project:nth-child(4){
                    flex-direction: row-reverse;
            }
        }
   } 
`