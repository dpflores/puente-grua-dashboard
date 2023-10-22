import { Button } from "antd";
import React, { Fragment } from "react";
import { ConfigProvider } from "antd";

export default function RefreshButton() {
  return (
    <Fragment>
      <ConfigProvider
        theme={{
          token: {
            // Seed Token
            colorPrimary: "#0e1171",
          },
        }}
      >
        <Button type="primary">Actualizar</Button>
      </ConfigProvider>
    </Fragment>
  );
}
