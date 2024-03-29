import React from 'react';
import { Paper, LinearProgress, CircularProgress } from '@material-ui/core';
import moment from 'moment';
import { postTask, getTasks, addAssignee, toggleCompleteTask } from '../../api';
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
    const [isLoading, setIsLoading] = React.useState(false);

   React.useEffect(() => {
    startLoading();
        getTasks()
        .then(data => {
            setTasks(data);
            finishLoading();
        })
    }, []);

    const completedTasks = tasks.filter(task => task.isDone);

    const startLoading = () => {
        setIsLoading(true);
        document.body.style.overflow = 'hidden'
    };

    const finishLoading = () => {
        setIsLoading(false);
        document.body.style.overflow = 'unset'
    };

    const setAssignee = (assignee, id) => {
        startLoading();
        addAssignee({id, assignee}).then((res) => {
            if (res.status === 200) {
                getTasks().then(data => {
                    setTasks(data);
                    finishLoading();
                })
            } else {
                finishLoading();
            }
        });
    };

    const addTask = (task) => {
        startLoading();
        postTask(task).then((res) => {
            if (res.status === 200) {
                getTasks().then(data => {
                    setTasks(data);
                    finishLoading();
                })
            } else {
                finishLoading();
            }
        });
    };

    const setCompleteTask = (isDone, id) => {
        startLoading();
        toggleCompleteTask({id, isDone}).then((res) => {
            if (res.status === 200) {
                getTasks().then(data => {
                    setTasks(data);
                    finishLoading();
                })
            } else {
                finishLoading();
            }
        });
    };

    const currentCategoryId = getCategoryIdBasedOnCurrentDate();
    const currentCategory = categories.find(category => category.id === currentCategoryId);
    const taskForCurrentCategory = tasks.filter(task => task.category === currentCategoryId);
    const completedTasksForCurrentCategory = taskForCurrentCategory.filter(task => task.isDone);
    return (
        <>
            <div className="background--wedding-planer"> 
            <div className="scroll-area--wedding-planer"> 
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
                                addTask={addTask}
                                setCompleteTask={setCompleteTask}
                                setAssignee={setAssignee}
                                currentCategoryId={currentCategoryId}
                            />
                        ))
                    }
                </div>
            </div>
            </div>
            {isLoading && 
            <div className="loader--wedding-planer">
                <CircularProgress size={100}/>    
            </div>
            }
        </>
    );
};

export default WeddingPlannerComponent;