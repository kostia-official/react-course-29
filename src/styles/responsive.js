export const breakpoint = '700px';

export const desktopStyles = (content) => `
  @media (min-width: ${breakpoint}) {
    ${content}
  }
`;

export const mobileStyles = (content) => `
  @media (max-width: ${breakpoint}) {
    ${content}
  }
`;
