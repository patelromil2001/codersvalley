import { Form, Button, Input, DatePicker } from "antd";


const Quote = () => {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const handleSubmit = (e) => {
    console.log(e)
  }

  return (
    <div id="Quote" className="bg-amber-50">
      <div className="py-12 md:ml-24 mx-6"><span className="text-5xl font-[400]">Get A Quote</span></div>
      <div className="inline-block lg:flex">
        <div className=" ml-6 w-[80%]">
          <Form
            onFinish={handleSubmit}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 800,
            }}
            className="text-lg"
            labelWrap
          >
            <Form.Item
              label={[<span className="text-lg text-gray-600">Your Name</span>]}
              name="name"
              rules={[
                {
                  required: true,
                  message: 'Please input your name!',
                },
              ]}

            >
              <Input className="text-lg" />
            </Form.Item>

            <Form.Item
              label={[<span className="text-lg text-gray-600">Your Position</span>]}
              name="position"
              rules={[
                {
                  required: true,
                  message: 'Please input your position!',
                },
              ]}

            >
              <Input className="text-lg" />
            </Form.Item>

            <Form.Item
              label={[<span className="text-lg text-gray-600">Your Email</span>]}
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Please input your Email!',
                  type: 'email'
                },
              ]}
            >
              <Input className="text-lg" />
            </Form.Item>
            <Form.Item
              label={[<span className="text-lg text-gray-600">Phone Number</span>]}
              name="number"
              rules={[
                {
                  required: true,
                  message: 'Please input your number!',
                },
              ]}
            >
              <Input className="text-lg" />
            </Form.Item>

            <Form.Item
              label={[<span className="text-lg text-gray-600">Company website/ LinkedIn </span>]}
              name="websiteLink"
              rules={[
                {
                  required: true,
                  message: 'Please input the link!',
                },
              ]}
            >
              <Input className="text-lg" />
            </Form.Item>
            <Form.Item
              label={[<span className="text-lg text-gray-600">Who are you looking for?</span>]}
              name="description"
              rules={[
                {
                  required: true,
                  message: 'Please input the description!',
                },
              ]}
            >
              <Input.TextArea className="text-base"
                style={{
                  height: 120,
                }}
                placeholder="Add a link to a job description, or describe the type of skilled tech talent you need." />
            </Form.Item>
            <Form.Item
              label={[<span className="text-lg text-gray-600 ">When are you available for a quick call?</span>]}
              name="date"
              rules={[
                {
                  required: true,
                  message: 'Please input the date!',
                },
              ]}
            >
              <DatePicker className="text-lg" />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button
                type="primary" size="large" htmlType="submit" className="bg-blue-400"
              >
                Get A Quote
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div>
          <img src="/images/Survey.png" alt="" className="lg:relative lg:right-44 lg:h-96" />
        </div>
      </div>


    </div>
  );
}

export default Quote;