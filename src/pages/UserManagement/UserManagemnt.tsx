import React, { useState } from "react";
import users from "../../Data/users_mock";
import {
  Form,
  Input,
  InputNumber,
  Table,
  Button,
  Typography,
  Modal,
} from "antd";
import { SortOrder } from "antd/es/table/interface";

interface User {
  key: React.Key;
  user_id: string | any;
  first_name: string;
  last_name: string;
  phone_nr: string;
  gender: string;
  birthday: string;
  username: string;
  street: string;
  city: string;
  postal_code: string;
  country: string;
  user_confirmed: number;
  registered_at: string;
}

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: "number" | "text";
  record: User;
  index: number;
  children: React.ReactNode;
}
const EditableCell: React.FC<EditableCellProps> = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === "number" ? <InputNumber /> : <Input />;

  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{ margin: 0 }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const UserManagement: React.FC = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(users);
  const [editingKey, setEditingKey] = useState("");
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [hapModale, setHapModale] = useState(false);
  const [modalData, setModalData] = useState<User>({} as User);

  const [formData, setFormData] = useState<Partial<User>>({});

  const isEditing = (record: User) => String(record.key) === editingKey;

  const edit = (record: Partial<User> & { key: React.Key }) => {
    form.setFieldsValue({
      user_id: "",
      first_name: "",
      last_name: "",
      phone_nr: "",
      gender: "",
      birthday: "",
      username: "",
      street: "",
      city: "",
      postal_code: "",
      country: "",
      user_comfirmed: "",
      registered_at: "",
      ...record,
    });
    setModalData(record as User);
    setModalVisible(true);
  };

  const save = () => {
    form
      .validateFields()
      .then((values) => {
        const newData = [...data];
        const index = newData.findIndex(
          (item) => modalData && item.key === modalData.key
        );
        if (index > -1) {
          const item = newData[index];
          newData.splice(index, 1, { ...item, ...values });
          setData(newData);
          setModalVisible(false);
        }
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const cancel = () => {
    setModalVisible(false);
  };
  const showModalAdd = () => {
    setHapModale(true);
  };

  const handleFormChangeAdd = (changedValues: any, allValues: any) => {
    setFormData(allValues);
  };

  const handleFormSubmit = () => {
    const newKey = Date.now();
    const newUser: User = {
      key: newKey,
      user_id: formData.user_id || "",
      username: formData.username || "",
      first_name: formData.first_name || "",
      last_name: formData.last_name || "",
      phone_nr: formData.phone_nr || "",
      gender: formData.gender || "",
      birthday: formData.birthday || "",
      street: formData.street || "",
      city: formData.city || "",
      postal_code: formData.postal_code || "",
      country: formData.country || "",
      user_confirmed: formData.user_confirmed || 0,
      registered_at: formData.registered_at || "",
      ...formData,
    };
    const newData: User[] = [...data, newUser];
    setData(newData);
    setHapModale(false);
    setFormData({});
  };
  const handleCancelAdd = () => {
    setHapModale(false);
    setFormData({});
  };
  const removeRow = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };
  const subcolumns = [
    { title: "street", dataIndex: "street", editable: true },
    { title: "city", dataIndex: "city", editable: true },
    {
      title: "postal_code",
      dataIndex: "postal_code",
      editable: true,
    },
    { title: "country", dataIndex: "country", editable: true },
    {
      title: "user_confirmed",
      dataIndex: "user_confirmed",
      editable: true,
    },
    { title: "registered_at", dataIndex: "registered_at" },
  ];
  const columns = [
    {
      title: "user_id",
      dataIndex: "user_id",
      sorter: (a: User, b: User) => {
        if (typeof a.user_id === "string" && typeof b.user_id === "string") {
          return a.user_id.localeCompare(b.user_id);
        }
        return a.user_id - b.user_id;
      },
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    {
      title: "first_name",
      dataIndex: "first_name",
      editable: true,
      sorter: (a: User, b: User) => a.first_name.localeCompare(b.first_name),
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    {
      title: "last_name",
      dataIndex: "last_name",
      editable: true,
      sorter: (a: User, b: User) => a.last_name.localeCompare(b.last_name),
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    { title: "phone_nr", dataIndex: "phone_nr", editable: true },
    { title: "gender", dataIndex: "gender", editable: true },
    { title: "birthday", dataIndex: "birthday", editable: true },
    {
      title: "username",
      dataIndex: "username",
      sorter: (a: User, b: User) => a.username.localeCompare(b.username),
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    {
      title: "actions",
      dataIndex: "actions",
      render: (_: any, record: User) => (
        <>
          <Button type="text" onClick={() => edit(record)}>
            Edit
          </Button>

          <> </>
          <Button type="text" onClick={() => removeRow(record.key)}>
            Remove
          </Button>
        </>
      ),
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record: User) => ({
        record,
        inputType: col.dataIndex === "user_confirmed" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const mergedSubColumns = subcolumns.map((subcol) => {
    if (!subcol.editable) {
      return subcol;
    }
    return {
      ...subcol,
      onCell: (record: User) => ({
        record,
        inputType: subcol.dataIndex === "user_confirmed" ? "number" : "text",
        dataIndex: subcol.dataIndex,
        title: subcol.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Button onClick={showModalAdd}>AddRow</Button>
      <>
        <Modal
          title="Add New Row"
          open={hapModale}
          onCancel={handleCancelAdd}
          onOk={handleFormSubmit}
        >
          <Form
            initialValues={formData}
            onValuesChange={handleFormChangeAdd}
            onFinish={handleFormSubmit}
          >
            <Form.Item label="user_id" name="user_id">
              <Input />
            </Form.Item>
            <Form.Item label="first_name" name="first_name">
              <Input />
            </Form.Item>
            <Form.Item label="last_name" name="last_name">
              <Input />
            </Form.Item>
            <Form.Item label="phone_nr" name="phone_nr">
              <Input />
            </Form.Item>
            <Form.Item label="gender" name="gender">
              <Input />
            </Form.Item>
            <Form.Item label="birthday" name="birthday">
              <Input />
            </Form.Item>
            <Form.Item label="username" name="username">
              <Input />
            </Form.Item>
            <Form.Item label="street" name="street">
              <Input />
            </Form.Item>
            <Form.Item label="city" name="city">
              <Input />
            </Form.Item>
            <Form.Item label="postal_code" name="postal_code">
              <Input />
            </Form.Item>
            <Form.Item label="country" name="country">
              <Input />
            </Form.Item>
            <Form.Item label="user_confirmed" name="user_confirmed">
              <Input />
            </Form.Item>
            <Form.Item label="registered_at" name="registered_at">
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={data}
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
            pageSizeOptions: ["10", "20", "50", "100"],
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
          }}
          expandable={{
            expandedRowKeys: expandedRowKeys,
            onExpand: (expanded, record) => {
              setExpandedRowKeys(expanded ? [record.key] : []);
            },
            expandedRowRender: (record) => (
              <Table
                columns={mergedSubColumns}
                dataSource={[record]}
                pagination={false}
                components={{
                  body: {
                    cell: EditableCell,
                  },
                }}
                style={{ margin: 0 }}
              ></Table>
            ),
          }}
        />
      </Form>
      <Modal
        title="Edit User"
        visible={modalVisible}
        onCancel={cancel}
        footer={[
          <Button key="cancel" onClick={cancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={save}>
            Save
          </Button>,
        ]}
      >
        <Form
          form={form}
          initialValues={modalData}
          onFinish={save}
          preserve={false}
          layout="vertical"
        >
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phone_nr"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Birthday"
            name="birthday"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Street" name="street" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="City" name="city" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Postal Code"
            name="postal_code"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Country"
            name="country"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default UserManagement;
