import { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'

class Button extends Component {

    static propTypes = {
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
    }

    handleClick() {
        this.props.onClick()
    }

    render() {
        return (
            <div className={styles.button}>
                <input 
                    type='button'
                    value={this.props.label}
                    onClick={this.handleClick.bind(this)}>
                </input>
            </div>
        )
    }

}

export default Button