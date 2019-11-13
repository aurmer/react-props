const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

function deepCopy (state) {
  return JSON.parse(JSON.stringify(state))
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, color, radius } = action;
    // ACTION: Add a random circle
    if (type === "ADD_CIRCLE") {
        return [
            ...state,
            { radius, color }
        ]
    }
    else if (type === "REMOVE_LAST_CIRCLE") {
      let newState = deepCopy(state)
      newState.pop()
      return newState
    }

    return state;
}
