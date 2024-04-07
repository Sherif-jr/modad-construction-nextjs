import { Button, Form, Input } from "antd";

const CareersSearch = () => {
  return (
    <Form className="w-full grid grid-cols-2 md:grid-cols-4 gap-6">
      <Form.Item>
        <Input placeholder="Search by position" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Search by Department" />
      </Form.Item>
      <Form.Item>
        <Input placeholder="Search by Company" />
      </Form.Item>
      <Button type="primary" className="bg-primary">
        Search Jobs
      </Button>
    </Form>
  );
};

export default CareersSearch;
