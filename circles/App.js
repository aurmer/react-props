function renderCircle (circle) {
  return <Circle radius={circle.radius} color={circle.color} />
}

// Render the circles using React!
const App = (props) => {
    const { circles } = props
    const circle_array = circles.map(renderCircle)
    return (
        circle_array
    )
}

const Circle = (props) => {
  const circle_styles = {
    width: ((props.radius * 2) + "px"),
    height: ((props.radius * 2) + "px"),
    backgroundColor: props.color,
    clipPath: `circle(${props.radius}px)`
  }
  return <div style={circle_styles}></div>
};
