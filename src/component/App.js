import React from 'react'
import PropTypes from 'prop-types'
import '../../css/style.css'
const App = ({firstName, lastName}) => <p>Hello {firstName} {lastName}</p>

App.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: (props, propName) =>
        typeof props[propName] !== 'string' ?
            new Error('must be a string') :
                (props[propName].length <= 0 ?
                    new Error('must not be blank') : null)
}

App.defaultProps = {
    firstName: 'Rizka',
    lastName: 'Julia'
}
export default App