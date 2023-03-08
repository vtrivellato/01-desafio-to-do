import { useState, ChangeEvent } from 'react'

import styles from './SearchBar.module.css'

import plus from '../../assets/plus.svg'

interface SearchBarProps {
    onAddNewItem: Function
}

export function SearchBar({ onAddNewItem }: SearchBarProps) {
    const [newItemContent, setNewItemContent] = useState('')

    const handleNewItemChanged = (event: ChangeEvent<HTMLInputElement>) => {
        const content = event?.target.value

        setNewItemContent(content)
    }

    const handleNewItemCreation = () => {
        onAddNewItem(newItemContent)

        setNewItemContent('')
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <input 
                    type="text" 
                    placeholder="Adicione uma nova tarefa" 
                    onChange={handleNewItemChanged}
                    value={newItemContent}
                />

                <button onClick={handleNewItemCreation}>
                    <div>
                        <p>Criar</p>
                        <img src={plus} alt="add" />
                    </div>
                </button>                
            </div>
		</div>
    )
}