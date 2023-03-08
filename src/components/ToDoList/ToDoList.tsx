import { useState } from 'react'

import { SearchBar } from '../SearchBar/SearchBar'
import { ToDoItem } from '../ToDoItem/ToDoItem'

import styles from './ToDoList.module.css'

import report from '../../assets/report.svg'

interface toDoItemProps {
    id: number, 
    content: string, 
    done: boolean
}

export function ToDoList() {
    const [toDoList, setToDoList] = useState<Array<toDoItemProps>>([])
    const [toDoItemId, setToDoItemId] = useState(toDoList.length)
    const [createdItems, setCreatedItems] = useState(0)
    const [doneItems, setDoneItems] = useState(0)

    const handleItemCreation = (content: string) => {
        const newToDoList = [...toDoList, 
            {
                id: toDoItemId + 1, 
                content: content, 
                done: false
            }
        ]

        setToDoList(newToDoList)

        setToDoItemId(toDoItemId + 1)
        updateCreatedAndDoneItems(newToDoList)
    }

    const handleCheckChange = (id: number, checked: boolean) => {
        const toDoListCheckedById = toDoList.map(item => {
            return {
                id: item.id, 
                content: item.content, 
                done: item.id === id ? checked : item.done
            }
        })
    
        setToDoList(toDoListCheckedById)
        updateCreatedAndDoneItems(toDoListCheckedById)
    }

    const handleDelete = (id: number) => {
        const toDoListExcludingById = toDoList.filter(item => {
            return item.id !== id
        })
    
        setToDoList(toDoListExcludingById)
        updateCreatedAndDoneItems(toDoListExcludingById)
    }

    const updateCreatedAndDoneItems = (itemsList: Array<toDoItemProps>) => {
        
        setCreatedItems(itemsList.length)
        setDoneItems(itemsList.filter(x => x.done === true).length)
    }

    return (
        <>
            <SearchBar onAddNewItem={handleItemCreation} />
            
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <div className={styles.choresCounter}>
                        <p>Tarefas criadas</p>
                        <span> {createdItems} </span>
                    </div>

                    <div className={styles.choresCounter}>
                        <p className={styles.choresDone}>Concluídas</p>
                        <span> {doneItems} </span>
                    </div>
                </header>

                <article className={styles.toDoList}>
                    {
                        toDoList.length === 0
                        ?
                        <div className={styles.emptyList}>
                            <img src={report} alt="report" />

                            <div>
                                <p>Você ainda não tem tarefas cadastradas</p>
                                <p>Crie tarefas e organize seus itens a fazer</p>
                            </div>
                        </div>
                        :
                        <div className={styles.filledList}>
                            {
                                toDoList.map(item => {
                                    return (
                                        <ToDoItem 
                                            key={item.id}
                                            id={item.id}
                                            content={item.content}
                                            onChange={handleCheckChange}
                                            onDelete={handleDelete}
                                        />
                                    )
                                })
                            }
                        </div>
                    }                
                </article>
            </div>
        </>
    )
}