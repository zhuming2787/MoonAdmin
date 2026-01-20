import { Card, Masonry } from "antd";
import { css } from "@emotion/react";
import Title from "antd/es/typography/Title";
import styled from "@emotion/styled";
import type { MasonryItemType } from "../MasonryItem";
const PageContainer = styled.div`
  max-width: 1140px;
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ChartCard = styled(Card)`
  height: 318px;
  width: 1140px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const headerStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

const filterStyle = css`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const heights = [
  150, 400, 100, 70, 110, 150, 130, 80, 50, 90, 100, 150, 60, 50, 80,
].map((height, index) => {
  const item: MasonryItemType = {
    key: `item-${index}`,
    data: height,
  };

  if (index === 4) {
    item.children = (
      <Card
        size="small"
        cover={
          <img
            alt="food"
            src="https://images.unsplash.com/photo-1491961865842-98f7befd1a60?w=523&auto=format"
          />
        }
      >
        <Card.Meta title="I'm Special" description="Let's have a meal" />
      </Card>
    );
  }

  return item;
});

const Elements: React.FC = () => {
  return (
    <PageContainer>
      <header css={headerStyle}>
        <Title level={3}>UI组件</Title>
        <div css={filterStyle}>
          <span>Filter By:</span>
        </div>
      </header>

      <Masonry
        columns={4}
        gutter={16}
        items={heights}
        itemRender={({ data, index }) => (
          <Card size="small" style={{ height: data }}>
            {index + 1}
          </Card>
        )}
      />
    </PageContainer>
  );
};

export default Elements;
