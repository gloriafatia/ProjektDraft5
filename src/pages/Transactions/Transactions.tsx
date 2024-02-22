import React, { useState } from "react";
import initialData from "../../Data/trx_mock";
import { Table, Modal, Button, Form, Input, Pagination } from "antd";
import type { ColumnsType } from "antd/es/table";
import { SortOrder } from "antd/es/table/interface";

interface Transactions {
  key: React.Key;
  trx_id: number;
  username: string;
  amount: string;
  currency_id: number;
  bankname: string;
  iban: string;
  swift: string;
  account_holder: string;
  country: string;
  status: string;
  trx_init_time: string | any;
  trx_complete_time: string | null | any;
  operator: string;
  part: string;
}

const Transactions: React.FC = () => {
  const [expandedRowKeys, setExpandedRowKeys] = useState<React.Key[]>([]);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transactions | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState<Partial<Transactions>>({});
  const showModal = (action: "accept" | "reject", record: Transactions) => {
    setSelectedTransaction(record);
    setModalVisible(true);
    setModalAction(action);
  };
  const [modalAction, setModalAction] = useState<"accept" | "reject" | null>(
    null
  );
  const [modaleTr, setModaleTr] = useState(false);
  const [data, setData] = useState<Transactions[]>(initialData);

  const showModalAdd = () => {
    setModaleTr(true);
  };

  const handleCancelAdd = () => {
    setModaleTr(false);
    setFormData({});
  };

  const handleFormChangeAdd = (changedValues: any, allValues: any) => {
    setFormData(allValues);
  };

  const handleFormSubmit = () => {
    const newKey = Date.now();
    const newTransaction: Transactions = {
      key: newKey,
      trx_id: formData.trx_id || 0,
      username: formData.username || "",
      amount: formData.amount || "",
      currency_id: formData.currency_id || 0,
      bankname: formData.bankname || "",
      iban: formData.iban || "",
      swift: formData.swift || "",
      account_holder: formData.account_holder || "",
      country: formData.country || "",
      status: formData.status || "",
      trx_init_time: formData.trx_init_time || null,
      trx_complete_time: formData.trx_complete_time || null,
      operator: formData.operator || "",
      part: formData.part || "",
      ...formData,
    };
    const newData: Transactions[] = [...data, newTransaction];
    setData(newData);
    setModaleTr(false);
    setFormData({});
  };
  const handleModalAction = (
    action: "acceptModal" | "rejectModal" | "cancelModal",
    record: Transactions
  ) => {
    if (action === "acceptModal") {
      console.log("Transaction accepted:", record);
      const updatedRecord = { ...record, status: "confirmed" };
      const updatedData = data.map((item) =>
        item.key === record.key ? updatedRecord : item
      );
      console.log("Transaction accepted:", updatedRecord);
      console.log("Updated data:", updatedData);
      setData(updatedData);
    } else if (action === "rejectModal") {
      console.log("Transaction rejected:", record);
      const updatedRecord = { ...record, status: "rejected" };
      const updatedData = data.map((item) =>
        item.key === record.key ? updatedRecord : item
      );
      console.log("Transaction rejected:", updatedRecord);
      console.log("Updated data:", updatedData);
      setData(updatedData);
    }
    setModalVisible(false);
    setModalAction(null);
  };

  const removeRow = (key: React.Key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };
  const column: ColumnsType<Transactions> = [
    { title: "trx_id", dataIndex: "trx_id", key: "trx_id" },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
      sorter: (a: Transactions, b: Transactions) =>
        a.username.localeCompare(b.username),
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    { title: "amount", dataIndex: "amount", key: "amount" },
    { title: "currency_id", dataIndex: "currency_id", key: "currency_id" },
    {
      title: "trx_init_time",
      dataIndex: "trx_init_time",
      key: "trx_init_time",
      sorter: (a: Transactions, b: Transactions) => {
        if (
          typeof a.trx_init_time === "string" &&
          typeof b.trx_init_time === "string"
        ) {
          return a.trx_init_time.localeCompare(b.trx_init_time);
        }
        return a.trx_init_time - b.trx_init_time;
      },
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    {
      title: "trx_complete_time",
      dataIndex: "trx_complete_time",
      key: "trx_complete_time",
      sorter: (a: Transactions, b: Transactions) => {
        if (
          typeof a.trx_complete_time === "string" &&
          typeof b.trx_complete_time === "string"
        ) {
          return a.trx_complete_time.localeCompare(b.trx_complete_time);
        }
        return a.trx_complete_time - b.trx_complete_time;
      },
      sortDirections: ["ascend", "descend"] as SortOrder[],
    },
    {
      title: "bankname",
      dataIndex: "bankname",
      key: "bankname",
      filters: [
        { text: "bankname", value: "bankname" },
        { text: "bankABC", value: "bankABC" },
        { text: "bankXYZ", value: "bankXYZ" },
        { text: "bankRST", value: "bankRST" },
      ],
      onFilter: (value, record) => {
        return record.bankname === value;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <span>
          {record.status === "pending" && (
            <>
              <Button onClick={() => showModal("accept", record)}>
                Accept
              </Button>
              <Button onClick={() => showModal("reject", record)}>
                Reject
              </Button>
              <Button onClick={() => removeRow(record.key)}>Remove</Button>
            </>
          )}
        </span>
      ),
    },
  ];
  const subcolumns: ColumnsType<Transactions> = [
    { title: "iban", dataIndex: "iban", key: "iban" },
    { title: "swift", dataIndex: "swift", key: "swift" },
    {
      title: "account_holder",
      dataIndex: "account_holder",
      key: "account_holder",
    },
    { title: "country", dataIndex: "country", key: "country" },
    { title: "status", dataIndex: "status", key: "status" },
    { title: "operator", dataIndex: "operator", key: "operator" },
    {
      title: "part",
      dataIndex: "part",
      key: "part",
    },
  ];

  return (
    <>
      <Button onClick={showModalAdd}>AddRow</Button>
      <Table
        columns={column}
        expandable={{
          expandedRowKeys: expandedRowKeys,
          onExpand: (expanded, record) => {
            setExpandedRowKeys(expanded ? [record.key] : []);
          },
          expandedRowRender: (record) => (
            <Table
              columns={subcolumns}
              dataSource={[record]}
              pagination={false}
              style={{ margin: 0 }}
            ></Table>
          ),
        }}
        dataSource={data}
        pagination={{
          pageSizeOptions: ["10", "20", "50", "100"],
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
      <Modal
        title="Add New Row"
        open={modaleTr}
        onCancel={handleCancelAdd}
        onOk={handleFormSubmit}
      >
        <Form
          initialValues={formData}
          onValuesChange={handleFormChangeAdd}
          onFinish={handleFormSubmit}
        >
          <Form.Item label="trx_id" name="trx_id">
            <Input />
          </Form.Item>
          <Form.Item label="username" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="amount" name="amount">
            <Input />
          </Form.Item>
          <Form.Item label="currency_id" name="currency_id">
            <Input />
          </Form.Item>
          <Form.Item label="bankname" name="bankname">
            <Input />
          </Form.Item>
          <Form.Item label="iban" name="iban">
            <Input />
          </Form.Item>
          <Form.Item label="swift" name="swift">
            <Input />
          </Form.Item>
          <Form.Item label="account_holder" name="account_holder">
            <Input />
          </Form.Item>
          <Form.Item label="country" name="country">
            <Input />
          </Form.Item>
          <Form.Item label="status" name="satus">
            <Input />
          </Form.Item>
          <Form.Item label="trx_init_time" name="trx_init_time">
            <Input />
          </Form.Item>
          <Form.Item label="trx_complete_time" name="trx_complete_time">
            <Input />
          </Form.Item>
          <Form.Item label="operator" name="operator">
            <Input />
          </Form.Item>
          <Form.Item label="part" name="part">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
      {selectedTransaction && (
        <Modal
          title="Transaction Details"
          open={modalVisible}
          onCancel={() => setModalVisible(false)}
          footer={[
            modalAction === "accept" && (
              <Button
                key="acceptModal"
                type="primary"
                onClick={() =>
                  handleModalAction("acceptModal", selectedTransaction)
                }
              >
                Accept
              </Button>
            ),
            modalAction === "reject" && (
              <Button
                key="rejectModal"
                type="primary"
                onClick={() =>
                  handleModalAction("rejectModal", selectedTransaction)
                }
              >
                Reject
              </Button>
            ),
            <Button
              key="cancelModal"
              onClick={() =>
                handleModalAction("cancelModal", selectedTransaction)
              }
            >
              Cancel
            </Button>,
          ]}
        >
          <p>
            <strong>Transaction ID:</strong> {selectedTransaction?.trx_id}
          </p>
          <p>
            <strong>Username:</strong> {selectedTransaction?.username}
          </p>
          <p>
            <strong>Amount:</strong> {selectedTransaction?.amount}
          </p>
          <p>
            <strong>CurrencyId:</strong> {selectedTransaction?.currency_id}
          </p>
          <p>
            <strong>Iban:</strong> {selectedTransaction?.iban}
          </p>
          <p>
            <strong>Swift:</strong> {selectedTransaction?.swift}
          </p>
          <p>
            <strong>BankName:</strong> {selectedTransaction?.bankname}
          </p>
          <p>
            <strong>AccountHolder:</strong>{" "}
            {selectedTransaction?.account_holder}
          </p>
          <p>
            <strong>Country:</strong> {selectedTransaction?.country}
          </p>
          <p>
            <strong>Status:</strong> {selectedTransaction?.status}
          </p>
          <p>
            <strong>Operator:</strong> {selectedTransaction?.operator}
          </p>
          <p>
            <strong>Part:</strong> {selectedTransaction?.part}
          </p>
        </Modal>
      )}
    </>
  );
};

export default Transactions;
