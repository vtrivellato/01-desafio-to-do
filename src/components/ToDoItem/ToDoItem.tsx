import { useState } from 'react';

import styles from './ToDoItem.module.css'

import trash from '../../assets/trash.svg'

interface ToDoItemProps {
    id: number,
    content: string,
    onChange: Function,
    onDelete: Function
}

export function ToDoItem({ id, content, onChange, onDelete }: ToDoItemProps) {
    const [checked, setChecked] = useState(false);

    const handleCheckedItem = () => {
        setChecked(!checked);

        onChange(id, !checked);
    }

    return (
        <div className={styles.wrapper}>
            <input 
                type="checkbox" 
                className={!checked ? styles.itemUnchecked : styles.itemChecked} 
                onChange={handleCheckedItem} 
            />

            <p className={!checked ? styles.textUnchecked : styles.textChecked} >
                {content}
            </p>

            <img 
                src={trash} 
                alt="add" 
                onClick={() => onDelete(id)} 
            />
		</div>
    )
}