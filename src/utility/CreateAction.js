const CreateAction = (actionType, extraProps) => {
    return {
        type: actionType,
        ...extraProps
    }
}

export default CreateAction;