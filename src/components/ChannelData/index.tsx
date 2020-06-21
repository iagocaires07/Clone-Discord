import React, {useRef, useEffect} from 'react';

import {Container, Messages, InputWrapper, Input ,InputIcon} from './styles';
import ChannelMessage, {Mention} from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(()=>{
        const div = messageRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    },[messageRef])

    return(
        <Container>
            <Messages ref={messageRef}>
                {Array.from(Array(15).keys()).map((n)=>(
                    <ChannelMessage 
                    author="Iago Caires"
                    date="19/06/2020"
                    content="Hoje é sexta-feira!"
                />
                ))}
               
                <ChannelMessage 
                    author="Diego Fernandes"
                    date="19/06/2020"
                    content={
                        <>
                            <Mention>@Iago Caires</Mention>, me carrega no LoL e CS de novo por favor?
                        </>
                    }
                    hasMention
                    isBot
                />  
              
            </Messages>

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chate-livre"/>
                <InputIcon />
            </InputWrapper>
        </Container>
    )
};

export default ChannelData;