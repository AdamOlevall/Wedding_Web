import React from 'react';
import {Checkbox, Button, Dialog, Chip} from '@material-ui/core';
import './style.css';

const names = ["Adam", "Matilda", "Lovisa", "Alexis", "Majsan", "Mix", "Sanna", "Nicke", "Andreas", "Maja", "Robin"];
const ListItemComponent = ({task, setAssignee, setIsDone}) => {
    const [isModalOpen, setIsModalOpen] = React.useState(false);
    const handleChange = (event) => {
        setIsDone(event.target.checked, task.id);
      };
    return (
        <>
            <div className={`list-item ${task.isDone ? "done" : ""}`}>
                <p className="list-item-text">{task.text}</p>
                {
                    task.assignee ?
                    <Chip label={task.assignee} onClick={() => setIsModalOpen(true)} color="primary"/> :
                    <Button
                        variant="contained"
                        onClick={() => setIsModalOpen(true)}
                        size="small"
                    >
                        Tilldela
                    </Button>
                }
                <Checkbox
                    checked={task.isDone}
                    onChange={handleChange}
                    color="primary"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                    disabled={!task.assignee}
                />
            </div>
            {isModalOpen &&
            <Dialog onClose={() => setIsModalOpen(false)} open={isModalOpen} PaperProps={{style:{padding: "12px"}}}>
                {names.map(name => (
                    <p
                        key={name}
                        className="responsibility-name"
                        onClick={() => {
                            setAssignee(name, task.id);
                            setIsModalOpen(false);
                        }}
                    >
                        {name}
                    </p>
                ))}
            </Dialog>}
        </>
    );
};

export default ListItemComponent;