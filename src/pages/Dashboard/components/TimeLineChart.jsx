import { Card } from "antd";
import { Line } from "@ant-design/charts";
import dayjs from "dayjs"; // 用于时间格式化，如果需要
import { Typography } from "antd";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import { createStyles } from "antd-style";
import { Button, Dropdown, Flex, Space } from "antd";
const { Title } = Typography;
const useStyles = createStyles(({ token }) => ({
  root: {
    backgroundColor: token.colorFillAlter,
    border: `1px solid ${token.colorBorder}`,
    borderRadius: token.borderRadius,
  },
}));
const items = [
  {
    key: "1",
    label: "1 月",
    danger: true,
  },
  {
    key: "2",
    label: "2 月",
  },
  {
    key: "3",
    label: "3 月",
  },
  {
    key: "4",
    label: "4 月",
  },
  {
    key: "5",
    label: "5 月",
  },
  {
    key: "6",
    label: "6 月",
  },
];
const objectStyles = {
  root: {
    backgroundColor: "#ffffff",
    border: "1px solid #d9d9d9",
    borderRadius: "4px",
  },
  item: {
    padding: "8px 12px",
    fontSize: "14px",
  },
  itemTitle: {
    fontWeight: "500",
  },
  itemIcon: {
    color: "#1890ff",
    marginRight: "8px",
  },
  itemContent: {
    backgroundColor: "transparent",
  },
};
const functionStyles = (info) => {
  const { props } = info;
  const isClick = props.trigger?.includes("click");
  if (isClick) {
    return {
      root: {
        borderColor: "#1890ff",
        borderRadius: "8px",
      },
    };
  }
  return {};
};
const TimeLineChart = ({
  title = "时间折线图",
  data,
  xField = "time",
  yField = "value",
  height = 300,
}) => {
  const config = {
    data,
    xField,
    yField,
    height,
    lineStyle: {
      stroke: "#1890ff",
      lineWidth: 2,
      opacity: 1,
    },
    area: {
      style: {
        fill: {
          type: "linear", // 渐变类型：linear（线性）/ radial（径向）
          x0: 0, // 渐变起始点 x 坐标（0-1，0 为最左，1 为最右）
          y0: 0, // 渐变起始点 y 坐标（0-1，0 为最上，1 为最下）
          x1: 0, // 渐变结束点 x 坐标
          y1: 1, // 渐变结束点 y 坐标（0→1 表示从上到下渐变）
          stops: [
            // 渐变颜色节点（offset 0-1，color 为对应位置的颜色）
            { offset: 0, color: "rgba(24, 144, 255, 1)" }, // 顶部：较深的蓝色半透明
            { offset: 1, color: "rgba(24, 144, 255, 0.0)" }, // 底部：完全透明
          ],
        },
        stroke: "#1890ff",
        lineWidth: 1,
      },
    },
    xAxis: {
      type: "time",
      tickMethod: "time",
      label: {
        formatter: (text) => dayjs(text).format("YYYY-MM-DD"),
      },
    },
    yAxis: {
      label: {
        formatter: (v) => `${v.toFixed(2)}`,
      },
    },
    point: {
      size: 5,
      shape: "dot",
    },
    tooltip: {
      showMarkers: true,
      formatter: (datum) => ({
        name: yField,
        value: datum[yField].toFixed(2),
      }),
    },
    smooth: true,
  };

  const { styles } = useStyles();
  const sharedProps = {
    menu: { items },
    placement: "bottomLeft",
    classNames: { root: styles.root },
  };
  return (
    <Card
      title={title}
      className="custom-card-radius"
      style={{ width: "100%", gap: "100px", borderRadius: "16px" }}
    >
      <div
        className="TimeLineChartHeader"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Dropdown {...sharedProps} styles={functionStyles} trigger={["click"]}>
          <Button>
            <Space>
              1月
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <Line {...config} />
    </Card>
  );
};

export default TimeLineChart;
