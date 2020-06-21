import React from 'react';

import {Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SttingsIcon} from './styles';

const UserInfo: React.FC = () => {
    return(
        <Container>
            <Profile>
                <Avatar />
            
                <UserData>
                    <strong>Iago Caires</strong>
                    <span>#0709</span>
                </UserData>

            </Profile>
            
            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SttingsIcon />
            </Icons>
        </Container>
    )
};

export default UserInfo;