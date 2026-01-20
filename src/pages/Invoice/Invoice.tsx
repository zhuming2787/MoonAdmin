import { Button, Table } from "antd";
import Title from "antd/es/typography/Title";
import styles from "./Invoice.module.css";
const columns = [
  {
    title: "Serial No.",
    dataIndex: "serialno",
    key: "serialno",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Base Cost",
    dataIndex: "basecost",
    key: (text) => <p>${text}</p>,
  },
  {
    title: "Total Cost",
    dataIndex: "totalcost",
    key: (text) => <p>${text}</p>,
  },
];

const data = [
  {
    key: "1",
    serialno: "1",
    description: "Children Toy",
    quantity: "2",
    basecost: 20,
    totalcost: 80,
  },
  {
    key: "2",
    serialno: "2",
    description: "Makeup",
    quantity: "2",
    basecost: 50,
    totalcost: 100,
  },
];

const Invoice = () => {
  return (
    <div>
      <Title level={3}>Invoice</Title>

      {/* 这里是白色背景的卡片 */}
      <div className={styles.container}>
        {/* 头部分成3个部分 */}
        <header className={styles.header}>
          <div>
            <p>Invoice From:</p>
            <strong>Virginia Walker</strong>
            <p>9694 Krajcik Locks Suite 635</p>
          </div>
          <div>
            <p>Invoice To:</p>
            <strong>Austin Miller</strong>
            <p>Brookview</p>
          </div>
          <div>
            <p>Invoice Date : 1 Mon 2026</p>
            <p>Due Date : 25 Dec 2026</p>
          </div>
        </header>

        {/* 列表渲染 */}
        <main>
          <Table columns={columns} dataSource={data} />
        </main>

        {/* 计算Total = $总和 */}
        <strong className={styles.total}>Total = $4680</strong>

        {/* 第一个按钮是打印，第二个按钮是Send发送 */}
        <div className={styles.btns}>
          <Button
            style={{ height: "54px", width: "50px" }}
            className={styles.btn}
          >
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.6 0H14.4V3.6H3.6V0ZM2.7 4.5H15.3C16.794 4.5 18 5.706 18 7.2V12.6H14.4V16.2H3.6V12.6H0V7.2C0 5.706 1.206 4.5 2.7 4.5ZM5.4 14.4H12.6V9.9H5.4V14.4ZM15.3 8.1C14.805 8.1 14.4 7.695 14.4 7.2C14.4 6.705 14.805 6.3 15.3 6.3C15.795 6.3 16.2 6.705 16.2 7.2C16.2 7.695 15.795 8.1 15.3 8.1Z"
                fill="#202224"
              />
            </svg>
          </Button>
          <Button
            style={{ height: "54px", width: "173px" }}
            type="primary"
            className={styles.btn}
          >
            <strong>Send</strong>
            <Button
              style={{
                height: "38px",
                width: "46px",
                textAlign: "right",
                backgroundColor: "#6E9AFF",
                borderStyle: "none",
                position: "relative",
                left: "20px",
              }}
              className={styles.btn}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.505108 7.31596L5.45038 8.55227L6.6867 13.4976C6.83853 14.1048 7.66798 14.187 7.93596 13.6213L13.936 0.954585C14.2041 0.388468 13.6142 -0.201458 13.0481 0.0667023L0.381407 6.0667C-0.184318 6.33468 -0.102185 7.16413 0.505108 7.31596ZM6.16182 7.35577L2.6357 6.47423L11.9319 2.07078L7.52842 11.367L6.64689 7.84084C6.58718 7.60198 6.40068 7.41548 6.16182 7.35577Z"
                  fill="white"
                />
                <mask
                  id="mask0_0_4869"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="15"
                  height="15"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.505108 7.31596L5.45038 8.55227L6.6867 13.4976C6.83853 14.1048 7.66798 14.187 7.93596 13.6213L13.936 0.954585C14.2041 0.388468 13.6142 -0.201458 13.0481 0.0667023L0.381407 6.0667C-0.184318 6.33468 -0.102185 7.16413 0.505108 7.31596ZM6.16182 7.35577L2.6357 6.47423L11.9319 2.07078L7.52842 11.367L6.64689 7.84084C6.58718 7.60198 6.40068 7.41548 6.16182 7.35577Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_0_4869)"></g>
              </svg>
            </Button>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
