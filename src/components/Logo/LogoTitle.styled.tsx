import styled from "styled-components";

export const LogoText = styled.h1<{ color: string }>`
	color: ${({ color }): string => color};
`;
