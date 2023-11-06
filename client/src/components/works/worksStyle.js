import styled from "styled-components";


export const WorksStyle = styled.div`
    display: grid;
    padding: 2rem;
    background-color: rgba(0,0,0,.01);


    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        >div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: .7rem;
            cursor: pointer;

            &:hover{
                opacity: .6;
            }
        }

    }
    .projects {
        display: grid;
        grid-template-columns: 1fr;
        gap: 3rem;

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
                    background-color: blue;
                    color: #fff;
                    cursor: pointer;

                    &:hover{
                        opacity: .7;
                        box-shadow: 0 6px 15px rgba(0,0,0,.07);
                    }

                }

            }

            P{
                font-size: .9rem;
                color: rgba(0,0, 0,.6);
            }

            >*{
                margin: 0;
            }
           }

           .image{
            padding: 1rem;
            background-color: #fff;
           }

           img{
            box-shadow: 0 9px 23px rgba(0,0,0,.07);
            width: 100%;
            height: 100%;
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