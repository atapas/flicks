
const getTopicColor = name => {
    const colors = {
        javascript: {
            bg: '#e3fa06de',
            fg: '#000000'
        },
        git: {
            bg: '#ffffde',
            fg: '#000000'
        },
        android:{
            bg: '#0684fade',
            fg: '#FFFFFF'
        }
    }
    
    return colors[name.toLowerCase()];
}

export { getTopicColor };