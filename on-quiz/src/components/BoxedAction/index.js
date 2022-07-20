import './styles.css'

const BoxedAction = (props) => {
  const Component = props.ele ? props.ele : 'div'
  const backgroundColor = props.backgroundColor ? props.backgroundColor : ''
  return (
    <Component className={`boxed-action ${backgroundColor}`} {...props}>
      {props.children}
    </Component>
  )
}

export default BoxedAction