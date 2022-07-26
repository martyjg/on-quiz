import styles from './styles'
import { useFela } from 'react-fela'

const BoxedAction = ({
  ele,
  extend,
  ...props
}) => {
  const { css } = useFela()
  const Component = props.ele ? props.ele : 'div'

  return (
    <Component className={css(styles.boxedAction, extend)} {...props}>
      {props.children}
    </Component>
  )
}

export default BoxedAction