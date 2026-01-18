import { useState } from "react";
import { Button, Checkbox, List } from "antd";
import {
  StarOutlined,
  StarFilled,
  CloseOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import styles from "./ToDo.module.css";

const ToDo = () => {
  // 模拟任务数据
  const [tasks, setTasks] = useState([
    { id: 1, title: "Meeting with CEO", completed: false, starred: false },
    {
      id: 2,
      title: "Pick up kids from school",
      completed: false,
      starred: true,
    },
    { id: 3, title: "Shopping with Brother", completed: false, starred: false },
    { id: 4, title: "Review with HR", completed: true, starred: false },
    { id: 5, title: "Going to Dia's School", completed: false, starred: false },
    { id: 6, title: "Check design files", completed: false, starred: true },
    { id: 7, title: "Update File", completed: false, starred: false },
  ]);

  // 切换任务完成状态
  const handleCheckboxChange = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // 切换星标状态
  const handleStarChange = (taskId, e) => {
    e.stopPropagation(); // 防止触发复选框事件
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, starred: !task.starred } : task,
      ),
    );
  };

  // 删除任务
  const handleDeleteTask = (taskId, e) => {
    e.stopPropagation();
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Title level={3}>To-Do List</Title>
        <Button type="primary">Add New Task</Button>
      </header>

      {/* 任务列表 */}
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item
            className={`${styles.taskItem} ${task.completed ? styles.completedTask : ""}`}
          >
            <Checkbox
              style={{
                marginLeft: "20px",
              }}
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
              className={styles.taskCheckbox}
            />
            <span className={styles.taskTitle}>{task.title}</span>
            <div className={styles.taskActions}>
              {task.starred ? (
                <StarFilled
                  className={styles.starIconActive}
                  onClick={(e) => handleStarChange(task.id, e)}
                />
              ) : (
                <StarOutlined
                  className={styles.starIcon}
                  onClick={(e) => handleStarChange(task.id, e)}
                />
              )}
              {task.completed ? (
                <DeleteOutlined
                  className={styles.deleteIconCompleted}
                  onClick={(e) => handleDeleteTask(task.id, e)}
                />
              ) : (
                <CloseOutlined
                  className={styles.deleteIcon}
                  onClick={(e) => handleDeleteTask(task.id, e)}
                />
              )}
            </div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ToDo;
