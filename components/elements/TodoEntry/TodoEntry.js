import Button from "../Button/Button"
import TextInput from "../TextInput/TextInput"
import styles from './TodoEntry.module.css'

const TodoEntry = props => {

    const onTextChange = (id, value) => {
        console.log('onTextChange: ', id, value)
    }

    function submit() {
        console.log('submit')
    }

    return (
        <div className={styles.todoentry}>
            <TextInput 
                id={'0'}
                label='Enter TODO description'
                onChange={onTextChange}>
            </TextInput>
            <Button
                label='submit'
                onClick={submit}>
            </Button>
        </div>
    )
}

export default TodoEntry