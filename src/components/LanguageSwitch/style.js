import styled from 'styled-components';

export const LanguageSwitchWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    select {
        background: transparent;
        border-radius: 5px;
        color: ${({ theme }) => theme.color};
        cursor: pointer;
    }

    img {
        margin-left: 5px;
        width: 20px;
    }
`;
LanguageSwitchWrapper.displayName = 'LanguageSwitch';
