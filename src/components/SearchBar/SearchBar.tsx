import styles from './SearchBar.module.css'

import plus from '../../assets/plus.svg'

export function SearchBar() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <input type="text" placeholder="Adicione uma nova tarefa" />
                <button>Criar <span><img src={plus} alt="add" /></span></button>                
            </div>
		</div>
    )
}