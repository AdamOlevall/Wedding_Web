import React from 'react';
import { Paper, LinearProgress } from '@material-ui/core';
import moment from 'moment';
import Category from './Category';
import './style.css';

const categories =  [
    {
        id: 1,
        label: "18 mån - 12 mån",
        start: [2023, 1, 25],
        end: [2023, 7, 24],

    },
    {
        id: 2,
        label: "12 mån - 8 mån",
        start: [2023, 7, 25],
        end: [2023, 11, 24],
    },
    {
        id: 3,
        label: "8 mån - 6 mån",
        start: [2023, 11, 25],
        end: [2024, 1, 24],
    },
    {
        id: 4,
        label: "6 mån - 4 mån",
        start:  [2024, 1, 25],
        end: [2024, 3, 24],
    },
    {
        id: 5,
        label: "4 mån - 2 mån",
        start: [2024, 3, 25],
        end: [2024, 5, 24],
    },
    {
        id: 6,
        label: "2 mån - 1 vecka",
        start:[2024, 5, 25],
        end: [2024, 7, 17],
    },
    {
        id: 7,
        label: "Bröllopsveckan",
        start: [2024, 7, 18],
        end: [2024, 7, 24],
    },
    {
        id: 8,
        label: "Efter bröllopsdagen",
        start: [2024, 7, 25],
        end: [2024, 11, 31],
    }
];

const getCategoryIdBasedOnCurrentDate = () => {
    var categoryId;
    categories.every(category => {
        const currentDate = moment();
        const startDate = moment(category.start);
        const endDate = moment(category.end);
        if (currentDate.isBetween(startDate, endDate) || currentDate.isSame(startDate) || currentDate.isSame(endDate)) {
            categoryId = category.id;
          return false;
        }
        return true;
      });

    return categoryId;
};

const WeddingPlannerComponent = () => {
    const [tasks, setTasks] = React.useState([]);
    const completedTasks = tasks.filter(task => task.isDone);

    const setIsDone = (isDone, id) => {
        const taskToUpdate = tasks.find(task => task.id === id) || {};
        const updatedTask = {
            ...taskToUpdate,
            isDone: isDone,
        }
        const newList = [...tasks.filter(task => task.id !== id), updatedTask];
        setTasks(newList);

    };

    const setAssignee = (assignee, id) => {
        const taskToUpdate = tasks.find(task => task.id === id) || {};
        const updatedTask = {
            ...taskToUpdate,
            assignee: assignee,
        }
        const newList = [...tasks.filter(task => task.id !== id), updatedTask];
        setTasks(newList);
    };
    const currentCategoryId = getCategoryIdBasedOnCurrentDate();
    const currentCategory = categories.find(category => category.id === currentCategoryId);
    const taskForCurrentCategory = tasks.filter(task => task.category === currentCategoryId);
    const completedTasksForCurrentCategory = taskForCurrentCategory.filter(task => task.isDone);
    return (
        <div className="background--wedding-planer">
            <div className="layer--wedding-planer"></div>   
            <div className="content--wedding-planer">
                <Paper className="overview--wedding-planer">
                    <div className="overview-row--wedding-planer">
                        <p className="overview-header--wedding-planer">Övergripande status: {completedTasks.length}/{tasks.length} </p>
                        <LinearProgress variant="determinate" value={tasks.length === 0 ? 0 : Math.round((completedTasks.length/tasks.length)*100)} />
                    </div>
                    <div className="overview-row--wedding-planer">
                        <p className="current-period-header--wedding-planer">Nuvarande period är {currentCategory.label}. Status {completedTasksForCurrentCategory.length}/{taskForCurrentCategory.length} </p>
                        <LinearProgress variant="determinate" value={taskForCurrentCategory.length === 0 ? 0 : Math.round((completedTasksForCurrentCategory.length/taskForCurrentCategory.length)*100)} />
                    </div>
                </Paper>
            </div>
                <div className="content--wedding-planer">
                {
                    categories.map(category=>(
                        <Category
                            key={category.id}
                            category={category}
                            tasks={tasks}
                            setTasks={setTasks}
                            setIsDone={setIsDone}
                            setAssignee={setAssignee}
                            currentCategoryId={currentCategoryId}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default WeddingPlannerComponent;