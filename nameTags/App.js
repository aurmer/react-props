function renderNameTags (name_tag) {
  return <NameTag name={name_tag}/>
}

// Render the name tags using React!
const App = (props) => {
    let { nameTags } = props
    const nametag_array = nameTags.map(renderNameTags)
    return (nametag_array)
}

// CHALLENGE: Write a separate NameTag component for use in the App component
// TIP: Use props to pass the name to each NameTag component
const NameTag = (props) => {
  return <div>{props.name}</div>
}
