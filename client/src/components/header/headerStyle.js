import styled from 'styled-components';



export const HeaderStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 0 2rem;

    .logo{
        font-family: 'Pacifico', cursive;
        font-size: 1.4rem;
        span{
            color: orange;
        }
    }

    .navigation ul{
        display: flex;
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        gap: 3rem;

        li{
            font-weight: 600;
            color: rgba(0,0,0,.6);
            padding: 0 .5rem;
            cursor: pointer;
        }
    }
`