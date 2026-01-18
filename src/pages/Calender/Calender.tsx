import { Button, List, Avatar, Calendar } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Title from "antd/es/typography/Title";
import moment from "moment";
import styles from "./Calender.module.css";

// 模拟事件数据
const events = [
  {
    id: 1,
    title: "Design Conference",
    time: "Today 07:19 AM",
    location: "56 Davion Mission Suite 157, Meaghanberg",
    avatar: "https://via.placeholder.com/40",
    attendees: [
      "https://picsum.photos/id/1005/30/30",
      "https://via.placeholder.com/30",
      "https://via.placeholder.com/30",
    ],
    attendeeCount: 15,
    date: moment("2019-10-03"),
  },
  {
    id: 2,
    title: "Weekend Festival",
    time: "16 October 2019 at 5.00 PM",
    location: "853 Moore Flats Suite 158, Sweden",
    avatar: "https://picsum.photos/id/1068/40/40",
    attendees: [
      "https://picsum.photos/id/1012/30/30",
      "https://picsum.photos/id/1025/30/30",
      "https://picsum.photos/id/1074/30/30",
    ],
    attendeeCount: 20,
    date: moment("2019-10-16"),
  },
  {
    id: 3,
    title: "Glastonbury Festival",
    time: "20-22 October 2019 at 8.00 PM",
    location: "646 Walter Road Apt. 571, Turks and Caicos Islands",
    avatar: "https://picsum.photos/id/1039/40/40",
    attendees: [
      "https://picsum.photos/id/1027/30/30",
      "https://picsum.photos/id/1075/30/30",
      "https://picsum.photos/id/1083/30/30",
    ],
    attendeeCount: 14,
    date: moment("2019-10-20"),
    endDate: moment("2019-10-22"),
    anotherDate: moment("2019-10-25"),
  },
  {
    id: 4,
    title: "Ultra Europe 2019",
    time: "25 October 2019 at 10.00 PM",
    location: "506 Satterfield Tunnel Apt. 963, San Marino",
    avatar: "https://picsum.photos/id/1048/40/40",
    attendees: [
      "https://picsum.photos/id/1059/30/30",
      "https://picsum.photos/id/1062/30/30",
      "https://picsum.photos/id/1071/30/30",
    ],
    attendeeCount: 42,
    date: moment("2019-10-25"),
  },
];

// 自定义日历单元格渲染
const renderDateCell = (value) => {
  const cellEvents = events.filter((event) => {
    const eventStart = event.date;
    const eventEnd = event.endDate || event.date;
    return (
      value.isBetween(eventStart, eventEnd, "day", "[]") ||
      (event.anotherDate && value.isSame(event.anotherDate, "day"))
    );
  });

  return (
    <div className={styles.dateCell}>
      {cellEvents.map((event) => (
        <div
          key={event.id}
          className={styles.eventBar}
          style={{
            backgroundColor:
              event.title === "Design Conference"
                ? "#e6f7ff"
                : event.title === "Weekend Festival"
                  ? "#fff2e6"
                  : event.title === "Glastonbury Festival"
                    ? "#fff7e6"
                    : "#f6ffed",
            color: "#595959",
            fontSize: "12px",
            padding: "2px 4px",
            borderRadius: "2px",
            marginBottom: "2px",
          }}
        >
          {event.title}
        </div>
      ))}
    </div>
  );
};

const Calender = () => {
  return (
    <div className={styles.container}>
      <Title level={3}>日历</Title>
      <main className={styles.main}>
        {/* 左侧事件列表 */}
        <div className={styles.eventListContainer}>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className={styles.addEventButton}
          >
            Add New Event
          </Button>
          <Title level={5} className={styles.eventListTitle}>
            You are going to
          </Title>
          <List
            dataSource={events}
            renderItem={(item) => (
              <List.Item className={styles.eventItem}>
                <List.Item.Meta
                  avatar={<Avatar src={item.avatar} />}
                  title={<div className={styles.eventTitle}>{item.title}</div>}
                  description={
                    <div className={styles.eventMeta}>
                      <div>{item.time}</div>
                      <div className={styles.eventLocation}>
                        {item.location}
                      </div>
                      <div className={styles.attendees}>
                        {item.attendees.map((src, index) => (
                          <Avatar
                            key={index}
                            src={src}
                            size={24}
                            className={styles.attendeeAvatar}
                          />
                        ))}
                        <span className={styles.attendeeCount}>
                          {item.attendeeCount}+
                        </span>
                      </div>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
          <Button className={styles.seeMoreButton}>See More</Button>
        </div>

        {/* 右侧日历视图 */}
        <div className={styles.calendarContainer}>
          <Calendar
            value={moment("2019-10-01")}
            dateCellRender={renderDateCell}
            mode="month"
            className={styles.calendar}
          />
        </div>
      </main>
    </div>
  );
};

export default Calender;
