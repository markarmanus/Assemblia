import React, { useMemo, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin: 5px;
`;

const DropdownComponent = (props) => {
  const [selected, selectOption] = useState(props.current);

  const onClick = ({ key }) => {
    props.onItemSelect(key);
    selectOption(key);
  };

  const items = props.menuItems;

  return (
    <div>
      <StyledLabel>{props.label}</StyledLabel>
      <Dropdown
        menu={{
          items,
          selectable: true,
          defaultSelectedKeys: [props.current],
          onClick,
        }}
        trigger={["click"]}
      >
        <a onClick={(e) => e.preventDefault()}>
          <Space>
            <Button>
              {selected}
              <DownOutlined />
            </Button>
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};
export default DropdownComponent;
