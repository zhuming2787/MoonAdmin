import { Menu } from "antd";
import { Button, Typography, Checkbox, Tag } from "antd";
import { StarOutlined } from "@ant-design/icons";

import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./Inbox.module.css";
import { Form } from "antd";
import {
  DownloadOutlined,
  InfoCircleOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { useState } from "react";
const { Title } = Typography;

// 模拟邮件数据（完全匹配截图内容）
const mockMails = [
  {
    id: 1,
    sender: "Juliu Jalal",
    label: "Primary",
    subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    isStarred: false,
  },
  {
    id: 2,
    sender: "Minerva Barnett",
    label: "Work",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    isStarred: false,
  },
  {
    id: 3,
    sender: "Peter Lewis",
    label: "Friends",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    isStarred: false,
  },
  {
    id: 4,
    sender: "Anthony Briggs",
    label: "",
    subject: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    isStarred: true,
  },
  {
    id: 5,
    sender: "Clifford Morgan",
    label: "Social",
    subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    isStarred: false,
  },
  {
    id: 6,
    sender: "Cecilia Webster",
    label: "Friends",
    subject: "Always Look On The Bright Side Of Life",
    time: "3:52 PM",
    isStarred: false,
  },
  {
    id: 7,
    sender: "Harvey Manning",
    label: "",
    subject: "Curling Irons Are As Individual As The Women Who Use Them",
    time: "2:30 PM",
    isStarred: true,
  },
  {
    id: 8,
    sender: "Willie Blake",
    label: "Primary",
    subject: "Our Bachelor of Commerce program is ACBSP-accredited.",
    time: "8:38 AM",
    isStarred: false,
  },
  {
    id: 9,
    sender: "Minerva Barnett",
    label: "Work",
    subject: "Get Best Advertiser In Your Side Pocket",
    time: "8:13 AM",
    isStarred: false,
  },
  {
    id: 10,
    sender: "Fanny Weaver",
    label: "",
    subject: "Free Classifieds Using Them To Promote Your Stuff Online",
    time: "7:52 PM",
    isStarred: true,
  },
  {
    id: 11,
    sender: "Olga Hogan",
    label: "Social",
    subject: "Enhance Your Brand Potential With Giant Advertising Blimps",
    time: "4:13 PM",
    isStarred: false,
  },
  {
    id: 12,
    sender: "Lora Houston",
    label: "Friends",
    subject: "Vacation Home Rental Success",
    time: "7:52 PM",
    isStarred: false,
  },
];

// 根据标签获取对应的颜色
const getLabelColor = (label) => {
  switch (label) {
    case "Primary":
      return "green";
    case "Work":
      return "orange";
    case "Friends":
      return "purple";
    case "Social":
      return "blue";
    default:
      return "";
  }
};

const Inbox = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mails, setMails] = useState(mockMails);

  // 切换星标状态
  const toggleStar = (id) => {
    setMails(
      mails.map((mail) =>
        mail.id === id ? { ...mail, isStarred: !mail.isStarred } : mail,
      ),
    );
  };

  const pageItems = [
    // 你的原有pageItems数据...
    {
      key: "Inbox",
      icon: (
        <svg
          width="17"
          height="13"
          viewBox="0 0 17 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.600098"
            y="0.6"
            width="15.2727"
            height="10.9091"
            rx="1.5"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.6263 1L9.70341 5.55564C8.83861 6.22091 7.63439 6.22091 6.76959 5.55564L0.84668 1"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "收件箱",
      extra: "1253",
    },
    {
      key: "Starred",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.585 0.897163L10.8157 5.3165L15.109 5.74183C15.3177 5.75917 15.4973 5.89634 15.5689 6.09313C15.6405 6.28993 15.5911 6.51041 15.4423 6.65783L11.909 10.1598L13.219 14.9185C13.2738 15.1247 13.2025 15.3438 13.0369 15.4783C12.8713 15.6128 12.6423 15.6377 12.4517 15.5418L8.099 13.3865L3.75234 15.5392C3.56175 15.635 3.33268 15.6101 3.16711 15.4756C3.00153 15.3411 2.93025 15.122 2.985 14.9158L4.295 10.1572L0.759003 6.65516C0.610257 6.50774 0.560852 6.28726 0.632467 6.09047C0.704082 5.89367 0.883633 5.75651 1.09234 5.73916L5.38567 5.31383L7.613 0.897163C7.7064 0.714753 7.89407 0.6 8.099 0.6C8.30393 0.6 8.49161 0.714753 8.585 0.897163Z"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "关注",
      extra: "245",
    },
    {
      key: "Sent",
      icon: (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.36671 6.92466C0.948123 6.80658 0.655386 6.42944 0.644826 5.99464C0.634266 5.55984 0.908349 5.16893 1.32071 5.03066L14.7014 0.666665C14.8801 0.608408 15.0764 0.655157 15.2096 0.787718C15.3429 0.92028 15.3907 1.11631 15.3334 1.29533L10.9727 14.6827C10.8351 15.0958 10.4438 15.3706 10.0085 15.3598C9.57314 15.3491 9.19586 15.0554 9.07871 14.636L7.58138 8.41533L1.36671 6.92466Z"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.2102 0.786667L7.58154 8.41533"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "发送",
      extra: "24,532",
    },
    {
      key: "Starred",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.8934 1.3069C14.4347 0.850158 13.8125 0.595672 13.1652 0.600054C12.5179 0.604436 11.8992 0.867323 11.4468 1.33023L1.7801 10.9969L0.600098 15.6002L5.20343 14.4196L14.8701 4.7529C15.3331 4.30063 15.5961 3.68201 15.6005 3.03477C15.6049 2.38752 15.3503 1.76539 14.8934 1.3069Z"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "草稿",
      extra: "09",
    },
    {
      key: "Spam",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.09993 12.5998C7.96186 12.5998 7.84993 12.7118 7.84993 12.8498C7.84993 12.9879 7.96186 13.0998 8.09993 13.0998C8.23801 13.0998 8.34993 12.9879 8.34993 12.8498C8.34993 12.7118 8.23801 12.5998 8.09993 12.5998V12.5998"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.09993 10.5999V5.59985"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.18077 1.27318C8.97836 0.861103 8.55921 0.600006 8.10011 0.600006C7.641 0.600006 7.22185 0.861103 7.01944 1.27318L0.704105 14.1385C0.549555 14.4529 0.568239 14.8248 0.753524 15.1221C0.938808 15.4195 1.26444 15.6001 1.61477 15.5998H14.5854C14.9358 15.6001 15.2614 15.4195 15.4467 15.1221C15.632 14.8248 15.6507 14.4529 15.4961 14.1385L9.18077 1.27318Z"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "Spam",
      extra: "14",
    },
    {
      key: "Important",
      icon: (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6001 12.1216C12.1524 12.1216 12.6001 11.6739 12.6001 11.1216C12.6001 10.5693 12.1524 10.1216 11.6001 10.1216C11.0478 10.1216 10.6001 10.5693 10.6001 11.1216C10.6001 11.6739 11.0478 12.1216 11.6001 12.1216Z"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4494 7.25493L12.7441 8.2236C12.845 8.55721 13.1871 8.75564 13.5268 8.6776L14.5081 8.45026C14.8901 8.3636 15.2839 8.53624 15.479 8.87587C15.674 9.2155 15.6247 9.64266 15.3574 9.92893L14.6708 10.6696C14.4328 10.9255 14.4328 11.3217 14.6708 11.5776L15.3574 12.3183C15.6247 12.6045 15.674 13.0317 15.479 13.3713C15.2839 13.711 14.8901 13.8836 14.5081 13.7969L13.5268 13.5696C13.1871 13.4916 12.845 13.69 12.7441 14.0236L12.4494 14.9883C12.337 15.3634 11.9917 15.6204 11.6001 15.6204C11.2085 15.6204 10.8632 15.3634 10.7508 14.9883L10.4554 14.0196C10.3548 13.6861 10.013 13.4876 9.67344 13.5656L8.69144 13.7929C8.30947 13.8796 7.91566 13.707 7.72058 13.3673C7.5255 13.0277 7.57479 12.6005 7.8421 12.3143L8.52877 11.5736C8.76674 11.3177 8.76674 10.9215 8.52877 10.6656L7.8421 9.92493C7.57479 9.63866 7.5255 9.2115 7.72058 8.87187C7.91566 8.53224 8.30947 8.3596 8.69144 8.44626L9.67344 8.6736C10.013 8.75159 10.3548 8.55311 10.4554 8.2196L10.7508 7.25093C10.8641 6.87604 11.21 6.61991 11.6016 6.62084C11.9932 6.62176 12.3379 6.87952 12.4494 7.25493Z"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15.5241 6.58826C15.1123 3.77024 13.0343 1.48263 10.2687 0.802767C7.5031 0.122906 4.6013 1.18635 2.92991 3.49226C1.25853 5.79817 1.15079 8.88682 2.65743 11.3036L0.600098 15.6216L4.9161 13.5656C5.14334 13.7069 5.37838 13.8354 5.6201 13.9503"
            stroke="#202224"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "重要",
      extra: "18",
    },
    {
      key: "Bin",
      icon: (
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.6 15H4.2C3.53726 15 3 14.4627 3 13.8V3H13.8V13.8C13.8 14.4627 13.2627 15 12.6 15Z"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.59971 11.4V6.60001"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.1998 11.4V6.60001"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M0.600098 3.00001H16.2001"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.1999 0.600006H6.5999C5.93716 0.600006 5.3999 1.13726 5.3999 1.80001V3.00001H11.3999V1.80001C11.3999 1.13726 10.8626 0.600006 10.1999 0.600006Z"
            stroke="black"
            stroke-width="1.2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      label: "垃圾",
      extra: "9",
    },
  ];
  const handleMenuClick = (e) => {
    console.log(`${e.key}被点击了`);
  };

  return (
    <div>
      <Title level={3}>收件箱</Title>
      <main className="flex gap-6">
        <div
          style={{
            border: "1px solid #e3e3e3",
            borderRadius: "16px",
            height: "840px",
            width: "286px",
            display: "flex",
            flexDirection: "column",
            padding: "24px",
            backgroundColor: "white",
          }}
        >
          <Button type="primary" style={{ width: "238px", height: "43px" }}>
            + Compose
          </Button>
          <Title level={4} style={{ margin: "16px 0" }}>
            My Email
          </Title>

          <Menu
            theme="light"
            mode="inline"
            styles={{
              item: {
                width: "238px",
              },
            }}
            className={styles.customMenu}
            selectedKeys={[location.pathname]}
            style={{
              padding: "0px",
              border: "0px",
              margin: "0px",
            }}
            items={pageItems}
            onClick={handleMenuClick}
          />

          <Title level={4} style={{ margin: "16px 0" }}>
            Label
          </Title>

          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "28px",
              gap: "14px",
            }}
          >
            <Checkbox>Primary</Checkbox>
            <Checkbox>Social</Checkbox>
            <Checkbox>Work</Checkbox>
            <Checkbox>Friends</Checkbox>
          </Form>
          <button
            style={{
              color: "gray",
              fontWeight: "bold",
              position: "relative",
              top: "16px",
              right: "30px",
            }}
          >
            + Create New Label
          </button>
        </div>

        {/* 右边是具体信息 */}
        <div
          style={{
            backgroundColor: "white",
            border: "1px solid #e3e3e3",
            borderRadius: "16px",
            width: "834px",
            height: "840px",
            padding: "24px",
          }}
        >
          <header
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={styles.search}>
              <div className={styles.placeholder}></div>
              <input
                type="text"
                className={styles.search__input}
                placeholder="Search..."
              />
              <button className={styles.search__button}>
                <svg
                  className={styles.search__icon}
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>

            <div className="flex p-1 border rounded-lg">
              <Button
                type="text"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14.2222 0H1.76889C0.786667 0 0.00888889 0.795556 0.00888889 1.77778L0 14.2222C0 15.2044 0.786667 16 1.76889 16H14.2222C15.2044 16 16 15.2044 16 14.2222V1.77778C16 0.795556 15.2044 0 14.2222 0ZM14.2222 10.6667H10.6667C10.6667 12.1378 9.47111 13.3333 8 13.3333C6.52889 13.3333 5.33333 12.1378 5.33333 10.6667H1.76889V1.77778H14.2222V10.6667ZM9.77778 6.22222H11.5556L8 9.77778L4.44444 6.22222H6.22222V3.55556H9.77778V6.22222Z"
                      fill="#202224"
                    />
                  </svg>
                }
                className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors border-none"
                onClick={() => console.log("下载")}
              />

              <Button
                type="text"
                icon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 0C3.584 0 0 3.584 0 8C0 12.416 3.584 16 8 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 8 0ZM7.2 12V7.2H8.8V12H7.2ZM7.2 4V5.6H8.8V4H7.2Z"
                      fill="#202224"
                    />
                  </svg>
                }
                className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors border-none"
                onClick={() => console.log("查看信息")}
              />

              <Button
                type="text"
                icon={
                  <svg
                    width="13"
                    height="16"
                    viewBox="0 0 13 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.33333 0.888889H12.4444V2.66667H0V0.888889H3.11111L4 0H8.44444L9.33333 0.888889ZM2.66667 16C1.68889 16 0.888889 15.2 0.888889 14.2222V3.55556H11.5556V14.2222C11.5556 15.2 10.7556 16 9.77778 16H2.66667Z"
                      fill="black"
                    />
                  </svg>
                }
                className="bg-white rounded-lg p-2 hover:bg-gray-50 transition-colors border-none"
                onClick={() => console.log("删除")}
              />
            </div>
          </header>

          {/* 邮件列表渲染（新增部分） */}
          <main className="mt-4 divide-y">
            {mails.map((mail) => (
              <div
                key={mail.id}
                className="flex items-center justify-between py-3 hover:bg-gray-50 cursor-pointer"
              >
                {/* 左侧复选框 + 星标 */}
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <StarOutlined
                    onClick={() => toggleStar(mail.id)}
                    className={`cursor-pointer ${
                      mail.isStarred
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </div>

                {/* 中间：发件人 + 标签 + 主题 */}
                <div className="flex items-center gap-3 flex-1 ml-2">
                  <span className="font-medium w-32">{mail.sender}</span>
                  {mail.label && (
                    <Tag color={getLabelColor(mail.label)}>{mail.label}</Tag>
                  )}
                  <span className="text-gray-700 truncate">{mail.subject}</span>
                </div>

                {/* 右侧时间 */}
                <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
                  {mail.time}
                </span>
              </div>
            ))}
          </main>
        </div>
      </main>
    </div>
  );
};
export default Inbox;
