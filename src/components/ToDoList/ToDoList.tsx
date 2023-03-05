import styles from './ToDoList.module.css'

export function ToDoList() {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <div className={styles.choresCounter}>
                    <p>Tarefas criadas</p>
                    <span> 0 </span>
                </div>

                <div className={styles.choresCounter}>
                    <p className={styles.choresDone}>Concluídas</p>
                    <span> 0 </span>
                </div>
            </header>

            <article className={styles.toDoList}>
                
            </article>
        </div>
    )
}