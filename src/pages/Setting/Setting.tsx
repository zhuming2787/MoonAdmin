import React from "react";
import { Button, Input } from "antd";
import { CameraOutlined } from "@ant-design/icons";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Title from "antd/es/typography/Title";

const PageContainer = styled.div`
  background-color: white;
  max-width: 1000px;
  padding: 60px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LogoUploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;
`;

const LogoPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 8px;
  &:hover {
    background-color: #e8e8e8;
  }
`;

const UploadText = styled.span`
  color: #1677ff;
  font-size: 14px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  width: 100%;
  margin-bottom: 48px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SaveButton = styled(Button)`
  width: 200px;
  height: 48px;
  border-radius: 8px;
  background-color: #3b82f6;
  font-size: 16px;
  font-weight: 500;
  border: none;
  &:hover {
    background-color: #2563eb;
  }
`;

const Setting = () => {
  const [formValues, setFormValues] = React.useState({
    siteName: "",
    copyRight: "",
    seoTitle: "",
    seoDescription: "",
    seoKeywords: "",
  });

  return (
    <div>
      <Title level={3}>设置</Title>
      <PageContainer>
        {/* Logo上传区域 */}
        <LogoUploadArea>
          <LogoPlaceholder>
            <CameraOutlined style={{ fontSize: 32, color: "#4c4c4c" }} />
          </LogoPlaceholder>
          <UploadText>Upload Logo</UploadText>
        </LogoUploadArea>

        {/* 两列表单 */}
        <FormGrid>
          {/* 左列 */}
          <div>
            <FormItem>
              <Label>Site Name</Label>
              <Input
                value={formValues.siteName}
                onChange={(e) =>
                  setFormValues({ ...formValues, siteName: e.target.value })
                }
                placeholder="Enter site name"
                css={css`
                  border-radius: 6px;
                  height: 40px;
                `}
              />
            </FormItem>

            <FormItem style={{ marginTop: 24 }}>
              <Label>SEO Title</Label>
              <Input
                value={formValues.seoTitle}
                onChange={(e) =>
                  setFormValues({ ...formValues, seoTitle: e.target.value })
                }
                placeholder="Enter SEO title"
                css={css`
                  border-radius: 6px;
                  height: 40px;
                `}
              />
            </FormItem>

            <FormItem style={{ marginTop: 24 }}>
              <Label>SEO Keywords</Label>
              <Input
                value={formValues.seoKeywords}
                onChange={(e) =>
                  setFormValues({ ...formValues, seoKeywords: e.target.value })
                }
                placeholder="Enter SEO keywords"
                css={css`
                  border-radius: 6px;
                  height: 40px;
                `}
              />
            </FormItem>
          </div>

          {/* 右列 */}
          <div>
            <FormItem>
              <Label>Copy Right</Label>
              <Input
                value={formValues.copyRight}
                onChange={(e) =>
                  setFormValues({ ...formValues, copyRight: e.target.value })
                }
                placeholder="Enter copyright text"
                css={css`
                  border-radius: 6px;
                  height: 40px;
                `}
              />
            </FormItem>

            <FormItem style={{ marginTop: 24 }}>
              <Label>SEO Description</Label>
              <Input.TextArea
                value={formValues.seoDescription}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    seoDescription: e.target.value,
                  })
                }
                placeholder="Enter SEO description"
                rows={6}
                css={css`
                  border-radius: 6px;
                `}
              />
            </FormItem>
          </div>
        </FormGrid>

        <SaveButton
          type="primary"
          onClick={() => console.log("Saved", formValues)}
        >
          Save
        </SaveButton>
      </PageContainer>
    </div>
  );
};

export default Setting;
