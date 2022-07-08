import styles from "./Form.module.css"


const Form = ({ onSubmit, children, title }) => {

    return (
        <form className={styles.myForm} onSubmit={onSubmit}>
            <h3>{title}</h3>
            {children}

            <div>
                <input type="submit" value="SUBMIT" />
            </div>
        </form>
    )

}

export { Form }