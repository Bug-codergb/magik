"use client";
import { Button, Checkbox, Form, Input,Col, Row  } from "antd";
import { LockOutlined, UserOutlined ,CloseCircleOutlined} from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { changeUserAction } from "@/lib/features/user/userSlice"
import { useRouter } from 'next/navigation'

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};
const Login = () => {
  const router = useRouter()
  const dispatch = useAppDispatch();
  const onFinish = async (val:any) => {
    let params={
      userName:val.username as string,
      password:val.password as string
    }
    await dispatch(changeUserAction(params));
    router.push("/home");
  };
  const onFinishFailed = () => {};
  return (
    <div className={"size-full relative"}>
      <div className={"form-container absolute w-500px p-12 shadow-login left-2/4 top-1/2 translate-y-50 rounded-lg"}>
        <div className={"title mb-3.5"}>
          Magik
        </div>
        <Form
          name="basic"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label=""
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
              autoComplete={"new-password"}
              size={"large"}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label=""
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              autoComplete={"new-password"}
              placeholder="密码"
              size={"large"}
            />
          </Form.Item>

          <Form.Item>
            <Row gutter={20}>
              <Col span={12}>
                <Button block shape={"round"} size={"large"} icon={ <CloseCircleOutlined />}>
                  重置
                </Button>
              </Col>
              <Col span={12}>
                <Button block type="primary" size={"large"} icon={<UserOutlined />} shape={"round"} htmlType="submit">
                  登录
                </Button>
              </Col>
            </Row>


          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
