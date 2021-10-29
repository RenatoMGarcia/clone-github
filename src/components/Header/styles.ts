import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa'

export const Container = styled.div`
    display: flex;
    align-items: center;
    background: var(--header);
    padding: 18px 16px;
`;

export const GithubLogo = styled(FaGithub)`
    fill: var(--logo);
    width: 35px;
    height: 35px;
    flex-shrink: 0;
    margin-left: 10px;
`;

export const SearchForm = styled.form`
    padding-left: 20px;
    width: 30%;

    input {
        background: #0d1117;
        outline: none;
        border-radius: 6px;
        padding: 7px 12px;
        width: 50%;

        &:focus {
            width: 500px;
        }

        transition: width .2s ease-out, color 0.2s ease-out;
    }
`;


