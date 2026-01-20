// 定义组件Props:接收标题和内容插槽？
type UICarProps = {
  title: string;
  children: React.ReactNode; //插槽：放图表等内容
};

const UICard = ({ title, children }: UICardProps) => {
  return <Card className={styles.card}></Card>;
};
