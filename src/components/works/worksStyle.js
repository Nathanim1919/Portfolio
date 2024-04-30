import styled from "styled-components";


export const WorksStyle = styled.div`
    display: grid;
    padding:2rem 0rem;
    width:100vw;
    position: relative;
    z-index: 20;

    .header{
        display: flex;
        justify-content: space-around;
        align-items: center;

        h2{
            font-size: 3rem;
            color:gold;
            background-color: #333;
            padding: .3rem 2rem;


            @media screen and (max-width: 800px){
                font-size: 1rem;
            }
        }

        >div{
            a{
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .7rem;
                cursor: pointer;
                background-color: #333;
                color: gold;
                text-decoration: none;
                font-size: 1rem;
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
        gap: 1rem;
        margin-top: 3rem;

        .project {
           /* background-color:rgba(0,0,0,.4); */
           padding:3rem;
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
                color:#fff;

                h2{
                    font-size: 2rem;
                }

            >div:nth-child(4){
                display:flex;
                align-items:center;

                >*{
                    color:#fff;
                    text-decoration:none;
                    background-color:#fff;
                    color:#333;
                    padding:.1rem .5rem;
                }
            }

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
                font-size: 1.3rem;
                color: #eee;
            }

            h2{
                font-size: 2rem;
                font-weight: 500;
                background-color:#333;
                color:gold;
                font-weight: bolder;
                padding:.3rem 1rem;
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
            box-shadow: 0 19px 33px rgba(0,0,0,.07);
            width: 100%;
            height: 100%;
            position: relative;
            z-index: 5;
           }
        }

     
    }
      .experience-container{
                color: #fff;
                width: 100%;
                margin: 1rem auto;
                /* padding: 2rem; */
                background-color: rgba(0,0,0,.07);
                backdrop-filter: blur(20px);
                position: relative;
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));


                >div:nth-child(2){
                    padding: 1rem;
                }


                img{
                    width: 100%;
                    height: auto;
                }

                
                h1 span:nth-of-type(1){
                    font-size: 2.3rem;
                    background-color: #333;
                    padding: 0 1rem;
                    color: gold;
                }
                span{
                    font-size: 1.5rem;
                    color: gold;
                    background-color: transparent;
                }

                ul{
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                    width: 80%;
                    position: relative;
                   

                    /* li{
                        color: rgba(255,255,255,.7);
                        
                    }
                     */
                li{
                        margin: 0;
                        display: flex;
                        align-items: flex-start;
                        flex-direction: column;
                        gap: 1rem;
                        list-style-type: none;
                        width: 90%;
                        left: 0;

                        >*:nth-child(1){
                            color: gold;
                        }
                    }

        

                    a{
                        color: #fff;
                        padding: 0.3rem 1rem;
                        background-color: #333;
                        width: 100%;
                        text-decoration: none;
                        display: flex;
                        font-size: 1.3rem;
                        align-items: center;
                        gap: 1rem;
                    }
                }
                @media screen and (min-width: 800px){
                   width: 90%;
                   margin: 3rem auto;
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
              div.project:nth-child(2),div.project:nth-child(4), div.project:nth-child(6){
                    flex-direction: row-reverse;
            }
        }
   } 

   .footer{
         display: flex;
         justify-content: center;
         align-items: center;
         gap: 1rem;
         margin: 1rem 0;
         flex-direction: column;
         /* background-color: rgba(0,0,0,.07); */
         /* backdrop-filter: blur(10px); */
         color: #fff;
         padding: 2rem;
         height: 100vh;
         width: 50%;
         margin: auto;
         position: relative;

         @media screen and (max-width:800px){
            width: 100%;
            padding: 0;
         }
         

         img{
            position: absolute;
            width: 70%;
            height: auto;
            z-index: 1;
         }

         .content{
            position: relative;
            bottom: 0;
            z-index: 2;
            background-color: rgba(0,0,0,.5);
            backdrop-filter: blur(10px);
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1rem 0;
            border-radius: 20px;
            box-shadow: 0 14px 45px rgba(0,0,0,.07);
            

            >*{
                padding: 1rem;
                margin: 0;
            }
         }
    
         a{
              display: flex;
              justify-content: center;
              align-items: center;
              gap: .7rem;
              cursor: pointer;
              background-color: #333;
              color: gold;
              text-decoration: none;
              font-size: 1rem;
              padding: 0.2rem;
              border-radius: 3px;
    
              &:hover{
                opacity: .6;
              }
         }
   }
`