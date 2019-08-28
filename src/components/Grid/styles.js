import styles from 'styled-components';

export const Container = styles.div`
	display: grid;
	grid-template-columns: repeat(${props => props.cols}, 1fr);
	grid-template-rows: repeat(${props => props.rows}, 1fr);
	grid-gap: ${props => (props.gap) ? props.gap + 'px' : '30px'};
`;
