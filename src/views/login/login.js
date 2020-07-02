import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';



class login extends React.Component {
    render() {


        return (
            <div className='container-login'>
                <Form >
                    <Form.Item
                        label="Usuario"
                        name="username"
                        rules={[{ required: true, message: 'por favor ingresa tu usuario!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        rules={[{ required: true, message: 'Por favor ingresa tu contraseña!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>Recordarme</Checkbox>
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit" className='button'>
                            Iniciar Sesion
                            </Button>
                    </Form.Item>
                </Form>

            </div>
        );
    }
}

export default login;