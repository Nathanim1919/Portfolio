import react from 'react'
import {styled} from 'styled-components';


const Loading = () => (
    <Loader id = "load" >
        <div>S</div>
        <div>E</div>
        <div>N</div>
        <div>D</div>
        <div>I</div>
        <div>N</div>
        <div>G</div>
    </Loader>
);


export default Loading;


const Loader = styled.div`
  position:absolute;
  width:600px;
  height:36px;
  left:50%;
  top:40%;
  margin-left:-300px;
  overflow:visible;
  -webkit-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
  cursor:default;

div {
  position:absolute;
  width:20px;
  height:36px;
  opacity:0;
  font-family:Helvetica, Arial, sans-serif;
  animation:move 2s linear infinite;
  -o-animation:move 2s linear infinite;
  -moz-animation:move 2s linear infinite;
  -webkit-animation:move 2s linear infinite;
  transform:rotate(180deg);
  -o-transform:rotate(180deg);
  -moz-transform:rotate(180deg);
  -webkit-transform:rotate(180deg);
  color:#fff;
}

div:nth-child(2) {
  animation-delay:0.2s;
  -o-animation-delay:0.2s;
  -moz-animation-delay:0.2s;
  -webkit-animation-delay:0.2s;
}
div:nth-child(3) {
  animation-delay:0.4s;
  -o-animation-delay:0.4s;
  -webkit-animation-delay:0.4s;
  -webkit-animation-delay:0.4s;
}
div:nth-child(4) {
  animation-delay:0.6s;
  -o-animation-delay:0.6s;
  -moz-animation-delay:0.6s;
  -webkit-animation-delay:0.6s;
}
div:nth-child(5) {
  animation-delay:0.8s;
  -o-animation-delay:0.8s;
  -moz-animation-delay:0.8s;
  -webkit-animation-delay:0.8s;
}
div:nth-child(6) {
  animation-delay:1s;
  -o-animation-delay:1s;
  -moz-animation-delay:1s;
  -webkit-animation-delay:1s;
}
div:nth-child(7) {
  animation-delay:1.2s;
  -o-animation-delay:1.2s;
  -moz-animation-delay:1.2s;
  -webkit-animation-delay:1.2s;
}

@keyframes move {
  0% {
    left:0;
    opacity:0;
  }
  35% {
    left: 41%; 
    -moz-transform:rotate(0deg);
    -webkit-transform:rotate(0deg);
    -o-transform:rotate(0deg);
    transform:rotate(0deg);
    opacity:1;
  }
  65% {
    left:59%; 
    -moz-transform:rotate(0deg); 
    -webkit-transform:rotate(0deg); 
    -o-transform:rotate(0deg);
    transform:rotate(0deg); 
    opacity:1;
  }
  100% {
    left:100%; 
    -moz-transform:rotate(-180deg); 
    -webkit-transform:rotate(-180deg); 
    -o-transform:rotate(-180deg); 
    transform:rotate(-180deg);
    opacity:0;
  }
}

@-moz-keyframes move {
  0% {
    left:0; 
    opacity:0;
  }
  35% {
    left:41%; 
    -moz-transform:rotate(0deg); 
    transform:rotate(0deg);
    opacity:1;
  }
  65% {
    left:59%; 
    -moz-transform:rotate(0deg); 
    transform:rotate(0deg);
    opacity:1;
  }
  100% {
    left:100%; 
    -moz-transform:rotate(-180deg); 
    transform:rotate(-180deg);
    opacity:0;
  }
}

@-webkit-keyframes move {
  0% {
    left:0; 
    opacity:0;
  }
  35% {
    left:41%; 
    -webkit-transform:rotate(0deg); 
    transform:rotate(0deg); 
    opacity:1;
  }
  65% {
    left:59%; 
    -webkit-transform:rotate(0deg); 
    transform:rotate(0deg); 
    opacity:1;
  }
  100% {
    left:100%;
    -webkit-transform:rotate(-180deg); 
    transform:rotate(-180deg); 
    opacity:0;
  }
}

@-o-keyframes move {
  0% {
    left:0; 
    opacity:0;
  }
  35% {
    left:41%; 
    -o-transform:rotate(0deg); 
    transform:rotate(0deg); 
    opacity:1;
  }
  65% {
    left:59%; 
    -o-transform:rotate(0deg); 
    transform:rotate(0deg); 
    opacity:1;
  }
  100% {
    left:100%; 
    -o-transform:rotate(-180deg); 
    transform:rotate(-180deg); 
    opacity:0;
  }
}
`