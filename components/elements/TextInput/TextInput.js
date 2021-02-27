import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './TextInput.module.css'

export default class TextInput extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        locked: PropTypes.bool,
        focussed: PropTypes.bool,
        value: PropTypes.string,
        error: PropTypes.string,
        label: PropTypes.string,
        onChange: PropTypes.func,
    }

    static defaultProps = {
        locked: false,
        focussed: false,
        value: '',
        error: '',
        label: '',
        predicted: '',
        onChange: () => '',
    }

    constructor(props) {
        super(props)

        this.state = {
            focussed: (props.locked && props.focussed) || false,
            value: props.value || '',
            error: props.error || '',
            label: props.label || '',
        }
    }

    onChange = event => {
        const { id } = this.props
        const value = event.target.value
        this.setState({ value, error: '' })
        return this.props.onChange(id, value)
    }

    render() {
        const { focussed, value, error, label } = this.state
        const { id, type, locked } = this.props

        return (
            <div className={styles.textinput}>
                <span>
                    <input
                        id={id}
                        type='text'
                        value={value}
                        placeholder={label}
                        onChange={this.onChange}
                    />
                </span>
            </div>
        )
    }
}