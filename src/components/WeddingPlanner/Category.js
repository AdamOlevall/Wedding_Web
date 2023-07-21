import React from 'react';
import { List, TextField, Button, Paper} from '@material-ui/core';
import { v4 } from 'uuid';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from "./ListItem";
import Progress from "./Progress";


const useStyles = makeStyles({
    button: {
        width: "150px",

    },
    textField: {
        width: "100%",
        marginRight: "12px",
    },
});

const Category = ({category, tasks = [], setTasks, setIsDone, setAssignee, currentCategoryId}) => {
    const classes = useStyles();
    const [textField, setTextField] = React.useState("");
    const taskForThisCategory = tasks.filter(task => task.category === category.id);
    const completedTasks = taskForThisCategory.filter(task => task.isDone);
    const notCompletedTasks = taskForThisCategory.filter(task => !task.isDone);
    return (
        <Paper className={`time-frame-list ${currentCategoryId === category.id ? "active" : ""}`}>
            <div className="time-frame-header-wrapper">
                <p className="time-frame-heading">{category.label}</p>
                <Progress size={50} value={taskForThisCategory.length === 0 ? 0 : Math.round((completedTasks.length/taskForThisCategory.length)*100)} />
            </div>
            <div className="add-task-wrapper">
                <TextField size="small" variant="outlined" className={classes.textField} id="standard-basic" label="Ange uppgift" value={textField} onChange={(e) => setTextField(e.target.value)} />
                <Button
                    variant="contained"
                    className={classes.button}
                    onClick={() => {
                        setTasks([...tasks, {
                            id: v4(),
                            assignee: null,
                            text: textField,
                            isDone: false,
                            category: category.id,
                            created: Date.now(),
                        }]);
                        setTextField("");
                    }}
                    disabled={textField.length === 0}
                >
                    Lägg till
                </Button>
            </div>
             <List>
                {
                    notCompletedTasks.sort((a,b) => b.created - a.created).map(task => (
                        <ListItem key={task.id} task={task} setAssignee={setAssignee} setIsDone={setIsDone}/>
                    ))
                }
                {
                    completedTasks.sort((a,b) => b.created - a.created).map(task => (
                        <ListItem key={task.id} task={task} setAssignee={setAssignee} setIsDone={setIsDone}/>
                    ))
                }
            </List>
        </Paper>
    )
};

export default Category;