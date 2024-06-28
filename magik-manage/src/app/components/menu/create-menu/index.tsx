"use client";
import React, {
  FC,
  forwardRef,
  useState,
  useImperativeHandle,
  useMemo,
} from "react";
import { Modal, Form, Input, Select, Flex, InputNumber, message } from "antd";
import * as iconList from "@ant-design/icons";
import { IMenu } from "@/app/interface/IMenu";

interface IProps {
  finish: () => {};
}
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const CreateMenu: FC<IProps> = forwardRef((props, ref): React.ReactNode => {
  const { finish: propsFinish } = props;
  const [isShow, setIsShow] = useState(false);
  const [formRef] = Form.useForm();

  const [parent, setParent] = useState<IMenu | null>(null);
  const showModal = (menu: IMenu | undefined) => {
    setIsShow(true);
    menu && setParent(menu);
    formRef.resetFields();
  };
  const handleOk = () => {
    formRef.submit();
  };
  const handleCancel = () => {
    setIsShow(false);
  };
  useImperativeHandle(ref, () => {
    return {
      showModal,
    };
  });
  const outlinedIcon = useMemo(() => {
    let ret = {};
    for (const key in iconList) {
      if (key.includes("Outlined")) {
        ret[key] = iconList[key];
      }
    }
    return ret;
  }, [iconList]);

  const handleFormFinish = async (val: any) => {
    let params = {
      parentId: parent?.id,
      title: val.title,
      path: val.path,
      redirect: val.redirect,
      icon: val.icon,
      component: val.component,
      meta: val.meta,
      sort: val.sort,
    };
    const ret = await fetch("/api/menu/create", {
      body: JSON.stringify(params),
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    const res = await ret.json();
    if (res.code === 200) {
      propsFinish();
      setIsShow(false);
      message.success("创建成功");
    }
  };
  return (
    <div>
      <Modal
        title="新增菜单"
        open={isShow}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          variant="filled"
          {...formItemLayout}
          layout="horizontal"
          form={formRef}
          onFinish={handleFormFinish}
        >
          <Form.Item label={"父级菜单"}>
            <Input value={parent?.title} readOnly />
          </Form.Item>
          <Form.Item label={"名称"} name={"title"} rules={[{ required: true }]}>
            <Input placeholder="请输入菜单名称" />
          </Form.Item>
          <Form.Item label={"路径"} name={"path"} rules={[{ required: true }]}>
            <Input placeholder="请输入url" />
          </Form.Item>
          <Form.Item label={"排序"} name={"sort"} rules={[{ required: true }]}>
            <InputNumber placeholder="请输入排序" style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item label={"重定向"} name={"redirect"}>
            <Input placeholder="请输入路由重定向" />
          </Form.Item>
          <Form.Item label={"图标"} name={"icon"} rules={[{ required: true }]}>
            <Select filterOption={filterOption} showSearch>
              {Object.keys(outlinedIcon).map((item) => {
                const Component = outlinedIcon[item];
                return (
                  <Select.Option key={item} value={item} label={item}>
                    <Flex justify={"space-between"}>
                      <div>{item}</div>
                      <Component />
                    </Flex>
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
          <Form.Item
            label={"组件"}
            name={"component"}
            rules={[{ required: true }]}
          >
            <Input placeholder="请输入组件名称" />
          </Form.Item>
          <Form.Item label={"元数据"} name={"meta"}>
            <Input placeholder="请输入路由元数据" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
});
export default CreateMenu;
