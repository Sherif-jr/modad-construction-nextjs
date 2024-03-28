"use client";
import { IAdmin } from "@/interfaces/Admin.interface";
import { Button, Card, Form, Input } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const SignIn = ({ searchParams }: { searchParams: { returnUrl: string } }) => {
  console.log(searchParams);

  const router = useRouter();
  return (
    <Card>
      <Form
        onFinish={async (values: IAdmin) => {
          const res = await fetch("/api/account/login", {
            method: "POST",
            body: JSON.stringify(values),
          });
          const data = await res.json();
          const returnUrl = searchParams.returnUrl || "/admin/dashboard";
          router.push(returnUrl);
          console.log(data);
        }}
      >
        <div className="mb-12">
          <p className="text-center font-bold text-xl">Welcome to MODAD</p>
          <p className="text-center">Sign in to continue</p>
        </div>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true }]}>
          <Input.Password type="password" placeholder="Password" />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="block mx-auto bg-primary"
          style={{
            display: "block"
          }}
        >
          Sign In
        </Button>
      </Form>
    </Card>
  );
};

export default SignIn;
