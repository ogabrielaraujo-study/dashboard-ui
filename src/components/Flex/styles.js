import styles from 'styled-components'

export const Div = styles.div`
	display: flex;
	align-items: ${props => props.align};
	justify-content: ${props => props.justify};
`
