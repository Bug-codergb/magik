import ProDrawer from "@/app/components/pro-drawer";
import {useState,useImperativeHandle,forwardRef,FC} from "react";
import {Form, Input, message} from "antd";
import {request} from "@/app/utils/request";
interface IProps{
  success:()=>void
}
const CreateRole:FC<IProps> = forwardRef(function(props, ref){
  const {success} = props;

  const [open, setOpen] = useState(false);
  const [title,setTitle] = useState("新增角色")

      const [formRef] = Form.useForm();
  const handleClose=()=>{
    setOpen(false);
  }
  const handleConfirm=()=>{
    formRef.submit()

  }
  const handleFinish=async (val:any)=>{
    request({
      url:"/api/role/create",
      body:{
        name:val.name
      }
    }).then((res)=>{
      if(res.code === 200){
        setOpen(false);
        success();
        message.success("创建成功");
      }
    })
  }
  const showDrawer=()=>{
    setOpen(true)
  }
      useImperativeHandle(ref,()=>{
        return {
          showDrawer
        }
      })
  return <ProDrawer open={open} onClose={handleClose} onConfirm={handleConfirm} title={title} >
    <Form form={formRef}  layout={"vertical"}
          scrollToFirstError={true}
          onFinish={handleFinish}>
      <Form.Item name={"name"} label={"名称"} rules={[{required:true,message:"角色名称不能为空"}]}>
        <Input placeholder={"请输入角色名称"}/>
      </Form.Item>
    </Form>
  </ProDrawer>
}
)
export default CreateRole;
