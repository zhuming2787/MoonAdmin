import React, { useEffect, useRef, useState } from "react";
import { Card, Select, Typography } from "antd";
import * as echarts from "echarts";
// 复用统一的样式规范（和之前的 Deals Details 组件保持一致）
import styles from "./SalesDetails.module.css";

const { Title } = Typography;
const { Option } = Select;

const SalesDetails = () => {
  const chartRef = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState("October");

  // 示例数据（模拟截图中的折线走势）
  const getChartData = (month) => {
    // 不同月份可返回不同数据，此处仅为示例
    return {
      xData: [
        "5k",
        "10k",
        "15k",
        "20k",
        "25k",
        "30k",
        "35k",
        "40k",
        "45k",
        "50k",
        "55k",
        "60k",
      ],
      yData: [20, 32, 48, 30, 52, 85, 45, 22, 30, 72, 65, 58],
      peakValue: 64364.7, // 截图中的峰值
    };
  };

  // 初始化/更新图表
  useEffect(() => {
    if (!chartRef.current) return;

    // 初始化 ECharts 实例
    const chart = echarts.init(chartRef.current);
    setChartInstance(chart);

    // 图表配置（1:1 匹配截图样式）
    const { xData, yData, peakValue } = getChartData(selectedMonth);
    const option = {
      grid: {
        top: "15%",
        left: "3%",
        right: "3%",
        bottom: "15%",
        containLabel: true,
        borderWidth: 0,
      },
      xAxis: {
        type: "category",
        data: xData,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: {
          color: "#9ca3af",
          fontSize: 12,
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#f1f5f9",
            type: "dashed",
          },
        },
      },
      yAxis: {
        type: "value",
        min: 20,
        max: 100,
        axisLabel: {
          formatter: "{value}%",
          color: "#9ca3af",
          fontSize: 12,
        },
        axisLine: { show: false },
        axisTick: { show: false },
        splitLine: {
          show: true,
          lineStyle: {
            color: "#f1f5f9",
            type: "dashed",
          },
        },
      },
      series: [
        {
          name: "Sales",
          type: "line",
          data: yData,
          symbol: "circle",
          symbolSize: 6,
          lineStyle: {
            color: "#3b82f6",
            width: 2,
          },
          itemStyle: {
            color: "#3b82f6",
          },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(59, 130, 246, 0.2)" },
              { offset: 1, color: "rgba(59, 130, 246, 0.05)" },
            ]),
          },
          emphasis: {
            focus: "series",
            itemStyle: {
              color: "#3b82f6",
              borderColor: "#ffffff",
              borderWidth: 2,
            },
          },
          tooltip: {
            formatter: () => `${peakValue}`,
            backgroundColor: "#3b82f6",
            textStyle: { color: "#ffffff" },
            borderWidth: 0,
            borderRadius: 4,
          },
        },
      ],
      tooltip: {
        trigger: "axis",
        backgroundColor: "#3b82f6",
        textStyle: { color: "#ffffff" },
        borderWidth: 0,
        borderRadius: 4,
        formatter: (params) => `${params[0].data}%`,
      },
    };

    // 渲染图表
    chart.setOption(option);

    // 响应式监听
    const handleResize = () => chart.resize();
    window.addEventListener("resize", handleResize);

    // 清理函数
    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [selectedMonth]);

  // 月份切换
  const handleMonthChange = (value) => {
    setSelectedMonth(value);
    if (chartInstance) {
      chartInstance.resize(); // 切换后刷新图表
    }
  };

  return (
    <Card className={styles.salesCard} bordered={false}>
      <div className={styles.headerBar}>
        <Title level={3} className={styles.title}>
          Sales Details
        </Title>
        <Select
          value={selectedMonth}
          onChange={handleMonthChange}
          className={styles.monthSelect}
          size="middle"
        >
          <Option value="January">January</Option>
          <Option value="February">February</Option>
          <Option value="October">October</Option>
          <Option value="December">December</Option>
        </Select>
      </div>

      <div ref={chartRef} className={styles.chartContainer} />
    </Card>
  );
};

export default SalesDetails;
