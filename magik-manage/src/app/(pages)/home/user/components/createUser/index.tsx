"use client";
import {
  forwardRef,
  useState,
  useImperativeHandle,
  useEffect,
  FC,
  FormEvent,
  useRef,
} from "react";
import type { RadioChangeEvent } from "antd";
import ProDrawer from "@/app/components/pro-drawer";
import UploadFile from "@/app/components/upload-file";
import { Form, Input, Radio, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { IRole } from "@/app/interface/IRole";

interface IProps {
  success?: () => void;
}
interface IFormData {
  userName: string;
  password: string;
  gender: number;
  avatar: "";
}
const CreateUser: FC<IProps> = forwardRef((props, propsRef) => {
  const { success } = props;

  const [title, setTitle] = useState<string>("新增用户");
  const [open, setOpen] = useState(false);

  const [user, setUser] = useState<IFormData>({
    userName: "",
    password: "",
    gender: 1,
    avatar: "",
  });
  const [formRef] = Form.useForm();

  const [roleList, setRole] = useState<IRole[]>([]);
  useEffect(() => {
    fetch("/api/role/all?page=1&limit=10000", {
      method: "post",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setRole(res.rows);
      });
  }, []);
  const onClose = () => {
    setOpen(false);
  };
  const onConfirm = () => {
    formRef.submit();
  };
  const showDrawer = () => {
    setOpen(true);
    formRef.resetFields();
  };
  useImperativeHandle(propsRef, () => {
    return {
      showDrawer,
    };
  });
  const handleGenderChange = (e: RadioChangeEvent) => {
    const formData = { ...user };
    user.gender = e.target.value;
    setUser(user);
  };
  const handleRoleChange = () => {};
  const handleFormFinish = (val: any) => {
    let params = {
      ...val,
    };
    fetch("/api/user/create", {
      body: JSON.stringify(params),
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setOpen(false);
        success && success();
      });
  };

  const [isShowAvatar, setShowAvatar] = useState<boolean>(false);
  const [avatarUrl, setAvatarUrl] = useState<string>("");
  const uploadFileRef = useRef();
  const handleAvatarChange = (e: FormEvent<HTMLInputElement>) => {
    const file = e.currentTarget?.files![0];

    uploadFileRef.current?.showModal(file);
  };
  const handleConfirm = async (val: any) => {
    const url = URL.createObjectURL(val);
    setShowAvatar(true);
    setAvatarUrl(url);
    const rawFormData = new FormData();
    rawFormData.append("file", val);
    rawFormData.append("desc", "用户头像");
    rawFormData.append("warn", "");
    const response = await fetch("/api/file/upload", {
      body: rawFormData,
      method: "post",
    });
    const res = await response.json();
    console.log(res);
    if (res.code === 200) {
      const data = { ...user };
      data.avatar = res.data[0].id;
      formRef.setFieldValue("avatar", res.data[0].id);
    }
  };
  return (
    <>
      <ProDrawer
        onClose={onClose}
        open={open}
        title={title}
        onConfirm={onConfirm}
      >
        <Form
          name={"create-user"}
          layout={"vertical"}
          scrollToFirstError={true}
          autoComplete="new-password"
          form={formRef}
          onFinish={handleFormFinish}
        >
          <Form.Item
            label={"用户名"}
            name={"userName"}
            rules={[{ required: true, message: "用户名不能为空" }]}
          >
            <Input placeholder={"请输入用户名"} autoComplete={"off"} />
          </Form.Item>
          <Form.Item
            label={"密码"}
            name={"password"}
            rules={[{ required: true, message: "密码不能为空" }]}
          >
            <Input.Password placeholder={"请输入密码"} autoComplete={"off"} />
          </Form.Item>
          <Form.Item
            label={"性别"}
            name={"gender"}
            initialValue={user.gender}
            rules={[{ required: true, message: "性别不能为空" }]}
          >
            <Radio.Group onChange={handleGenderChange} value={user.gender}>
              <Radio value={0}>男</Radio>
              <Radio value={1}>女</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label={"角色"} name={"roleList"}>
            <Select
              placeholder={"请选择用户角色"}
              mode={"multiple"}
              maxCount={40}
              style={{ width: "100%" }}
              onChange={handleRoleChange}
              options={roleList}
              fieldNames={{ label: "name", value: "id" }}
            />
          </Form.Item>
          <Form.Item label={"头像"} name={"avatar"} initialValue={user.avatar}>
            <div
              className={"flex justify-center w-40 h-40 bg-slate-100 relative"}
            >
              {!isShowAvatar && (
                <input
                  className={"absolute size-full opacity-0"}
                  type={"file"}
                  onChange={handleAvatarChange}
                />
              )}
              {!isShowAvatar && <PlusOutlined />}
              {isShowAvatar && <img src={avatarUrl} />}
            </div>
          </Form.Item>
        </Form>
      </ProDrawer>
      <UploadFile
        ref={uploadFileRef}
        aspectRatio={1}
        confirm={(val: any) => handleConfirm(val)}
      />
    </>
  );
});
export default CreateUser;
