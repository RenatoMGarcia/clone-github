import React from 'react';
import { Container, Main, LeftSide, RightSide, Repos } from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                        username={'renatomgarcia'}
                        name={'Renato Garcia'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/57051641?v=4'}
                        followers={4}
                        following={5}
                        company={'SuperSim'}
                        location={'Sào Paulo, Brazil'}
                        email={'contatormg1@gmail.com'}
                        blog={'https://www.linkedin.com/in/renato-garcia-69346a17a/'}
                    />
                </LeftSide>

                <RightSide>
                    <Repos>
                        <h2>Popular repositories</h2>

                        <div>
                            {[1, 2, 3, 4, 5, 6].map(n => (
                                <RepoCard 
                                    key={n}
                                    username={'renatomgarcia'}
                                    reponame={'RenatoNutricao'}
                                    description={'Contains my lessons code'}
                                    language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                                    stars={4}
                                    forks={7}
                                />
                            ))}
                        </div>
                    </Repos>
                </RightSide>
            </Main>
        </Container>
    );
}

export default Profile;